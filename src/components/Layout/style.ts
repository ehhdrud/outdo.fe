import styled from '@emotion/styled';

import { HEADER_HEIGHT } from '@/constants/layout.constant.ts';

export const MainLayout = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 600px;
	margin: 0 auto;
	padding: 0;
	height: calc(100dvh - ${HEADER_HEIGHT}px);
	background-color: transparent;
`;
