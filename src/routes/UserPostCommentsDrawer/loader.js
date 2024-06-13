async function userPostCommentsDrawerLoader({ params }) {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`)
}

export default userPostCommentsDrawerLoader
