import { Link } from "react-router-dom";

function LinkToDrawer ({ className, ...props }) {
  return <Link {...props} replace={true} className={`text-blue-500 hover:underline ${className}`} />
}

export default LinkToDrawer
