import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import logoSvg from '@/assets/logo.svg';
import { useToastStore } from '@/store/toastStore';
import { useTokenStore } from '@/store/tokenStore';

import * as S from './Callback.style';

const Callback = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const { setAccessToken, setRefreshToken } = useTokenStore();
	const { openToast } = useToastStore();

	useEffect(() => {
		const accessToken = searchParams.get('access_token');
		const refreshToken = searchParams.get('refresh_token');
		const error = searchParams.get('error');

		if (error) {
			openToast({
				icon: 'alert',
				content: 'Google 로그인 실패',
				subContent: '다시 시도해주세요.',
				showTime: 3000,
			});
			navigate('/auth');
			return;
		}

		if (accessToken && refreshToken) {
			setAccessToken(accessToken);
			setRefreshToken(refreshToken);
			openToast({
				icon: 'check',
				content: '로그인 성공',
				showTime: 2000,
			});
			navigate('/');
		} else {
			openToast({
				icon: 'alert',
				content: '인증 정보가 없습니다',
				subContent: '다시 로그인해주세요.',
				showTime: 3000,
			});
			navigate('/auth');
		}
	}, [searchParams, setAccessToken, setRefreshToken, navigate, openToast]);

	return (
		<S.CallbackWrapper>
			<S.Logo src={logoSvg} alt="OUTDO" />
			<S.LoadingText>로그인 처리 중...</S.LoadingText>
			<S.Spinner />
		</S.CallbackWrapper>
	);
};

export default Callback;
