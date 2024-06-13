function TaskItem ({ task }) {
  return (
    <p>{task.completed ? '⬜️' : '✅'} {task.title}</p>
  )
}

export default TaskItem;
