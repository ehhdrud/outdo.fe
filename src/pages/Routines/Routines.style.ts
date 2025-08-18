import styled from '@emotion/styled';

export const RoutinesWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const RoutineCard = styled.div`
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 6px;
	padding: 12px;
	transition: all 0.2s ease;
	backdrop-filter: blur(8px);

	&:hover {
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.15);
		transform: translateY(-1px);
	}
`;

export const RoutineTitle = styled.h3`
	font-size: ${({ theme }) => theme.fontSize.sizeMd};
	font-weight: ${({ theme }) => theme.fontWeight.weightSemi};
	color: rgba(255, 255, 255, 0.9);
	margin: 0 0 8px 0;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	line-height: 1.4;
`;

export const WorkoutList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 1px;
`;

export const WorkoutItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 6px 8px;
	border-radius: 3px;
	transition: all 0.15s ease;
	cursor: pointer;
	outline: none;

	&:hover,
	&:focus {
		background: rgba(255, 255, 255, 0.08);
		transform: translateX(1px);
	}

	&:focus {
		box-shadow: 0 0 0 2px rgba(47, 129, 247, 0.4);
	}

	&:active {
		transform: scale(0.98);
	}
`;

export const WorkoutName = styled.span`
	font-size: ${({ theme }) => theme.fontSize.sizeXs};
	color: rgba(255, 255, 255, 0.9);
	text-transform: capitalize;
	line-height: 1.4;
	flex: 1;
`;

export const WorkoutMeta = styled.div`
	display: flex;
	gap: 6px;
	align-items: center;
`;

export const SetsBadge = styled.span`
	background: rgba(47, 129, 247, 0.15);
	color: rgba(47, 129, 247, 0.9);
	border: 1px solid rgba(47, 129, 247, 0.3);
	padding: 2px 6px;
	border-radius: 10px;
	font-size: 10px;
	font-weight: ${({ theme }) => theme.fontWeight.weightMedium};
	line-height: 1.2;
	white-space: nowrap;
`;

export const TargetBadge = styled.span`
	background: rgba(255, 255, 255, 0.08);
	color: rgba(255, 255, 255, 0.6);
	border: 1px solid rgba(255, 255, 255, 0.15);
	padding: 2px 6px;
	border-radius: 10px;
	font-size: 10px;
	font-weight: ${({ theme }) => theme.fontWeight.weightRegular};
	line-height: 1.2;
	white-space: nowrap;
`;
