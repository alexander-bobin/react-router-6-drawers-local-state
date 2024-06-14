import DrawerHeader from "../../../../common/components/DrawerHeader"


function UserAlbumPhotoDrawerContents ({ onClose, photo }) {
  return (
    <>
      <DrawerHeader category="Photo" title={photo.title} onClose={onClose} />
      <img src={photo.url} alt={photo.title} />
    </>
  )
}

export default UserAlbumPhotoDrawerContents
