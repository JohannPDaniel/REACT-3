import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import { Login } from '../../pages/Login';
import { Home } from "../../pages/Home";
import { DefaultLayout } from './../layout/DefaultLayout';
import { Detail } from "../../pages/Detail";

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
		path: '/detail',
		element: <DefaultLayout children={<Detail />}  />,
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
