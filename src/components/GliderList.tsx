import { IonButton, IonCard, IonInput, IonItem, IonLabel, IonList, IonModal } from '@ionic/react';
import { API } from 'aws-amplify';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { CreateGliderMutation, Glider, ListGlidersQuery } from '../API';
import { createGlider } from '../graphql/mutations';
import { listGliders } from '../graphql/queries';

const validationSchema = yup.object({
  manufacture: yup.string().nullable().required('Manufacture is required'),
  model: yup.string().nullable().required('Model is required'),
  size: yup.string().nullable().required('Size is required'),
  color: yup.string().nullable().required('Color is required'),
  certification: yup.string().nullable().required('Certification is required'),
});

const emptyGlider = {
  manufacturer: '',
  model: '',
  size: '',
  color: '',
  certification: '',
};

const GliderList: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [gliderList, setGliderList] = useState<Array<any> | null>(null);
  const [gliderEdit, setGliderEdit] = useState<Glider | null>(null);

  useEffect(() => {
    const getGliders = async () => {
      try {
        const glidersData = (await API.graphql({
          query: listGliders,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })) as { data: ListGlidersQuery };
        console.log(glidersData);
        setGliderList(glidersData?.data?.listGliders?.items || null);
      } catch (error) {
        console.log(error);
      }
    };
    getGliders();
  }, []);

  const editGlider = (glider: Glider) => {
    setGliderEdit(glider);
    setShowModal(true);
  };

  const newGlider = () => {
    setGliderEdit(null);
    setShowModal(true);
  };

  const createNewGlider = async (data: Glider) => {
    const response = (await API.graphql({
      query: createGlider,
      variables: {
        input: {
          ...data,
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })) as { data: CreateGliderMutation };

    setShowModal(false);
  };

  const onSubmit = (event: any) => {
    console.log('running onsubmit');
    console.log('event.target: ', event);
    const data = event as Glider;

    return createNewGlider(data);
  };
  return (
    <div>
      <IonList>
        {gliderList?.map(glider => {
          return <IonItem onClick={() => editGlider(glider)}>{glider.color}</IonItem>;
        })}
      </IonList>
      <IonModal isOpen={showModal}>
        <Formik
          initialValues={gliderEdit || emptyGlider}
          validationSchema={validationSchema}
          onSubmit={event => {
            onSubmit(event);
          }}
        >
          {formikProps => (
            /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
            <form onSubmit={formikProps.handleSubmit}>
              <IonCard>
                <IonItem>
                  <IonLabel position='stacked'> Manufacturer: </IonLabel>
                  <IonInput
                    type='text'
                    name='manufacturer'
                    value={formikProps.values.manufacturer}
                    onIonChange={formikProps.handleChange}
                  />
                  <div className='error'>
                    {formikProps.touched.manufacturer && formikProps.errors.manufacturer}
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

              <IonButton type='submit'> {gliderEdit ? 'Update' : 'Submit'}</IonButton>
              <IonButton onClick={() => setShowModal(false)}>Cancel</IonButton>
            </form>
          )}
        </Formik>
      </IonModal>
      <IonButton onClick={newGlider}>Add Glider</IonButton>
    </div>
  );
};
export default GliderList;
