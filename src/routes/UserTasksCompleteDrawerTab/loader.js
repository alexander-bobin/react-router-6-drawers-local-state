function userTasksCompleteDrawerTabLoader({ params }) {
  return fetch(`https://jsonplaceholder.typicode.com/todos?completed=false&userId=${params.userId}`)
}

export default userTasksCompleteDrawerTabLoader
