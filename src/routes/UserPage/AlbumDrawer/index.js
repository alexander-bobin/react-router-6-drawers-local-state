import Drawer from "../../../common/components/Drawer";
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import UserAlbumDrawerContent from "./Content";
import UserAlbumDrawerQuery from "./Query";

function UserAlbumDrawer ({ albumId, isOpen, onClose, id }) {
  return (
    <Drawer {...{ isOpen, onClose, id }}>
      {isOpen && (
        <UserAlbumDrawerQuery albumId={albumId} loading={<LoadingDrawerContent onClose={onClose} />}>
          {album => (
            <UserAlbumDrawerContent
              album={album}
              onClose={onClose}
            />
          )}
        </UserAlbumDrawerQuery>
      )}
    </Drawer>
  );
}

export default UserAlbumDrawer
