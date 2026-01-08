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
	background: linear-gradient(135deg, #1a1f2e 0%, #1e2332 100%);
	border: 1px solid #2a3441;
	border-radius: 6px;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(47, 129, 247, 0.02) 0%, rgba(88, 166, 255, 0.01) 100%);
		opacity: 0;
		transition: opacity 0.3s ease;
		pointer-events: none;
	}

	&:hover {
		background: linear-gradient(135deg, #1c212f 0%, #202635 100%);
		border-color: #334155;
		box-shadow:
			0 4px 12px rgba(26, 31, 46, 0.3),
			0 1px 4px rgba(47, 129, 247, 0.05);

		&::before {
			opacity: 1;
		}
	}
`;

export const DateText = styled.span`
	font-size: 14px;
	color: #8b949e;
	min-width: 80px;
	font-weight: 500;
`;

export const RoutineText = styled.span`
	font-size: 14px;
	font-weight: 500;
	color: #e6edf3;
	flex: 1;
	text-align: center;
`;

export const AchievementText = styled.span`
	font-size: 14px;
	font-weight: 600;
	color: #58a6ff;
	min-width: 60px;
	text-align: right;
`;

export const EmptyText = styled.span`
	font-size: 14px;
	color: ${colors.text.muted};
	text-align: center;
	padding: 24px 0;
`;
