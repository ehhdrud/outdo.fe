import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DefaultLayout from '@/components/Layout/Layout';
import FindPassword from '@/pages/Auth/FindPassword/FindPassword';
import Login from '@/pages/Auth/Login/Login';
import Signup from '@/pages/Auth/Signup/Signup';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Profile from '@/pages/Profile/Profile';
import RoutineDetail from '@/pages/Routines/RoutineDetail';
import Routines from '@/pages/Routines/Routines';

const router = createBrowserRouter([
	{
		element: <DefaultLayout />,
		children: [
			{ path: '/', element: <Dashboard /> },
			{ path: '/routines', element: <Routines /> },
			{ path: '/routines/:id', element: <RoutineDetail /> },
			{ path: '/profile', element: <Profile /> },
			{ path: '/auth/login', element: <Login /> },
			{ path: '/auth/signup', element: <Signup /> },
			{ path: '/auth/findpw', element: <FindPassword /> },
		],
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
