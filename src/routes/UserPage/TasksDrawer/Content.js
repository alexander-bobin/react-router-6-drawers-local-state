import { useState } from "react"
import DrawerHeader from "../../../common/components/DrawerHeader"
import LinkButton from "../../../common/components/LinkButton";

function TaskList ({ tasks, isCompletedVisible }) {
  const filteredTasks = tasks.filter(task => task.completed === isCompletedVisible)
  return (
    <>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className="mb-2">
            <p>{task.completed ? '✅' : '⬜️'} {task.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

function UserTasksDrawerContent ({ onClose, tasks }) {
  const [isCompletedVisible, setIsCompletedVisible] = useState(false)
  return (
   <>
      <DrawerHeader title="Tasks" onClose={onClose} />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <LinkButton onClick={() => { setIsCompletedVisible(false) }} className={isCompletedVisible ? '' : 'font-bold' }>
              Open
            </LinkButton>
          </li>
          <li>
            <LinkButton onClick={() => { setIsCompletedVisible(true) }} className={isCompletedVisible ? 'font-bold' : '' }>
              Completed
            </LinkButton>
          </li>
        </ul>
      </nav>
      <div className="mt-4">
        <TaskList tasks={tasks} isCompletedVisible={isCompletedVisible} />
      </div>
    </>
  )
}

export default UserTasksDrawerContent
