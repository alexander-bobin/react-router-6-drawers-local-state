import { Suspense } from "react";
import { Await, Link, useLoaderData, Outlet } from "react-router-dom";
import UsersFilter from "./UsersFilter";
import LinkButton from "../../common/components/LinkButton";
import PostsSettingsDrawer from "./SettingsDrawer";
import useDisclosure from "../../common/utils/useDisclosure";

function PostList ({ posts }) {
  return (
    <>
      <div>
        <UsersFilter />
      </div>
      <ul className="mt-4">
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`./${post.id}`} className="text-blue-500 hover:underline">
              {post.title}
            </Link>
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
      <Outlet />
    </>
  );
}

export default PostsPage
