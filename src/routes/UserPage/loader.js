import { defer } from "react-router-dom"

async function userPageLoader ({ params }) {
  const userPromise = Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`).then(res => res.json()),
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`).then(res => res.json()),
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${params.userId}`).then(res => res.json())
  ]).then(([user, posts, albums]) => {
    return {
      ...user,
      posts,
      albums
    }
  })

  return defer({
    user: userPromise
  })
}

export default userPageLoader;
