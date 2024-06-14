import Drawer from "../Drawer";
import LoadingDrawerContent from "../LoadingDrawerContent.js";
import PostDrawerContents from "./Content";
import PostQuery from "./Query";

function PostDrawer ({ postId, isOpen, onClose, id }) {
  return (
    <Drawer {...{ isOpen, onClose, id, }}>
      {isOpen && (
        <PostQuery postId={postId} loading={<LoadingDrawerContent />}>
          {post => <PostDrawerContents post={post} onClose={onClose} drawerId={id} />}
        </PostQuery>
      )}
    </Drawer>
  );
}

export default PostDrawer
