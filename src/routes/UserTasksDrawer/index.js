import { Outlet } from "react-router-dom";
import DrawerHeader from "../../common/components/DrawerHeader";
import DrawerLink from "../../common/components/LinkToDrawer";
import useNavigateFromDrawer from "../../common/utils/navigateFromDrawer";

function UserTasksDrawer () {
  const navigate = useNavigateFromDrawer()
  return (
    <>
      <DrawerHeader title="Tasks" onClose={() => { navigate('..') }} />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <DrawerLink to="./">
              Open
            </DrawerLink>
          </li>
          <li>
            <DrawerLink to="./completed">
              Completed
            </DrawerLink>
          </li>
        </ul>
      </nav>
      <div className="mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default UserTasksDrawer;
