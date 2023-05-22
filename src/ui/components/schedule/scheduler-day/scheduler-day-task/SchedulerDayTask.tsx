import { useState } from 'react';
import styles from './scheduler-day-task.module.scss';

interface SchedulerDayTask {
  task: Task;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  isLast?: boolean;
  idx: number;
}

export default function SchedulerDayTask({
  task,
  isLast = false,
  handleDrop: onDrop,
  idx,
}: SchedulerDayTask) {
  const combinedStyle = `${styles.task} ${isLast ? styles.last : ''}`;

  const [isDraggedOver, setDraggedOver] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDraggedOver(true);
    e.currentTarget.classList.add(styles.draggedOver);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    onDrop(e);
    setDraggedOver(false);
    e.currentTarget.classList.remove(styles.draggedOver);
  };

  return (
    <>
      <div
        className={combinedStyle}
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <span className={`${isDraggedOver ? styles.notSelectable : ''}`}>
          {task.title + ' ' + idx}
        </span>
      </div>
    </>
  );
}
