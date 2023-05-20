import TaskField from '../task-field/TaskField';

import styles from './task.module.scss';

interface TaskProps {
  task: Task;
  isAlignedLeft?: boolean;
}

export default function Task({ task, isAlignedLeft = false }: TaskProps) {
  const combinedStyles =
    styles.borderColor + ' ' + (isAlignedLeft ? styles.alignedLeft : '');

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    taskID: number
  ) => {
    e.dataTransfer.setData('taskID', taskID.toString());
  };

  return (
    <>
      <TaskField
        className={combinedStyles}
        isDraggable={true}
        onDragStart={(e) => handleDragStart(e, task.id)}>
        <h6>{task.title}</h6>
      </TaskField>
    </>
  );
}
