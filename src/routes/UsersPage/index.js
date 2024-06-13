import { Link, useLoaderData } from "react-router-dom";

function UserList ({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link to={`./${user.id}`} className="text-blue-500 hover:underline">
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function UsersPage () {
  const users = useLoaderData()
  return (
    <>
      <h2 className="text-2xl font-bold">Users</h2>
      <div className="mt-4">
        <UserList {...{ users }} />
      </div>
    </>
  );
}

export default UsersPage
