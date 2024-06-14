import { Suspense, useState } from "react";
import { useLoaderData, Await } from "react-router-dom";
import LinkToDrawer from "../../common/components/LinkToDrawer";
import PostDrawer from "../../common/components/PostDrawer";
import useDisclosure from "../../common/utils/useDisclosure";
import DrawerLink from "../../common/components/DrawerLink";

function UserPageContent ({ user }) {
  const [selectedPostId, setSelectedPostId] = useState(null)
  const { getTriggerProps: getPostTriggerProps, getDisclosureProps: getPostDisclosureProps } = useDisclosure({ id: 'user-post-drawer' })

  return (
    <>
      <PostDrawer {...getPostDisclosureProps({ postId: selectedPostId })} />


      <h2 className="text-2xl font-bold">{user.name}</h2>
      <div className="mt-2">
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Tasks</h3>
        <LinkToDrawer to="./tasks">
          View tasks
        </LinkToDrawer>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Posts</h3>
        <ul className="mt-2 list-disc">
          {user?.posts?.map(post => {
            return (
              <li key={post.id} className="ml-4">
                <DrawerLink {...getPostTriggerProps({ onClick: () => setSelectedPostId(post.id) })}>
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
              <LinkToDrawer to={`./album/${album.id}`}>
                {album.title}
              </LinkToDrawer>
            </li>
          ))}
        </ul>
      </div>
    </>
  )

}

function UserPage () {
  const data = useLoaderData()
  return (
    <>
      <Suspense fallback={<h2 className="text-2xl font-bold text-slate-500">Loading...</h2>}>
        <Await resolve={data.user}>
          {user => <UserPageContent user={user} />}
        </Await>
      </Suspense>
    </>
  );
}

export default UserPage
