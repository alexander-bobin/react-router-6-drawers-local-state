import { defer } from "react-router-dom"

async function postsPageLoader ({ request }) {
  const filterByUserId = new URL(request.url).searchParams.get('userId');
  const postsPromise = fetch(`https://jsonplaceholder.typicode.com/posts${filterByUserId ? `?userId=${filterByUserId}`: ''}`).then(res => res.json())
  const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
  return defer({
    posts: postsPromise,
    users: usersPromise,
  })
}

export default postsPageLoader;
