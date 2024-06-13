import { Suspense, useCallback } from 'react'
import { Await, useLoaderData, useNavigate, useLocation } from 'react-router-dom'

function UsersFilter () {
  const data = useLoaderData()
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const selectedUserId = searchParams.get('userId')
  const onChangeUser = useCallback(event => {
    const userId = event.target.value
    if (userId) {
      navigate(`.?userId=${userId}`, { replace: true })
    } else {
      navigate('.?', { replace: true })
    }
  }, [navigate])
  return (
    <div className="p-3 border-slate-200 border-2 rounded-md inline-block">
      <label htmlFor="filter-by-user" className="font-medium mr-2">
        Filter by user:
      </label>
      <Suspense fallback={<p className="text-slate-500">...</p>}>
        <Await resolve={data.users}>
          {users => (
            <select id="filter-by-user" onChange={onChangeUser} defaultValue={selectedUserId}>
              <option value="">All users</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          )}
        </Await>
      </Suspense>
    </div>
  )
}

export default UsersFilter
