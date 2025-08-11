import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import logoSvg from '@/assets/logo.svg';
import MenuIcon from '@/components/Icon/MenuIcon';
import UserIcon from '@/components/Icon/UserIcon';
import { menuList } from '@/constants/menu';
import { useAuthStore } from '@/store/authStore';
import { useTokenStore } from '@/store/tokenStore';

import * as Styled from './style';

const Header = () => {
	const { isLogin } = useTokenStore();

	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

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
						<Styled.LogoButton onClick={() => navigate('/dashboard')}>
							<img src={logoSvg} alt="OUTDO" />
						</Styled.LogoButton>
					</Styled.Nav>
				</div>
			</Styled.HeaderContainer>
		</>
	);
};

export default Header;
