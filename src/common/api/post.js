export async function getPostById (postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  return response.json()
}

export async function getCommentsByPostId (postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  return response.json()
}
