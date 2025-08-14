import { useLocation, useNavigate } from 'react-router-dom';

import * as S from './style';

interface NavItem {
	id: string;
	label: string;
	path: string;
	icon: React.ReactNode;
}

const navItems: NavItem[] = [
	{
		id: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
				<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
			</svg>
		),
	},
	{
		id: 'routine',
		label: 'Routines',
		path: '/routines',
		icon: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
			</svg>
		),
	},
	{
		id: 'profile',
		label: 'Profile',
		path: '/profile',
		icon: (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
				<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
			</svg>
		),
	},
];

const BottomNavigation = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleNavClick = (path: string) => {
		navigate(path);
	};

	return (
		<S.BottomNavContainer>
			<S.NavList>
				{navItems.map((item) => {
					const isActive = location.pathname === item.path || (item.path === '/routines' && location.pathname.startsWith('/routines'));

					return (
						<S.NavItem key={item.id}>
							<S.NavButton onClick={() => handleNavClick(item.path)} isActive={isActive}>
								<S.IconWrapper isActive={isActive}>{item.icon}</S.IconWrapper>
								<S.Label isActive={isActive}>{item.label}</S.Label>
							</S.NavButton>
						</S.NavItem>
					);
				})}
			</S.NavList>
		</S.BottomNavContainer>
	);
};

export default BottomNavigation;
