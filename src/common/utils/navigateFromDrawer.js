import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function useNavigateFromDrawer() {
  const navigate = useNavigate()
  return useCallback((path) => {
    navigate(path, { replace: true })
  }, [navigate])
}

export default useNavigateFromDrawer
