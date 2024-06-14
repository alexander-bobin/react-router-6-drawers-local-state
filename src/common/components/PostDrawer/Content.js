import DrawerHeader from "../DrawerHeader"
import TextWithNewLines from "../TextWithNewLines"
import useDisclosure from "../../utils/useDisclosure"
import CommentsDrawer from "../CommentsDrawer"
import DrawerLink from "../LinkToDrawer"

function PostDrawerContent ({ onClose, post, drawerId }) {
  const { getTriggerProps, getDisclosureProps } = useDisclosure({ id: `${drawerId}-comments-drawer` })

  return (
    <>
      <CommentsDrawer {...getDisclosureProps({ postId: post.id, size: 'small' })} />
      <DrawerHeader category="Post" title={post.title} onClose={onClose} />
      <p><TextWithNewLines text={post.body} /></p>
      <p className="mt-4">
        <DrawerLink {...getTriggerProps()}>View comments</DrawerLink>
      </p>
    </>
  )
}

export default PostDrawerContent
