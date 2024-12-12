import { createBrowserRouter,  Navigate,  RouterProvider } from 'react-router-dom';
import { Login } from "../../pages/Login";
import { SignUp } from "../../pages/SignUp";
import { Home } from "../../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <SignUp />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '*',
        element: <Navigate to="/" /> ,
    },
]);

function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;