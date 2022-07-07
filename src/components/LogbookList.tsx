import { IonItem, IonList } from '@ionic/react';
import { API } from 'aws-amplify';
import { useEffect } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { ListFlightLogsQuery } from '../API';
import { listFlightLogs } from '../graphql/queries';
import { FlightLog } from '../models';
import { RootState } from '../app/store';

export interface LogbookListProps {
  showModal: boolean;
  setShowModal: Function;
  flightlogEdit: FlightLog;
  setFlightlogEdit: Function;
  logbookList: Array<FlightLog>;
  setLogbookList: Function;
  id: string | null;
}

const LogbookList = ({
  showModal,
  setShowModal,
  setFlightlogEdit,
  logbookList,
  setLogbookList,
  id: propId,
}: LogbookListProps) => {
  const cognitoIdentity = useSelector((state: RootState) => state.cognitoIdentity);

  useEffect(() => {
    if (showModal) return;
    const ownerId = !propId ? cognitoIdentity.cognito.sub || null : propId;
    const getLogbookList = async () => {
      try {
        const logbookData = (await API.graphql({
          query: listFlightLogs,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
          variables: { filter: { owner: { eq: ownerId } } },
        })) as { data: ListFlightLogsQuery };
        console.log(logbookData);

        setLogbookList(logbookData?.data?.listFlightLogs?.items || []);
      } catch (e) {
        console.error('Error getting logbook list: ', e);
      }
    };
    getLogbookList();
  }, [showModal, cognitoIdentity, propId, setLogbookList]);

  const editFlightLog = (flightlog: FlightLog) => {
    setFlightlogEdit(flightlog);
    setShowModal(true);
  };

  return (
    <div>
      <IonList>
        {logbookList?.map((flightLog: FlightLog) => {
          return (
            <IonItem button key={flightLog.id} onClick={() => editFlightLog(flightLog)}>
              {' '}
              {moment(flightLog.startDateTime).format('MMM Do YYYY HH:mm')} {flightLog.launchSite}{' '}
            </IonItem>
          );
        })}
      </IonList>
    </div>
  );
};
export default LogbookList;
