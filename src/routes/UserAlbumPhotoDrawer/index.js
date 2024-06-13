import { useLoaderData } from "react-router-dom";
import DrawerHeader from "../../common/components/DrawerHeader";
import useNavigateFromDrawer from "../../common/utils/navigateFromDrawer";

function UserAlbumPhotoDrawer () {
  const photo = useLoaderData()
  const navigate = useNavigateFromDrawer()
  return (
    <>
      <DrawerHeader category="Photo" title={photo.title} onClose={() => navigate('..')} />
      <img src={photo.url} alt={photo.title} />
    </>
  )
}

export default UserAlbumPhotoDrawer
