import Image from 'next/image';
import styles from './project.module.scss';
import TaskField from '../task-field/TaskField';
import { useState } from 'react';
import Task from '../task/Task';

interface ProjectProps {
  project: Project;
}

export default function Project({ project }: ProjectProps) {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => setExpanded(!isExpanded);

  return (
    <>
      <TaskField
        className={styles.borderColor}
        onClick={handleExpand}>
        <h6>{project.title}</h6>
        <Image
          src='/icons/up.svg'
          alt='Down Icon'
          width={12}
          height={7}
          className={isExpanded ? styles.arrowRotate : ''}
        />
      </TaskField>

      {isExpanded &&
        project.tasks.map((task) => (
          <Task
            isAlignedLeft={true}
            key={task.id}
            task={task}
          />
        ))}
    </>
  );
}
