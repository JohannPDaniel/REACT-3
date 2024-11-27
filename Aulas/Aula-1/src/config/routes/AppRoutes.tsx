import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from "../../page/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '*',
        element: <h1>NOT FOUND (404)</h1>,
    },
]);

function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;