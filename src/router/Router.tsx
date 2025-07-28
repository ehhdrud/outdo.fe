import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DefaultLayout from '@/components/Layout/Layout';
import Dashboard from '@/pages/Dashboard/Dashboard';

const router = createBrowserRouter([
	{
		element: <DefaultLayout />,
		children: [{ path: '/', element: <Dashboard /> }],
	},
]);

const Router = () => (
	<RouterProvider
		router={router}
		future={{
			v7_startTransition: true,
		}}
	/>
);

export default Router;
