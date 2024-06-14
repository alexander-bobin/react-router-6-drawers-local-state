export async function getTasksByUserId (userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
  return response.json()
}
