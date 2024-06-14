import { Suspense, useCallback, useState } from "react";
import { Await, useLoaderData } from "react-router-dom";
import LinkButton from "../../common/components/LinkButton";
import PostDrawer from "../../common/components/PostDrawer";
import useDisclosure from "../../common/utils/useDisclosure";
import TasksDrawer from "./TasksDrawer";
import AlbumDrawerLink from "./AlbumDrawerLink";

function UserPageContent ({ user }) {
  // Note: With the post drawer we should what it would be like to have the drawer at the page level
  // That is, just one drawer on the page.
  // With the album drawer we have it at the link level. That is, many drawers on the page.
  // Maybe the below code could be balled up into a `useSelectedItemDrawer`?
  const [selectedPostId, setSelectedPostId] = useState(null)
  const onPostClick = useCallback((postId) => () => setSelectedPostId(postId), [setSelectedPostId])
  const onPostDrawerClose = useCallback(() => setSelectedPostId(null), [setSelectedPostId])
  const { getDisclosureProps: getPostDisclosureProps } = useDisclosure({
    id: 'user-post-drawer',
    isOpen: selectedPostId !== null,
    onClose: onPostDrawerClose,
  })

  // Note: Notice how when we are selecting an item we use useDisclosure as controlled but
  // when no item is required we can go uncontrolled
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
                <LinkButton onClick={onPostClick(post.id)}>
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
              <AlbumDrawerLink albumId={album.id}>
                {album.title}
              </AlbumDrawerLink>
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
