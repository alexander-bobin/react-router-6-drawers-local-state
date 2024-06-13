import { Suspense } from "react";
import { useLoaderData, Outlet, Await } from "react-router-dom";
import DrawerLink from "../../common/components/LinkToDrawer";

function UserPage () {
  const data = useLoaderData()
  return (
    <>
      <Suspense fallback={<h2 className="text-2xl font-bold text-slate-500">Loading...</h2>}>
        <Await resolve={data.user}>
          {user => (
            <>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <div className="mt-2">
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold">Tasks</h3>
                <DrawerLink to="./tasks">
                  View tasks
                </DrawerLink>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold">Posts</h3>
                <ul className="mt-2 list-disc">
                  {user?.posts?.map(post => {
                    return (
                      <li key={post.id} className="ml-4">
                        <DrawerLink to={`./post/${post.id}`}>
                          {post.title}
                        </DrawerLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold">Albums</h3>
                <ul className="mt-2 list-disc">
                  {user?.albums?.map(album => (
                    <li key={album.id} className="ml-4">
                      <DrawerLink to={`./album/${album.id}`}>
                        {album.title}
                      </DrawerLink>
                    </li>
                  ))}
                </ul>
              </div>

              {/* For drawers */}
              <Outlet />
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
}

export default UserPage
