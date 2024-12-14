import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import { Login } from '../../pages/Login';
import { Home } from "../../pages/Home";
import { DefaultLayout } from './../layout/DefaultLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/home',
		element: <DefaultLayout children={<Home />}  />,
	},
	{
		path: '*',
		element: <Navigate to='/' />,
	},
]);

function AppRoutes() {
	return <RouterProvider router={router} />;
}

export default AppRoutes;
