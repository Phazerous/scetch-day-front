import Schedule from '../ui/components/schedule/Schedule';
import Task from '../ui/components/task/Task';

const task = {
  id: 24,
  title: 'Clean up',
};

export default function test() {
  return (
    <>
      <Task task={task} />

      <Schedule />
    </>
  );
}
