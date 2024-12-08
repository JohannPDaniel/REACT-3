import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import { Login } from '../../pages/Login';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
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
