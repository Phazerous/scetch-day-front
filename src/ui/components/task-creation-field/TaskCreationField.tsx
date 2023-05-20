import Image from 'next/image';
import { useState } from 'react';

import styles from './task-creation-field.module.scss';

interface TaskCreationFieldProps {
  onAdd: (title: string, type: 'task' | 'project') => void;
}

export default function TaskCreationField({ onAdd }: TaskCreationFieldProps) {
  const [title, setTitle] = useState('');
  const [isTask, setIsTask] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleClick = () => {
    if (title) {
      onAdd(title, isTask ? 'task' : 'project');
      setTitle('');
    }
  };

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.textContent;
    setIsTask(type === 'Task');
  };

  const taskClass = styles.option + ' ' + (isTask ? styles.selected : '');
  const projectClass = styles.option + ' ' + (!isTask ? styles.selected : '');

  return (
    <>
      <div className={styles.container}>
        <input
          className={styles.input}
          type='text'
          value={title}
          placeholder={`What's the task?`}
          onChange={handleChange}
        />

        <div
          className={styles.add}
          onClick={handleClick}>
          <Image
            src='/icons/plus.svg'
            width={10}
            height={10}
            alt='Plus Icon'
          />
        </div>
      </div>
      <div className={styles.toggle}>
        <button
          type='button'
          className={taskClass}
          onClick={handleSelect}>
          Task
        </button>
        <button
          type='button'
          className={projectClass}
          onClick={handleSelect}>
          Project
        </button>
      </div>
    </>
  );
}
