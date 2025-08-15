import styled from '@emotion/styled';

import { colors } from '../../../styles/color';

export const SectionContainer = styled.div`
	width: 100%;
	padding: 20px;
	background: ${colors.background.secondary};
	border-radius: 8px;
	border: 1px solid ${colors.surface.border};
`;

export const SectionTitle = styled.h3`
	color: ${colors.text.primary};
	font-size: 16px;
	font-weight: 600;
	margin: 0 0 16px 0;
`;

export const SectionContent = styled.div`
	width: 100%;
	overflow-x: auto;

	/* 스크롤바 스타일링 */
	&::-webkit-scrollbar {
		height: 6px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background: ${colors.surface.muted};
		border-radius: 3px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: ${colors.text.muted};
	}
`;
