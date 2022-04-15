import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonDatetime,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTextarea,
} from '@ionic/react';
import { Formik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

const validationSchema = yup.object({
  startDateTime: yup.string().nullable().required('Start date/time is required'),
  duration: yup.number().nullable().required('Duration is required'),
  launchSite: yup.string().nullable().required('Launch site is required'),
  launchConditions: yup.string().nullable().required('Launch conditions are required'),
  description: yup.string().nullable().required('Description is required'),
  glider: yup.string().nullable().required('Glider is required'),
});

const emptyFlightLog = {
  startDateTime: null,
  duration: null,
  launchSite: null,
  launchConditions: null,
  description: null,
  glider: null,
};

const LogbookList: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <IonCard>
        <IonCardContent>Total Flights: 00 Total Hours: 00</IonCardContent>
      </IonCard>
      <IonButton onClick={() => setShowModal(true)}>New Entry</IonButton>
      <IonList>Flights list</IonList>
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonContent>
          <Formik
            initialValues={emptyFlightLog}
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
                    <IonLabel position='stacked'>Date and Time:</IonLabel>
                    <IonDatetime
                      displayFormat='MMM DD, YYYY HH:mm'
                      name='startDateTime'
                      placeholder='Date and time you launched'
                      value={formikProps.values.startDateTime}
                      onIonChange={formikProps.handleChange}
                    />
                    <div className='error'>
                      {formikProps.touched.startDateTime && formikProps.errors.startDateTime}
                    </div>
                  </IonItem>
                </IonCard>
                <IonCard>
                  <IonItem>
                    <IonLabel position='stacked'>Duration:</IonLabel>
                    <IonInput
                      type='text'
                      name='duration'
                      placeholder='Duration of flight in minutes'
                      value={formikProps.values.duration}
                      onIonChange={formikProps.handleChange}
                    />
                    <div className='error'>
                      {formikProps.touched.duration && formikProps.errors.duration}
                    </div>
                  </IonItem>
                </IonCard>
                <IonCard>
                  <IonItem>
                    <IonLabel position='stacked'>Launch Site:</IonLabel>
                    <IonInput
                      type='text'
                      name='launchSite'
                      placeholder='Name of launch site'
                      value={formikProps.values.launchSite}
                      onIonChange={formikProps.handleChange}
                    />
                    <div className='error'>
                      {formikProps.touched.launchSite && formikProps.errors.launchSite}
                    </div>
                  </IonItem>
                </IonCard>
                <IonCard>
                  <IonItem>
                    <IonLabel position='stacked'>Glider:</IonLabel>
                    <IonInput
                      type='text'
                      name='glider'
                      placeholder='Select the glider flown'
                      value={formikProps.values.glider}
                      onIonChange={formikProps.handleChange}
                    />
                    <div className='error'>
                      {formikProps.touched.glider && formikProps.errors.glider}
                    </div>
                  </IonItem>
                </IonCard>
                <IonCard>
                  <IonItem>
                    <IonLabel position='stacked'>Launch Conditions:</IonLabel>
                    <IonTextarea
                      placeholder='Wind direction & speed, cloud cover.'
                      name='launchConditions'
                      value={formikProps.values.launchConditions}
                      onIonChange={formikProps.handleChange}
                    />
                    <div className='error'>
                      {formikProps.touched.launchConditions && formikProps.errors.launchConditions}
                    </div>
                  </IonItem>
                </IonCard>
                <IonCard>
                  <IonItem>
                    <IonLabel position='stacked'>Flight Description:</IonLabel>
                    <IonTextarea
                      placeholder='Decribe your flight!'
                      name='description'
                      value={formikProps.values.description}
                      onIonChange={formikProps.handleChange}
                    />
                    <div className='error'>
                      {formikProps.touched.description && formikProps.errors.description}
                    </div>
                  </IonItem>
                </IonCard>
                <IonButton type='submit'>Submit</IonButton>
                <IonButton onClick={() => setShowModal(false)}>Cancel</IonButton>
              </form>
            )}
          </Formik>
        </IonContent>
      </IonModal>
    </div>
  );
};
export default LogbookList;
