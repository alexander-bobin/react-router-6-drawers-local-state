import useDisclosure from "../../common/utils/useDisclosure"
import AlbumDrawer from "./AlbumDrawer"
import LinkButton from "../../common/components/LinkButton"

// Note: Below we see a potential pattern where the drawer trigger and drawer are
// colocated to reduce noise in the parent component.
function AlbumDrawerLink ({ albumId, children }) {
  const { getDisclosureProps, getTriggerProps } = useDisclosure({
    id: 'user-album-drawer',
  })
  return (
    <>
      <LinkButton {...getTriggerProps()}>
        {children}
      </LinkButton>
      <AlbumDrawer albumId={albumId} {...getDisclosureProps()} />
    </>
  )
}

export default AlbumDrawerLink
