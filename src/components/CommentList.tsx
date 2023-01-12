import { IonList, IonItem, IonListHeader, IonActionSheet } from '@ionic/react';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Comment, ListCommentsQuery } from '../API';
import { deleteComment } from '../graphql/mutations';
import { listComments } from '../graphql/queries';

interface CommentListProps {
  propId: string | null;
}

const CommentList = ({ propId }: CommentListProps) => {
  const [commentList, setCommentList] = useState<Array<Comment | null>>([]);
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [commentId, setCommentId] = useState<String>('');
  useEffect(() => {
    if (showActionSheet) return;
    const getCommentList = async () => {
      try {
        const commentData = (await API.graphql({
          query: listComments,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
          variables: { filter: { userProfileCommentsId: { eq: propId } } },
        })) as { data: ListCommentsQuery };
        console.log('commentData: ', commentData);

        setCommentList(commentData?.data?.listComments?.items || []);
      } catch (e) {
        console.error('Error getting comment list: ', e);
      }
    };
    getCommentList();
  }, [propId, showActionSheet]);

  const commentDelete = async () => {
    await API.graphql({
      query: deleteComment,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      variables: {
        input: { id: commentId },
      },
    });
  };

  return (
    <div>
      {propId === null ? (
        ''
      ) : (
        <IonList>
          <IonListHeader>Instructor Comments:</IonListHeader>
          {commentList?.map((comment: Comment | null) => {
            const commentID = comment?.id || '';
            const commentMessage = comment?.message || '';
            return (
              <IonItem
                button
                key={commentID}
                onClick={() => {
                  setShowActionSheet(true);
                  setCommentId(commentID);
                }}
              >
                {commentMessage}
              </IonItem>
            );
          })}
        </IonList>
      )}
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[
          {
            text: 'Delete Comment',
            role: 'destructive',
            handler: () => {
              console.log('Delete Comment');
              commentDelete();
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel Clicked');
            },
          },
        ]}
      />
    </div>
  );
};
export default CommentList;
