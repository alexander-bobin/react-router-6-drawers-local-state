import { useLoaderData, Outlet } from "react-router-dom";
import DrawerHeader from "../../common/components/DrawerHeader";
import LinkToDrawer from "../../common/components/LinkToDrawer";
import useNavigateFromDrawer from "../../common/utils/navigateFromDrawer";

function UserAlbumDrawer () {
  const album = useLoaderData()
  const navigate = useNavigateFromDrawer()
  return (
    <>
      <DrawerHeader category="Album" title={album.title} onClose={() => navigate('..')} />
      <div className="flex flex-wrap gap-3">
        {album?.photos?.map(photo => {
          return (
            <LinkToDrawer to={`./photo/${photo.id}`} key={photo.id} className="w-14 h-14 bg-slate-200">
              <img src={photo.thumbnailUrl} alt={photo.title} width="100" />
            </LinkToDrawer>
          )
        })}
      </div>
      <Outlet />
    </>
  );
}

export default UserAlbumDrawer;
