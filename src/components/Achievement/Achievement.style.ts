import styled from '@emotion/styled';

import { colors } from '@/styles/color';

export const AchievementWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const AchievementItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px;
	background-color: ${colors.surface.primary};
	border: 1px solid ${colors.surface.border};
	border-radius: 8px;
	transition: all 0.2s ease;

	&:hover {
		background-color: ${colors.surface.secondary};
		border-color: ${colors.accent.muted};
	}
`;

export const DateText = styled.span`
	font-size: 14px;
	color: ${colors.text.muted};
	min-width: 80px;
`;

export const RoutineText = styled.span`
	font-size: 16px;
	font-weight: 500;
	color: ${colors.text.primary};
	flex: 1;
	text-align: center;
`;

export const AchievementText = styled.span`
	font-size: 16px;
	font-weight: 600;
	color: ${colors.accent.primary};
	min-width: 60px;
	text-align: right;
`;
