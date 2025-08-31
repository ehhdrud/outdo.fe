import styled from '@emotion/styled';

import { BOTTOM_NAV_HEIGHT, HEADER_HEIGHT } from '@/constants/layout.constant.ts';

export const LayoutWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	max-width: 600px;
	height: 100dvh;
	box-shadow:
		0 16px 32px rgba(0, 0, 0, 0.4),
		0 4px 16px rgba(0, 0, 0, 0.2),
		inset 0 1px 0 rgba(255, 255, 255, 0.05);
	pointer-events: none;
	z-index: 50;

	> * {
		pointer-events: auto;
	}
`;

export const MainLayout = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	width: 100%;
	margin-top: ${HEADER_HEIGHT}px;
	margin-bottom: ${BOTTOM_NAV_HEIGHT}px;
	height: calc(100dvh - ${HEADER_HEIGHT}px - ${BOTTOM_NAV_HEIGHT}px);
	background-color: rgba(22, 27, 34, 0.95);
	backdrop-filter: blur(10px);
	overflow-x: hidden;
	overflow-y: auto;
	box-sizing: border-box;
	padding: 4rem 2rem;

	&::-webkit-scrollbar {
		width: 6px;
	}

	&::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 3px;
	}

	&::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 3px;
		transition: background 0.2s ease;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.3);
	}

	scrollbar-width: thin;
	scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05);
`;
