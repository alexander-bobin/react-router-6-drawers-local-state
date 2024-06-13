async function userPostDrawerLoader({ params }) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
}

export default userPostDrawerLoader
