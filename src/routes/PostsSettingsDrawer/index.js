import DrawerHeader from "../../common/components/DrawerHeader";
import useNavigateFromDrawer from "../../common/utils/navigateFromDrawer";
import useGetUrlWithCurrentSearchParams from "../../common/utils/useGetUrlWithCurrentSearchParams";

function UserPostDrawer () {
  const navigate = useNavigateFromDrawer()
  const postListUrl = useGetUrlWithCurrentSearchParams('..', ['userId'])
  return (
    <>
      <DrawerHeader category="Posts" title="Settings" onClose={() => { navigate(postListUrl) }} />
      <p>Posts settings can be managed here.</p>
    </>
  );
}

export default UserPostDrawer;
