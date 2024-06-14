import Drawer from "../Drawer";
import CommentsDrawerContents from "./Content";
import CommentsQuery from "./Query";
import LoadingDrawerContent from "../LoadingDrawerContent";

function CommentsDrawer ({ postId, isOpen, onClose, id, size = "medium" }) {
  return (
    <Drawer {...{ isOpen, onClose, id, size }}>
      {isOpen && (
        <CommentsQuery postId={postId} loading={<LoadingDrawerContent />}>
          {comments => <CommentsDrawerContents comments={comments} onClose={onClose} />}
        </CommentsQuery>
      )}
    </Drawer>
  );
}

export default CommentsDrawer
