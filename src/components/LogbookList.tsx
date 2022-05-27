import { IonItem, IonList } from '@ionic/react';
import { API } from 'aws-amplify';
import { useEffect } from 'react';
import moment from 'moment';
import { ListFlightLogsQuery } from '../API';
import { listFlightLogs } from '../graphql/queries';
import { FlightLog } from '../models';

export interface LogbookListProps {
  showModal: boolean;
  setShowModal: Function;
  flightlogEdit: FlightLog;
  setFlightlogEdit: Function;
  logbookList: Array<FlightLog>;
  setLogbookList: Function;
}

const LogbookList = ({
  showModal,
  setShowModal,
  setFlightlogEdit,
  logbookList,
  setLogbookList,
}: LogbookListProps) => {
  const getLogbookList = async () => {
    try {
      const logbookData = (await API.graphql({
        query: listFlightLogs,
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })) as { data: ListFlightLogsQuery };

      setLogbookList(logbookData?.data?.listFlightLogs?.items || []);
    } catch (e) {
      console.error('Error getting logbook list: ', e);
    }
  };

  useEffect(() => {
    if (showModal) return;

    getLogbookList();
  }, [showModal]);

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
