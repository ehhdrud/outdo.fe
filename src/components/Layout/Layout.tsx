import { Outlet } from 'react-router-dom';

import Header from '@/components/Header/Header';

import * as S from './style';
import SideButton from '../common/Button/SideButton';
import ScrollToTop from '../common/ScrollToTop/scrollToTop';
import Toast from '../common/Toast/Toast';

const Layout = () => (
	<>
		<Toast />
		<ScrollToTop />
		<Header />
		<S.MainLayout>
			<Outlet />
		</S.MainLayout>
		<SideButton />
	</>
);

export default Layout;
