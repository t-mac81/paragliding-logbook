import {
  IonButton,
  IonCard,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonSelect,
  IonSelectOption,
  IonTextarea,
} from '@ionic/react';
import { API } from 'aws-amplify';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FlightLog, ListGlidersQuery } from '../API';
import { createFlightLog, updateFlightLog } from '../graphql/mutations';
import { listGliders } from '../graphql/queries';
import scrubData from '../utils/ModelUtil';
import { RootState } from '../app/store';

export interface ShowModalProps {
  showModal: boolean;
  setShowModal: Function;
  flightlogEdit: FlightLog;
  setFlightlogEdit: Function;
  id: string | null;
}

const LogbookModalForm = ({
  showModal,
  setShowModal,
  flightlogEdit,
  setFlightlogEdit,
  id: propId,
}: ShowModalProps) => {
  const [gliderList, setGliderList] = useState<Array<any> | null>(null);

  const validationSchema = yup.object({
    startDateTime: yup.string().nullable().required('Start date/time is required'),
    duration: yup.number().nullable().required('Duration is required'),
    launchSite: yup.string().nullable().required('Launch site is required'),
    launchConditions: yup.string().nullable().required('Launch conditions are required'),
    description: yup.string().nullable().required('Description is required'),
    flightLogGliderId: yup.string().nullable().required('Glider is required'),
  });

  const emptyFlightLog = {
    id: undefined,
    startDateTime: null,
    duration: null,
    launchSite: null,
    launchConditions: null,
    description: null,
    flightLogGliderId: null,
  };

  const cognitoIdentity = useSelector((state: RootState) => state.cognitoIdentity);

  useEffect(() => {
    const ownerId = propId || cognitoIdentity.cognito.sub;
    console.log('flightlog: ', flightlogEdit);
    const getGliders = async () => {
      try {
        const glidersData = (await API.graphql({
          query: listGliders,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
          variables: { filter: { owner: { eq: ownerId } } },
        })) as { data: ListGlidersQuery };
        console.log(glidersData);
        setGliderList(glidersData?.data?.listGliders?.items || null);
      } catch (error) {
        console.log(error);
      }
    };
    getGliders();
  }, [cognitoIdentity.cognito.sub, flightlogEdit]);

  const createNewFlightLog = async (data: FlightLog) => {
    await API.graphql({
      query: createFlightLog,
      variables: {
        input: {
          ...data,
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
    closeModal();
  };

  const updateExistingFlightLog = async (data: FlightLog) => {
    const { glider, ...rest } = data;
    await API.graphql({
      query: updateFlightLog,
      variables: {
        input: {
          ...scrubData(rest),
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
    closeModal();
  };

  const onSubmit = (data: FlightLog) => {
    if (data?.id) {
      updateExistingFlightLog(data);
      return;
    }

    createNewFlightLog(data);
  };
  const closeModal = () => {
    setFlightlogEdit(emptyFlightLog);
    setShowModal(false);
  };
  return (
    <IonModal isOpen={showModal} onDidDismiss={() => closeModal()}>
      <IonContent>
        <Formik
          initialValues={flightlogEdit || emptyFlightLog}
          validationSchema={validationSchema}
          onSubmit={values => {
            const data = values as unknown as FlightLog;
            onSubmit(data);
          }}
        >
          {formikProps => (
            /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

            <form onSubmit={formikProps.handleSubmit}>
              <IonCard>
                <IonItem>
                  <IonLabel position='stacked'>Date and Time:</IonLabel>
                  <IonDatetimeButton datetime='startDateTime' />
                  <IonModal keepContentsMounted>
                    <IonDatetime
                      id='startDateTime'
                      name='startDateTime'
                      value={formikProps.values.startDateTime}
                      onIonChange={formikProps.handleChange}
                    />
                  </IonModal>
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
                  <IonSelect
                    name='flightLogGliderId'
                    value={formikProps.values.flightLogGliderId}
                    placeholder='Select the glider flown'
                    onIonChange={formikProps.handleChange}
                  >
                    {gliderList?.map(glider => (
                      <IonSelectOption key={glider.id} value={glider.id}>
                        {glider.manufacturer} {glider.model}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                  <div className='error'>
                    {formikProps.touched.flightLogGliderId && formikProps.errors.flightLogGliderId}
                  </div>
                </IonItem>
              </IonCard>
              <IonCard>
                <IonItem>
                  <IonLabel position='stacked'>Launch Conditions:</IonLabel>
                  <IonTextarea
                    placeholder='Wind direction & speed, cloud cover'
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
              {propId === null ? (
                <IonButton type='submit'>{formikProps?.values?.id ? 'Update' : 'Submit'}</IonButton>
              ) : (
                ''
              )}

              <IonButton onClick={() => closeModal()}>Cancel</IonButton>
            </form>
          )}
        </Formik>
      </IonContent>
    </IonModal>
  );
};

export default LogbookModalForm;
