import DailyBoardRow from './daily-board-row/DailyBoardRow';
import { DailyBoardTask } from './daily-board-row/DailyBoardTask.interface';
import TableBoardHeader from './table-board-header/TableBoardHeader';

const dummy: DailyBoardTask[] = [
  {
    task: {
      id: 28,
      title: 'Task 1',
    },
    planTime: 240,
    factTime: 300,
    completed: true,
  },
  {
    task: {
      id: 27,
      title: 'Task 2',
    },
    planTime: 240,
    factTime: 300,
    completed: true,
  },
  {
    task: {
      id: 29,
      title: 'Task 3',
    },
    planTime: 240,
    factTime: 0,
    completed: true,
  },
];

import styles from './daily-board.module.scss';
import { useState } from 'react';

export default function DailyBoard() {
  const [dailyTasks, setDailyTasks] = useState<DailyBoardTask[]>(dummy);

  const handleDrop = (
    e: React.DragEvent<HTMLTableRowElement>,
    currentIdx: number
  ) => {
    const taskId = +e.dataTransfer.getData('taskID');

    if (!taskId) return;

    let updatedTasks: DailyBoardTask[] = dailyTasks
      .map((dailyTask: DailyBoardTask) => ({
        ...dailyTask,
        task: { ...dailyTask.task },
      }))
      .filter((dailyTask) => dailyTask.task.id !== taskId);

    const currentTask = dailyTasks.find(
      (dailyTask) => dailyTask.task.id === taskId
    ) as DailyBoardTask;

    updatedTasks.splice(currentIdx, 0, currentTask);

    setDailyTasks(updatedTasks);
  };

  return (
    <>
      <table className={styles.board}>
        <TableBoardHeader />
        <tbody>
          {dailyTasks.map((dailyTask, idx) => {
            return (
              <>
                <DailyBoardRow
                  key={dailyTask.task.id}
                  dailyBoardTask={dailyTask}
                  onDrop={(e: React.DragEvent<HTMLTableRowElement>) =>
                    handleDrop(e, idx)
                  }
                />
                <tr className={styles.separatingRow}>
                  <td></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
