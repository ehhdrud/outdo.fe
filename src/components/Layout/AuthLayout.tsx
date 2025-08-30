import { Outlet } from 'react-router-dom';

import Toast from '@/components/common/Toast/Toast';

import * as S from './AuthLayout.style';

const AuthLayout = () => (
	<>
		<Toast />
		<S.AuthLayoutWrapper>
			<Outlet />
		</S.AuthLayoutWrapper>
	</>
);

export default AuthLayout;
