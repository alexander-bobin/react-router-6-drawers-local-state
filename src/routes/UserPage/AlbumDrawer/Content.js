import { useCallback, useState } from "react";
import DrawerHeader from "../../../common/components/DrawerHeader";
import useDisclosure from "../../../common/utils/useDisclosure";
import PhotoDrawer from "./PhotoDrawer";

function UserAlbumDrawerContent({ album, onClose, drawerId }) {
  // Note: Familiar pattern here. Selecting an item from a list and showing a drawer
  const [selectedPhotoId, setSelectedPhotoId] = useState(null)
  const onPhotoClick = useCallback((photoId) => () => { setSelectedPhotoId(photoId)}, [setSelectedPhotoId])
  const onPhotoDrawerClose = useCallback(() => setSelectedPhotoId(null), [setSelectedPhotoId])
  const { getDisclosureProps } = useDisclosure({
    id: `${drawerId}-comments-drawer`,
    isOpen: selectedPhotoId !== null,
    onClose: onPhotoDrawerClose,
  })


  return (
    <>
      <PhotoDrawer {...getDisclosureProps({ photoId: selectedPhotoId, size: 'large' })} />

      <DrawerHeader category="Album" title={album.title} onClose={onClose} />
      <div className="flex flex-wrap gap-3">
        {album?.photos?.map(photo => {
          return (
            <div key={photo.id} className="w-14 h-14 bg-slate-200">
              <button onClick={onPhotoClick(photo.id)}>
                <img src={photo.thumbnailUrl} alt={photo.title} width="100" />
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default UserAlbumDrawerContent;
