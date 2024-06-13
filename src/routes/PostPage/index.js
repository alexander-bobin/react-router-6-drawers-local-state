import { Suspense } from "react";
import { useLoaderData, Outlet, Await } from "react-router-dom";
import TextWithNewLines from "../../common/components/TextWithNewLines";
import DrawerLink from "../../common/components/LinkToDrawer";

function PostPage () {
  const data = useLoaderData()
  return (
    <>
      <Suspense fallback={<h2 className="text-2xl font-bold capitalize text-slate-500">Loading...</h2>}>
        <Await resolve={data.post}>
          {post => (
            <>
              <h2 className="text-2xl font-bold capitalize">{post.title}</h2>
              <p className="text-gray-500">{post.user.name}</p>
              <div className="mt-4">
                <p><TextWithNewLines text={post.body} /></p>
              </div>

              <p className="mt-6">
                <DrawerLink to="./comments">
                  View comments
                </DrawerLink>
              </p>

              {/* For drawers */}
              <Outlet />
            </>
          )}
        </Await>
      </Suspense>
    </>
  );
}

export default PostPage
