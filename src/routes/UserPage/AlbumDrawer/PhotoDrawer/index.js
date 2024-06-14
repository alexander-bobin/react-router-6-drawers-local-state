import Drawer from "../../../../common/components/Drawer";
import LoadingDrawerContent from "../../../../common/components/LoadingDrawerContent";
import UserAlbumPhotoDrawerContents from "./Content";
import PhotoQuery from "./Query";

function UserAlbumPhotoDrawer ({ photoId, isOpen, onClose, id, size }) {
  return (
    <Drawer {...{ isOpen, onClose, id, size }}>
      {isOpen && (
        <PhotoQuery photoId={photoId} loading={<LoadingDrawerContent onClose={onClose} />}>
          {photo => <UserAlbumPhotoDrawerContents photo={photo} onClose={onClose} />}
        </PhotoQuery>
      )}
    </Drawer>
  );
}

export default UserAlbumPhotoDrawer
