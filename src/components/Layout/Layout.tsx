import { Outlet } from 'react-router-dom';

import Header from '@/components/Header/Header';

import * as S from './style';
import Toast from '../common/Toast/Toast';

const Layout = () => (
	<>
		<Toast />
		<Header />
		<S.MainLayout>
			<Outlet />
		</S.MainLayout>
	</>
);

export default Layout;
