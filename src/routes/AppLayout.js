import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link } from "react-router-dom";

// Create a client
const queryClient = new QueryClient();

function AppLayout () {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="m-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Local State Drawers application
            </h1>
            <nav className="mt-2">
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="text-blue-500 hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/users" className="text-blue-500 hover:underline">
                    Users
                  </Link>
                </li>
                <li>
                  <Link to="/posts" className="text-blue-500 hover:underline">
                    Posts
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-12">
          <Outlet />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default AppLayout
