import Drawer from "../../../common/components/Drawer";
import LoadingDrawerContent from "../../../common/components/LoadingDrawerContent";
import UserTasksDrawerContent from "./Content";
import UserTasksDrawerQuery from "./Query";

function UserTaskDrawer ({ userId, isOpen, onClose, id }) {
  return (
    <Drawer {...{ isOpen, onClose, id }}>
      {isOpen && (
        <UserTasksDrawerQuery userId={userId} loading={<LoadingDrawerContent onClose={onClose} />}>
          {tasks => (
            <UserTasksDrawerContent
              tasks={tasks}
              userId={userId}
              onClose={onClose}
            />
          )}
        </UserTasksDrawerQuery>
      )}
    </Drawer>
  );
}

export default UserTaskDrawer
