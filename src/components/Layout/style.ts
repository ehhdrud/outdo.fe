import styled from '@emotion/styled';

import { HEADER_HEIGHT } from '@/constants/layout.constant.ts';

export const MainLayout = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 60rem;
	overflow: hidden;
	margin: 0 auto;
	min-height: calc(100dvh - ${HEADER_HEIGHT}px);
`;
