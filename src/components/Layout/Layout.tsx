import { Outlet } from 'react-router-dom';

import BottomNavigation from '@/components/BottomNavigation/BottomNavigation';
import Header from '@/components/Header/Header';

import * as S from './style';
import Toast from '../common/Toast/Toast';

const Layout = () => (
	<>
		<Toast />
		<S.LayoutWrapper>
			<Header />
			<S.MainLayout>
				<Outlet />
			</S.MainLayout>
			<BottomNavigation />
		</S.LayoutWrapper>
	</>
);

export default Layout;
