
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Typography } from "@mui/material";
import { Home } from "../../page/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '*',
        element: <Typography variant="h1">NOT FOUND (404)</Typography>
    },
]);

function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;