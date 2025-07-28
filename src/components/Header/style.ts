import styled from '@emotion/styled';

import { HEADER_HEIGHT } from '@/constants/layout.constant.ts';

interface HeaderContainerProps {
	isOpen: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
	position: ${(props) => (props.isOpen ? 'fixed' : 'sticky')};
	top: 0;
	right: 0;
	left: 0;
	background-color: #ffffff;
	height: ${HEADER_HEIGHT}px;
	z-index: 100;
	border-bottom: 1px solid #dee2e6;
`;
export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	max-width: 60rem;
	margin: 0 auto;
	height: ${HEADER_HEIGHT}px;
	align-items: center;
	max-width: 60rem;
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
			font-family: 'Montserrat', sans-serif;
			font-size: ${(props) => props.theme.fontSize.sizeLgPx};
			font-weight: 500;
			color: ${(props) => props.theme.colors.grayMid};
			cursor: pointer;

			&.active,
			&:hover {
				color: ${(props) => props.theme.colors.primary200};
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
