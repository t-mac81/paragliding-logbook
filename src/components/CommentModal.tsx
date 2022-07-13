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
import { closeModal } from '../features/commentModalSlice';
import { Comment } from '../API';

interface ModalState {
  commentModal: any;
  isOpen: boolean;
}

const CommentModal: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen }: ModalState = useSelector((store: ModalState) => store.commentModal);
  const validationSchema = yup.object({
    message: yup.string().nullable().required('Please enter a comment'),
  });

  const emptyComment = {
    id: undefined,
    message: null,
  };

  // const createNewComment = async (studentComment) => {
  //   await API.graphql({
  //     query: createNewComment,
  //     variables: {
  //       input: {message: studentComment }
  //     }
  //   })
  // }

  const onSubmit = (data: Comment) => {
    console.log(data.message);
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
