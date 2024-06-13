function userTasksOpenDrawerTabLoader({ params }) {
  return fetch(`https://jsonplaceholder.typicode.com/todos?completed=true&userId=${params.userId}`)
}

export default userTasksOpenDrawerTabLoader
