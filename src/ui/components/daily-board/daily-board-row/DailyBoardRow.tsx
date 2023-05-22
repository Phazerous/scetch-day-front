import { useState } from 'react';
import { getFormattedTimeFromMinutes } from '../../../../utils/date-time-formatter';
import { DailyBoardTask } from './DailyBoardTask.interface';

interface DailyBoardRowProps {
  dailyBoardTask: DailyBoardTask;
  onDrop: (e: React.DragEvent<HTMLTableRowElement>) => void;
}

import styles from './daily-board-row.module.scss';

export default function DailyBoardRow({
  dailyBoardTask,
  onDrop,
}: DailyBoardRowProps) {
  const [isCompleted, setCompleted] = useState(dailyBoardTask.completed);
  const [isDraggedOver, setDraggedOver] = useState(false);

  const task = dailyBoardTask.task;

  const planTime = getFormattedTimeFromMinutes(dailyBoardTask.planTime);
  const factTime = getFormattedTimeFromMinutes(dailyBoardTask.factTime);

  const handleComplete = () => {
    setCompleted(!isCompleted);
  };

  const renderCheckbox = () => {
    const computedStyles = `${styles.checkbox} ${
      isCompleted ? styles.checked : ''
    }`;

    return (
      <div className={styles.container}>
        <div
          className={computedStyles}
          onClick={handleComplete}></div>
      </div>
    );
  };

  const handleDragStart = (e: React.DragEvent<HTMLTableRowElement>) => {
    e.dataTransfer.setData('taskID', task.id.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLTableRowElement>) => {
    setDraggedOver(false);
    onDrop(e);
  };

  const handleDragOver = (e: React.DragEvent<HTMLTableRowElement>) => {
    e.preventDefault();
    setDraggedOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLTableRowElement>) => {
    setDraggedOver(false);
    console.log(handleDragLeave);
  };

  return (
    <>
      <tr
        className={`${styles.row} ${isDraggedOver ? styles.draggedOver : ''}`}
        draggable={true}
        onDragOver={handleDragOver}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}>
        <td>
          <h5>{task.title}</h5>
        </td>
        <td>
          {dailyBoardTask.factTime !== 0 ? (
            <h5>{planTime}</h5>
          ) : (
            <h6>Set time</h6>
          )}
        </td>
        <td>
          {dailyBoardTask.planTime !== 0 ? (
            <h5>{factTime}</h5>
          ) : (
            <h6>Set time</h6>
          )}
        </td>
        <td>{renderCheckbox()}</td>
      </tr>
    </>
  );
}
