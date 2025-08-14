import styled from '@emotion/styled';

import { HEADER_HEIGHT } from '@/constants/layout.constant.ts';

interface HeaderContainerProps {
	isOpen: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	max-width: 600px;
	height: auto;
	background-color: rgba(22, 27, 34, 0.98);
	backdrop-filter: blur(12px);
	z-index: 100;
	border: none;
`;
export const Nav = styled.nav`
	display: flex;
	justify-content: flex-start;
	width: 100%;
	height: auto;
	align-items: center;
	padding: 16px;
`;

export const LogoButton = styled.button`
	display: flex;
	align-items: center;
	background: none;
	border: none;
	cursor: pointer;
	padding: 0;

	img {
		width: 100px;
		height: 30px;
	}
`;
export const MenuContainer = styled.div`
	width: 100%;
	height: 100%;
	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		height: 100%;
		li {
			height: 100%;
		}
		button {
			display: block;
			height: 100%;
			padding: 2rem;
			border: none;
			background-color: transparent;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
			font-size: ${(props) => props.theme.fontSize.sizeLgPx};
			font-weight: 500;
			color: ${(props) => props.theme.colors.text.secondary};
			cursor: pointer;
			transition: color 0.2s ease;

			&.active,
			&:hover {
				color: ${(props) => props.theme.colors.accent.primary};
			}
		}
	}
`;
export const MenuButtonBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.2rem;
`;
export const LogoBox = styled.div`
	display: flex;
	gap: 6rem;
	button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
	&.hover {
		align-items: flex-start;
		.sub_menu {
			display: block;
			color: #495057;
			padding: 1.5rem 0;
			font-size: ${(props) => props.theme.fontSize.sizeLg};
			font-style: normal;
			font-weight: ${(props) => props.theme.fontWeight.weightRegular};
			line-height: 100%;
			white-space: nowrap;
			cursor: pointer;
			&:hover {
				color: ${(props) => props.theme.colors.primary400};
			}
		}
	}
	.menu_link {
		display: flex;
		width: 64rem;
		text-align: center;
	}
`;
export const ImgBox = styled.div`
	img {
		width: 100%;
		height: 100%;
	}
`;
export const NavMoLinks = styled.div`
	display: flex;
	align-items: center;
	gap: 1.2rem;
	white-space: nowrap;
	padding-left: 2rem;
`;
