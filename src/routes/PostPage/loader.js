import { defer } from "react-router-dom"

async function postPageLoader ({ params }) {
  const postPromise = fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    .then(res => res.json())
    .then(post => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(res => res.json())
        .then(user => {
          return {
            ...post,
            user,
          }
        })
    })

  return defer({
    post: postPromise
  })
}

export default postPageLoader;
