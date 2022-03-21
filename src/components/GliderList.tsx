import { IonButton, IonCard, IonInput, IonItem, IonLabel, IonModal } from '@ionic/react';
import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

const validationSchema = yup.object({
  manufacture: yup.string().nullable().required('Manufacture is required'),
  model: yup.string().nullable().required('Model is required'),
  size: yup.string().nullable().required('Size is required'),
  color: yup.string().nullable().required('Color is required'),
  certification: yup.string().nullable().required('Certification is required'),
});

const GliderList: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const emptyGlider = {
    manufacture: '',
    model: '',
    size: '',
    color: '',
    certification: '',
  };

  return (
    <div>
      <IonModal isOpen={showModal}>
        <Formik
          initialValues={emptyGlider}
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
                  <IonLabel position='stacked'> Manufacture: </IonLabel>
                  <IonInput
                    type='text'
                    name='manufacture'
                    value={formikProps.values.manufacture}
                    onIonChange={formikProps.handleChange}
                  />
                  <div className='error'>
                    {formikProps.touched.manufacture && formikProps.errors.manufacture}
                  </div>
                </IonItem>
              </IonCard>

              <IonCard>
                <IonItem>
                  <IonLabel position='stacked'> Model: </IonLabel>
                  <IonInput
                    type='text'
                    name='model'
                    value={formikProps.values.model}
                    onIonChange={formikProps.handleChange}
                  />
                  <div className='error'>
                    {formikProps.touched.model && formikProps.errors.model}
                  </div>
                </IonItem>
              </IonCard>

              <IonCard>
                <IonItem>
                  <IonLabel position='stacked'> Size: </IonLabel>
                  <IonInput
                    type='text'
                    name='size'
                    placeholder='Small / Medium / Large'
                    value={formikProps.values.size}
                    onIonChange={formikProps.handleChange}
                  />
                  <div className='error'>{formikProps.touched.size && formikProps.errors.size}</div>
                </IonItem>
              </IonCard>

              <IonCard>
                <IonItem>
                  <IonLabel position='stacked'> Color: </IonLabel>
                  <IonInput
                    type='text'
                    name='color'
                    value={formikProps.values.color}
                    onIonChange={formikProps.handleChange}
                  />
                  <div className='error'>
                    {formikProps.touched.color && formikProps.errors.color}
                  </div>
                </IonItem>
              </IonCard>

              <IonCard>
                <IonItem>
                  <IonLabel position='stacked'> Certfication: </IonLabel>
                  <IonInput
                    type='text'
                    name='certification'
                    placeholder='EN A / EN B / EN C / EN D'
                    value={formikProps.values.certification}
                    onIonChange={formikProps.handleChange}
                  />
                  <div className='error'>
                    {formikProps.touched.certification && formikProps.errors.certification}
                  </div>
                </IonItem>
              </IonCard>

              <IonButton type='submit'>Submit</IonButton>
              <IonButton onClick={() => setShowModal(false)}>Cancel</IonButton>
            </form>
          )}
        </Formik>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Add Glider</IonButton>
    </div>
  );
};
export default GliderList;
