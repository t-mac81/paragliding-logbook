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

  return (
    <IonModal isOpen={isOpen} onDidDismiss={() => dispatch(closeModal())}>
      <IonContent>
        <Formik
          initialValues={emptyComment}
          validationSchema={validationSchema}
          onSubmit={values => {
            alert(JSON.stringify(values, null, 2));
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
