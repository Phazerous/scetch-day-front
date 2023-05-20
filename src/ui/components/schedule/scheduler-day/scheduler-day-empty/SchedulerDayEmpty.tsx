import Image from 'next/image';

import styles from './scheduler-day-empty.module.scss';

export default function SchedulerDayEmpty() {
  return (
    <>
      <div className={styles.dropArea}>
        <Image
          src='/icons/drop.svg'
          width={19}
          height={19}
          alt='Drop Icon'
        />
      </div>
    </>
  );
}
