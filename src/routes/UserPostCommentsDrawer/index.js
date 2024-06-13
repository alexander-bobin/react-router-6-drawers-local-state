import { useLoaderData } from "react-router-dom";
import CommentsDrawerContents from "../../common/components/CommentsDrawerContents";
import useNavigateFromDrawer from "../../common/utils/navigateFromDrawer";

function UserPostCommentsDrawer () {
  const comments = useLoaderData()
  const navigate = useNavigateFromDrawer()
  // Note: Here we are using a shared drawer contents
  return <CommentsDrawerContents comments={comments} onClose={() => navigate('..')} />
}

export default UserPostCommentsDrawer;
