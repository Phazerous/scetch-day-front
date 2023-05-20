import Task from '../task/Task';
import Project from '../project/Project';
import styles from './catalogue.module.scss';
import scrollable from '../../../styles/scrollable.module.scss';

interface CatalogueProps {
  catalogue: Catalogue;
}

export default function Catalogue({ catalogue }: CatalogueProps) {
  const combinedStyles = styles.table + ' ' + scrollable.scrollable;

  return (
    <>
      <div className={combinedStyles}>
        {catalogue.projects.map((project) => (
          <Project
            key={project.id}
            project={project}
          />
        ))}
        {catalogue.tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </>
  );
}
