import { ReactNode } from 'react';
import styles from './task-field.module.scss';

interface TaskField {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function TaskField({
  children,
  onClick,
  className = '',
}: TaskField) {
  const combinedClassName = styles.field + ' ' + className;

  return (
    <>
      <div
        className={combinedClassName}
        onClick={onClick}>
        {children}
      </div>
    </>
  );
}
