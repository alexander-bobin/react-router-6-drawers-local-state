import { Suspense, useState } from "react";
import { useLoaderData, Await } from "react-router-dom";
import LinkToDrawer from "../../common/components/LinkToDrawer";
import PostDrawer from "../../common/components/PostDrawer";
import useDisclosure from "../../common/utils/useDisclosure";
import LinkButton from "../../common/components/LinkButton";
import TasksDrawer from "./TasksDrawer";

function UserPageContent ({ user }) {
  // Note: A little awkward here on decision making. Should I create a self contained
  // PostLink which has this inside? Or should I just do it here?
  // Some devs may create the self contained component and then share it which would be
  // bad. But if it becomes a PostDrawerTrigger which takes children, maybe that is OK
  const [selectedPostId, setSelectedPostId] = useState(null)
  const { getTriggerProps: getPostTriggerProps, getDisclosureProps: getPostDisclosureProps } = useDisclosure({ id: 'user-post-drawer' })

  const { onOpen: onOpenTasksDrawer, getDisclosureProps: getTasksDisclosureProps } = useDisclosure({ id: 'user-tasks-drawer' })

  return (
    <>
      <PostDrawer {...getPostDisclosureProps({ postId: selectedPostId })} />
      <TasksDrawer {...getTasksDisclosureProps({ userId: user.id })} />

      <h2 className="text-2xl font-bold">{user.name}</h2>
      <div className="mt-2">
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Tasks</h3>
        <LinkButton onClick={onOpenTasksDrawer}>
          View tasks
        </LinkButton>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold">Posts</h3>
        <ul className="mt-2 list-disc">
          {user?.posts?.map(post => {
            return (
              <li key={post.id} className="ml-4">
                <LinkButton {...getPostTriggerProps({ onClick: () => setSelectedPostId(post.id) })}>
                  {post.title}
                </LinkButton>
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
