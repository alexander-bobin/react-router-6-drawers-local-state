import { Suspense, useCallback, useState } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import LinkButton from "../../common/components/LinkButton";
import PostDrawer from "../../common/components/PostDrawer";
import useDisclosure from "../../common/utils/useDisclosure";
import PostsSettingsDrawer from "./SettingsDrawer";
import UsersFilter from "./UsersFilter";

function PostList ({ posts }) {
  const [selectedPostId, setSelectedPostId] = useState(null)
  const onPostClick = useCallback((postId) => () => setSelectedPostId(postId), [setSelectedPostId])
  const onPostDrawerClose = useCallback(() => setSelectedPostId(null), [setSelectedPostId])
  const { getDisclosureProps } = useDisclosure({
    id: 'post-page-post-drawer',
    isOpen: selectedPostId !== null,
    onClose: onPostDrawerClose,
  })

  return (
    <>
      <PostDrawer {...getDisclosureProps({ postId: selectedPostId })} />
      <div>
        <UsersFilter />
      </div>
      <ul className="mt-4">
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`./${post.id}`} className="text-blue-500 hover:underline">
              {post.title}
            </Link>{' '}
            (<LinkButton onClick={onPostClick(post.id)}>
              quick view
            </LinkButton>)
          </li>
        ))}
      </ul>
    </>
  )
}

function PostsPage () {
  const data = useLoaderData()
  const { getDisclosureProps, getTriggerProps } = useDisclosure({ id: 'posts-settings-drawer' })

  return (
    <>
      <PostsSettingsDrawer {...getDisclosureProps()}/>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Posts</h2>
        <p><LinkButton {...getTriggerProps()}>Settings ⚙️</LinkButton></p>
      </div>
      <div className="mt-4">
        <Suspense fallback={<p className="text-slate-500">...</p>}>
          <Await resolve={data.posts}>
            {posts => <PostList posts={posts} />}
          </Await>
        </Suspense>
      </div>
    </>
  );
}

export default PostsPage
