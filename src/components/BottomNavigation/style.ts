import styled from '@emotion/styled';

import { BOTTOM_NAV_HEIGHT } from '@/constants/layout.constant.ts';

interface NavButtonProps {
	isActive: boolean;
}

interface IconWrapperProps {
	isActive: boolean;
}

interface LabelProps {
	isActive: boolean;
}

export const BottomNavContainer = styled.nav`
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	max-width: 600px;
	height: ${BOTTOM_NAV_HEIGHT}px;
	background-color: rgba(22, 27, 34, 0.98);
	backdrop-filter: blur(12px);
	border-top: 1px solid #30363d;
	z-index: 100;
`;

export const NavList = styled.ul`
	display: flex;
	height: 100%;
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const NavItem = styled.li`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const NavButton = styled.button<NavButtonProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding: 8px 4px;
	background: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease;
	color: ${(props) => (props.isActive ? props.theme.colors.accent.primary : props.theme.colors.text.secondary)};

	&:hover {
		background-color: rgba(255, 255, 255, 0.05);
		color: ${(props) => props.theme.colors.accent.primary};
	}

	&:active {
		transform: scale(0.95);
	}
`;

export const IconWrapper = styled.div<IconWrapperProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 4px;
	transition: all 0.2s ease;

	svg {
		width: 24px;
		height: 24px;
		transition: all 0.2s ease;
		opacity: ${(props) => (props.isActive ? 1 : 0.7)};
	}
`;

export const Label = styled.span<LabelProps>`
	font-size: 11px;
	font-weight: ${(props) => (props.isActive ? 600 : 400)};
	line-height: 1;
	transition: all 0.2s ease;
	opacity: ${(props) => (props.isActive ? 1 : 0.8)};
`;
