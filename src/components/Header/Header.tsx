import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logoSvg from '@/assets/logo.svg';
import { useTokenStore } from '@/store/tokenStore';

import * as Styled from './style';

const Header = () => {
	const isLogin = useTokenStore((state) => state.isLogin());

	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const onClickMenuOpen = () => {
		setIsOpen(!isOpen);
		if (isOpen) {
			document.body.classList.remove('hidden');
		} else {
			document.body.classList.add('hidden');
		}
	};

	return (
		<>
			<Styled.HeaderContainer id="header" isOpen={isOpen}>
				<div className="container">
					<Styled.Nav>
						<Styled.LogoButton onClick={() => navigate('/')}>
							<img src={logoSvg} alt="OUTDO" />
						</Styled.LogoButton>
						<Styled.HeaderActions>
							{!isLogin ? (
								<>
									<Styled.SignInButton onClick={() => navigate('/auth')}>Sign in</Styled.SignInButton>
									<Styled.SignUpButton onClick={() => navigate('/auth/sign-up')}>Sign up</Styled.SignUpButton>
								</>
							) : null}
						</Styled.HeaderActions>
					</Styled.Nav>
				</div>
			</Styled.HeaderContainer>
		</>
	);
};

export default Header;
