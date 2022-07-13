import { IonList, IonItem, IonListHeader } from '@ionic/react';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Comment, ListCommentsQuery } from '../API';
import { listComments } from '../graphql/queries';

interface CommentListProps {
  propId: string | null;
}

const CommentList = ({ propId }: CommentListProps) => {
  const [commentList, setCommentList] = useState<Array<Comment | null>>([]);
  useEffect(() => {
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
  }, []);

  return (
    <div>
      {propId === null ? (
        ''
      ) : (
        <IonList>
          <IonListHeader>Instructor Comments:</IonListHeader>
          {commentList?.map((comment: Comment | null) => {
            return (
              <IonItem button key={comment!.id}>
                {comment!.message}
              </IonItem>
            );
          })}
        </IonList>
      )}
    </div>
  );
};
export default CommentList;
