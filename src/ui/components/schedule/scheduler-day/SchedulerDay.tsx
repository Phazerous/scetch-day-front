import SchedulerDayEmpty from './scheduler-day-empty/SchedulerDayEmpty';
import SchedulerDayHeader from './scheduler-day-header/SchedulerDayHeader';
import SchedulerDayTask from './scheduler-day-task/SchedulerDayTask';
import styles from './scheduler-day.module.scss';

interface SchedulerDayProps {
  date: Date;
  tasks: Task[];
  handleDrop: (
    e: React.DragEvent<HTMLDivElement>,
    droppedTaskID: number
  ) => void;
}

export default function SchedulerDay({
  date,
  tasks,
  handleDrop,
}: SchedulerDayProps) {
  return (
    <>
      <section className={styles.day}>
        <SchedulerDayHeader date={date} />
        {tasks.map((task, idx) => (
          <SchedulerDayTask
            handleDrop={(e: React.DragEvent<HTMLDivElement>) =>
              handleDrop(e, task.id)
            }
            idx={idx}
            key={task.id}
            task={task}
            isLast={idx === tasks.length - 1}
          />
        ))}
        {!tasks.length && <SchedulerDayEmpty />}
      </section>
    </>
  );
}
