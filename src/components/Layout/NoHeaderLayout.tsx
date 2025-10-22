import { Outlet } from 'react-router-dom';

import BottomNavigation from '@/components/BottomNavigation/BottomNavigation';
import Toast from '@/components/common/Toast/Toast';

import * as S from './style';

const NoHeaderLayout = () => (
	<>
		<Toast />
		<S.LayoutWrapper>
			<S.MainLayoutNoHeader>
				<Outlet />
			</S.MainLayoutNoHeader>
			<BottomNavigation />
		</S.LayoutWrapper>
	</>
);

export default NoHeaderLayout;
