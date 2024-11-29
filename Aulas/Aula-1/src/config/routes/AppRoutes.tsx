import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../../page/Home';
import { Blog } from './../../page/Blog';
import { DefaultLayout } from './../layout/DefaultLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout children={<Home />} />,
	},
	{
		path: '/blog',
		element: <DefaultLayout children={<Blog />} />,
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
