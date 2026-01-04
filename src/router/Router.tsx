import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from '@/components/Layout/AuthLayout';
import DefaultLayout from '@/components/Layout/Layout';
import NoHeaderLayout from '@/components/Layout/NoHeaderLayout';
import Callback from '@/pages/Auth/Callback/Callback';
import FindPassword from '@/pages/Auth/FindPassword/FindPassword';
import Signin from '@/pages/Auth/Signin/Signin';
import Signup from '@/pages/Auth/Signup/Signup';
import ChangePassword from '@/pages/ChangePassword/ChangePassword';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Profile from '@/pages/Profile/Profile';
import RoutineDetail from '@/pages/Routines/RoutineDetail/RoutineDetail';
import Routines from '@/pages/Routines/Routines';

const router = createBrowserRouter([
	{
		element: <DefaultLayout />,
		children: [
			{ path: '/', element: <Dashboard /> },
			{ path: '/routines', element: <Routines /> },
			{ path: '/profile', element: <Profile /> },
			{ path: '/profile/change-password', element: <ChangePassword /> },
		],
	},
	{
		element: <NoHeaderLayout />,
		children: [{ path: '/routines/:id', element: <RoutineDetail /> }],
	},
	{
		element: <AuthLayout />,
		children: [
			{ path: '/auth', element: <Signin /> },
			{ path: '/auth/sign-up', element: <Signup /> },
			{ path: '/auth/find-pw', element: <FindPassword /> },
			{ path: '/auth/callback', element: <Callback /> },
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
