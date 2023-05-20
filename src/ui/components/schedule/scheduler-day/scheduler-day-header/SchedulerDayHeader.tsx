interface SchedulerDayHeaderProps {
  date: Date;
}

import styles from './scheduler-day-header.module.scss';

export default function SchedulerDayHeader({ date }: SchedulerDayHeaderProps) {
  const options1: Intl.DateTimeFormatOptions = { weekday: 'long' };
  const dayOfWeek = date.toLocaleString('en-US', options1);

  const options2: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
  };
  const dayOfMonthAndMonth = date.toLocaleDateString('en-US', options2);

  return (
    <>
      <div>
        <h5 className={styles.dayOfWeek}>{dayOfWeek}</h5>
        <div className={styles.containerDayOfMonthAndMonth}>
          <h5>{dayOfMonthAndMonth}</h5>
        </div>
      </div>
    </>
  );
}
