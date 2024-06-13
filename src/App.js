import { RouterProvider, createHashRouter } from "react-router-dom";
import routes from "./routes";

// Create the router outside the render cycle because inside the dev cycle would
// fire loaders multiple times in dev because of strict mode
const router = createHashRouter(routes)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
