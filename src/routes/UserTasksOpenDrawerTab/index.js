import { useLoaderData } from "react-router-dom";
import TaskItem from "../../common/components/TaskItem";

function UserTasksOpenDrawerTab () {
  const tasks = useLoaderData()
  return (
    <>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="mb-2">
            <TaskItem task={task} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserTasksOpenDrawerTab;
