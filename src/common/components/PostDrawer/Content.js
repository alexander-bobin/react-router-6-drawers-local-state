import DrawerHeader from "../DrawerHeader"
import TextWithNewLines from "../TextWithNewLines"
import useDisclosure from "../../utils/useDisclosure"
import CommentsDrawer from "../CommentsDrawer"
import DrawerLink from "../LinkToDrawer"

function PostDrawerContent ({ onClose, post, drawerId }) {
  // Note: Awkwardness here. We need a canonical id for the drawer for analytics purposes
  // But this is a shared drawer launching a shared drawer. So we need to pass the id down

  // Note: Should the drawer be in here or should the drawer be on the page?
  // Sees like the rule should be:  Put the drawer in the component that launches it
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
