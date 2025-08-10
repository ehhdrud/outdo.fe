import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
						<Styled.LogoBox>
							<button
								onClick={() => {
									navigate('/');
									document.body.classList.remove('hidden');
									setIsOpen(false);
								}}
							>
								<Styled.ImgBox></Styled.ImgBox>
							</button>
						</Styled.LogoBox>

						{isLogin() && (
							<Styled.MenuContainer>
								<ul></ul>
							</Styled.MenuContainer>
						)}

						{!isLogin() && (
							<button className="c_button primary-fill small" onClick={() => navigate('/auth/login')}>
								로그인
							</button>
						)}
					</Styled.Nav>
				</div>
			</Styled.HeaderContainer>
		</>
	);
};

export default Header;
