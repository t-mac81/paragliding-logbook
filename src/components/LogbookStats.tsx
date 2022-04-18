import { IonCard, IonCardContent } from '@ionic/react';

interface LogbookStatsProps {
  logbookList: Array<any>;
}
const LogbookStats = ({ logbookList }: LogbookStatsProps) => {
  let totalHours = 0;
  logbookList.forEach(logEntry => {
    totalHours += logEntry.duration / 60;
  });
  return (
    <div>
      <IonCard>
        <IonCardContent>
          Total Flights: {logbookList.length} Total Hours: {Math.trunc(totalHours)}
        </IonCardContent>
      </IonCard>
    </div>
  );
};
export default LogbookStats;
