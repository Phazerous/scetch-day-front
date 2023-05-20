import TaskField from '../task-field/TaskField';

import styles from './task.module.scss';

interface TaskProps {
  task: Task;
  isAlignedLeft?: boolean;
}

export default function Task({ task, isAlignedLeft = false }: TaskProps) {
  const combinedStyles =
    styles.borderColor + ' ' + (isAlignedLeft ? styles.alignedLeft : '');

  return (
    <>
      <TaskField className={combinedStyles}>
        <h6>{task.title}</h6>
      </TaskField>
    </>
  );
}
