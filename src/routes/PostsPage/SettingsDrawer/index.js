import DrawerHeader from "../../../common/components/DrawerHeader";
import Drawer from "../../../common/components/Drawer";

function PostsSettingsDrawer ({ isOpen, onClose, id }) {
  return (
    <Drawer {...{ isOpen, onClose, id }}>
      <DrawerHeader category="Posts" title="Settings" onClose={onClose} />
      <p>Posts settings can be managed here.</p>
    </Drawer>
  );
}

export default PostsSettingsDrawer;
