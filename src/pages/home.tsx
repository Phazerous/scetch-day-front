import { useState } from 'react';
import Catalogue from '../ui/components/catalogue/Catalogue';
import TaskCreationField from '../ui/components/task-creation-field/TaskCreationField';

import dummy from '../utils/sample-creator';

export default function Home() {
  const [catalogue, setCatalogue] = useState(dummy);

  const handleAdd = (title: string, type: 'task' | 'project') => {
    let updatedCatalogue = {
      projects: catalogue.projects.map((project: Project) => ({
        ...project,
        tasks: [...project.tasks],
      })),
      tasks: [...catalogue.tasks],
    };

    if (type === 'task') {
      updatedCatalogue.tasks.push({
        id: 2345,
        title,
      });
    } else if (type === 'project') {
      updatedCatalogue.projects.push({
        tasks: [] as Task[],
        id: 2456,
        title,
      });
    }

    setCatalogue(updatedCatalogue);
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    projectID: number
  ) => {
    const tasks = [
      ...catalogue.tasks,
      ...catalogue.projects.flatMap((project) => project.tasks),
    ];

    const taskID = +e.dataTransfer.getData('taskID');

    const currentTask = tasks.find((task) => task.id === taskID) as Task;

    if (isNaN(taskID)) return;

    let updatedCatalogue = {
      projects: catalogue.projects.map((project) => ({
        ...project,
        tasks: project.tasks.filter((task) => task.id !== taskID),
      })),
      tasks: catalogue.tasks.filter((task) => task.id !== taskID),
    };

    updatedCatalogue.projects
      .find((project) => project.id === projectID)
      ?.tasks.push(currentTask);

    setCatalogue(updatedCatalogue);
  };

  return (
    <>
      <div style={{ marginLeft: '100px', marginTop: '100px', width: '301px' }}>
        <TaskCreationField onAdd={handleAdd} />
        <Catalogue
          catalogue={catalogue}
          onDrop={handleDrop}
        />
      </div>
    </>
  );
}
