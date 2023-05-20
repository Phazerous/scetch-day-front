import { useState } from 'react';
import styles from './schedule.module.scss';
import SchedulerDay from './scheduler-day/SchedulerDay';

import { customAlphabet } from 'nanoid';

const dummy = [
  { id: 1, title: 'Task 1' },
  { id: 2, title: 'Task 2' },
  { id: 3, title: 'Task 3' },
  { id: 4, title: 'Task 4' },
  { id: 5, title: 'Task 5' },
  { id: 6, title: 'Task 6' },
  { id: 7, title: 'Task 7' },
];

export default function Schedule() {
  const [tasks, setTasks] = useState(dummy);

  const dates = [new Date(2022, 4, 20)];

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    droppedTaskID: number
  ) => {
    const taskID = +e.dataTransfer.getData('taskID');

    if (isNaN(taskID)) return;

    const digits = '0123456789';
    const generateNumericId = customAlphabet(digits, 10);

    const taskToInsert = {
      id: +generateNumericId(),
      title: 'Great job my friend',
    };

    let updatedTasks = [...tasks];
    const droppedTaskIdx = updatedTasks.findIndex(
      (task) => task.id === droppedTaskID
    );
    updatedTasks.splice(droppedTaskIdx, 0, taskToInsert);

    setTasks(updatedTasks);
  };

  return (
    <>
      <section className={styles.schedule}>
        {dates.map((date, idx) => (
          <SchedulerDay
            handleDrop={handleDrop}
            key={idx}
            date={date}
            tasks={tasks}
          />
        ))}
      </section>
    </>
  );
}
