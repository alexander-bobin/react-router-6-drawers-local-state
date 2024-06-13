import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DrawerNavigationContext } from "../components/DrawerNavigationContext";

function useNavigateFromDrawer() {
  const navigate = useNavigate()
  const { drawerNavigationMode } = useContext(DrawerNavigationContext)
  return useCallback((path) => {
    if (drawerNavigationMode === 'replace') {
      navigate(path, { replace: true })
      return
    } else if (drawerNavigationMode === 'forward-only') {
      navigate(path)
      return
    } else if (drawerNavigationMode === 'forward-back') {
      navigate(-1)
      return
    }
  }, [navigate, drawerNavigationMode])
}

export default useNavigateFromDrawer
