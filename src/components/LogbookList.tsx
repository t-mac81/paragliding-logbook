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
  // const [logbookSorted, setLogbookSorted] = useState<Array<FlightLog>>([]);
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
        const flightLogsUnsorted = logbookData?.data?.listFlightLogs?.items || [];
        setLogbookList(
          flightLogsUnsorted.sort((a, b) => {
            const aStart = a?.startDateTime || 0;
            const bStart = b?.startDateTime || 0;
            const aEpochTime = Math.floor(Number(new Date(aStart)));
            const bEpochTime = Math.floor(Number(new Date(bStart)));
            return bEpochTime - aEpochTime;
          })
        );
      } catch (e) {
        console.error('Error getting logbook list: ', e); // eslint-disable-line no-console
      }
    };
    getLogbookList();
  }, [showModal, cognitoIdentity, propId, setLogbookList]);

  const editFlightLog = (flightlog: FlightLog) => {
    setFlightlogEdit(flightlog);
    setShowModal(true);
  };
  let flightNumber = logbookList.length + 1;
  return (
    <div>
      <IonList>
        {logbookList?.map((flightLog: FlightLog) => {
          flightNumber -= 1;
          return (
            <IonItem button key={flightLog.id} onClick={() => editFlightLog(flightLog)}>
              {' '}
              {flightNumber}. {moment(flightLog.startDateTime).format('MMM Do YYYY HH:mm')}{' '}
              {flightLog.launchSite}{' '}
            </IonItem>
          );
        })}
      </IonList>
    </div>
  );
};
export default LogbookList;
