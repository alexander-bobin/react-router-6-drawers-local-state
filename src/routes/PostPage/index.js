import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import TextWithNewLines from "../../common/components/TextWithNewLines";
import useDisclosure from "../../common/utils/useDisclosure";
import CommentsDrawer from "../../common/components/CommentsDrawer";
import LinkButton from "../../common/components/LinkButton";

function PostPageContent ({ post }) {
  const { getDisclosureProps, getTriggerProps } = useDisclosure({ id: 'post-page-comments-drawer' })

  return (
    <>
      <CommentsDrawer {...getDisclosureProps()} postId={post.id} />
      <h2 className="text-2xl font-bold capitalize">{post.title}</h2>
      <p className="text-gray-500">{post.user.name}</p>
      <div className="mt-4">
        <p><TextWithNewLines text={post.body} /></p>
      </div>

      <p className="mt-6">
        <LinkButton {...getTriggerProps()}>
          View comments
        </LinkButton>
      </p>
    </>
  )
}

function PostPage () {
  const data = useLoaderData()
  return (
    <>
      <Suspense fallback={<h2 className="text-2xl font-bold capitalize text-slate-500">Loading...</h2>}>
        <Await resolve={data.post}>
          {post => <PostPageContent post={post} />}
        </Await>
      </Suspense>
    </>
  );
}

export default PostPage
