import { Outlet, useLoaderData } from "react-router-dom";
import DrawerHeader from "../../common/components/DrawerHeader";
import TextWithNewLines from "../../common/components/TextWithNewLines";
import DrawerLink from "../../common/components/LinkToDrawer";
import useNavigateFromDrawer from "../../common/utils/navigateFromDrawer";

function UserPostDrawer () {
  const post = useLoaderData()
  const navigate = useNavigateFromDrawer()
  return (
    <>
      <DrawerHeader category="Post" title={post.title} onClose={() => { navigate('..') }} />
      <p><TextWithNewLines text={post.body} /></p>
      <p className="mt-4">
        <DrawerLink to="./comments">
          View comments
        </DrawerLink>
      </p>
      <Outlet />
    </>
  );
}

export default UserPostDrawer;
