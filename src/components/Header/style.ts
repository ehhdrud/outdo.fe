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
	justify-content: space-between;
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

export const HeaderActions = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
`;

export const SignInButton = styled.button`
	background: none;
	border: none;
	color: rgba(255, 255, 255, 0.8);
	font-size: 13px;
	font-weight: 500;
	padding: 6px 10px;
	cursor: pointer;
	transition: all 0.2s ease;
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	&:hover {
		color: rgba(255, 255, 255, 1);
	}

	&:focus {
		outline: none;
		color: rgba(255, 255, 255, 1);
	}

	@media (hover: none) {
		&:active {
			color: rgba(255, 255, 255, 0.6);
		}
	}
`;

export const SignUpButton = styled.button`
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.15);
	border-radius: 5px;
	color: rgba(255, 255, 255, 0.9);
	font-size: 13px;
	font-weight: 500;
	padding: 6px 12px;
	cursor: pointer;
	transition: all 0.2s ease;
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	&:hover {
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.2);
		color: rgba(255, 255, 255, 1);
		transform: translateY(-1px);
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(47, 129, 247, 0.4);
	}

	@media (hover: hover) {
		&:active {
			transform: translateY(0) scale(0.98);
		}
	}

	@media (hover: none) {
		&:active {
			transform: none;
			background: rgba(255, 255, 255, 0.03);
		}
	}
`;

export const UserButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	background: rgba(255, 255, 255, 0.08);
	border: 1px solid rgba(255, 255, 255, 0.12);
	border-radius: 50%;
	color: rgba(255, 255, 255, 0.9);
	cursor: pointer;
	transition: all 0.2s ease;
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	&:hover {
		background: rgba(255, 255, 255, 0.12);
		border-color: rgba(255, 255, 255, 0.18);
		transform: translateY(-1px);
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(47, 129, 247, 0.4);
	}

	@media (hover: hover) {
		&:active {
			transform: translateY(0) scale(0.95);
		}
	}

	@media (hover: none) {
		&:active {
			transform: none;
		}
	}

	svg {
		width: 16px;
		height: 16px;
		opacity: 0.8;
	}
`;
