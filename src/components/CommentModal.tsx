import {
  IonButton,
  IonCard,
  IonContent,
  IonItem,
  IonLabel,
  IonModal,
  IonTextarea,
} from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { API } from 'aws-amplify';
import { closeModal } from '../features/commentModalSlice';
import { Comment } from '../API';
import { createComment } from '../graphql/mutations';

interface ModalState {
  commentModal: any;
  isOpen: boolean;
}

interface UserIdProps {
  userProfileId: string;
}

const CommentModal = ({ userProfileId }: UserIdProps) => {
  const dispatch = useDispatch();
  const { isOpen }: ModalState = useSelector((store: ModalState) => store.commentModal);
  const validationSchema = yup.object({
    message: yup.string().nullable().required('Please enter a comment'),
  });

  const emptyComment = {
    id: undefined,
    message: null,
  };

  const createNewComment = async (data: Comment) => {
    await API.graphql({
      query: createComment,
      variables: {
        input: { message: data.message, userProfileCommentsId: userProfileId },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
    dispatch(closeModal());
  };

  const onSubmit = (data: Comment) => {
    createNewComment(data);
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={() => dispatch(closeModal())}>
      <IonContent>
        <Formik
          initialValues={emptyComment}
          validationSchema={validationSchema}
          onSubmit={values => {
            const data = values as unknown as Comment;
            onSubmit(data);
          }}
        >
          {formikProps => (
            /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

            <form onSubmit={formikProps.handleSubmit}>
              <IonCard>
                <IonItem>
                  <IonLabel position='stacked'>Student Comments:</IonLabel>
                  <IonTextarea
                    placeholder='Enter student comments here'
                    name='message'
                    value={formikProps.values.message}
                    onIonChange={formikProps.handleChange}
                  />
                  <div className='error'>
                    {formikProps.touched.message && formikProps.errors.message}
                  </div>
                </IonItem>
              </IonCard>

              <IonButton type='submit'>Submit</IonButton>
              <IonButton onClick={() => dispatch(closeModal())}>Cancel</IonButton>
            </form>
          )}
        </Formik>
      </IonContent>
    </IonModal>
  );
};

export default CommentModal;
