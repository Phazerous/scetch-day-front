import { ReactNode } from 'react';
import styles from './task-field.module.scss';

interface TaskField {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isDraggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
}

export default function TaskField({
  children,
  onClick,
  className = '',
  isDraggable = false,
  onDragStart,
  onDragOver,
  onDrop,
}: TaskField) {
  const combinedClassName = styles.field + ' ' + className;

  return (
    <>
      <div
        className={combinedClassName}
        onClick={onClick}
        onDrop={onDrop}
        draggable={isDraggable}
        onDragStart={onDragStart}
        onDragOver={onDragOver}>
        {children}
      </div>
    </>
  );
}
