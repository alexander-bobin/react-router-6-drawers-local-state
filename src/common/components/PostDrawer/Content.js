import DrawerHeader from "../DrawerHeader"
import TextWithNewLines from "../TextWithNewLines"
import useDisclosure from "../../utils/useDisclosure"
import CommentsDrawer from "../CommentsDrawer"
import LinkButton from "../LinkButton"

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
        <LinkButton {...getTriggerProps()}>View comments</LinkButton>
      </p>
    </>
  )
}

export default PostDrawerContent
