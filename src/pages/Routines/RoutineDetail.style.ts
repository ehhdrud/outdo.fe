import styled from '@emotion/styled';

export const RoutineDetailWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
`;

export const InfoSection = styled.div`
	/* 간단한 정보를 담는 공간 */
`;

export const RoutineTitle = styled.h3`
	font-size: ${({ theme }) => theme.fontSize.sizeXl};
`;

export const WorkoutSection = styled.div`
	/* workout이 추가되고 삭제되며 관리되는 공간 */
`;

export const WorkoutCard = styled.div`
	background: linear-gradient(135deg, #1a1f2e 0%, #1e2332 100%);
	border: 1px solid #2a3441;
	border-radius: 8px;
	padding: 16px;
	position: relative;
	overflow: hidden;
	cursor: grab;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

	&:active {
		cursor: grabbing;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(47, 129, 247, 0.03) 0%, rgba(30, 35, 50, 0.05) 100%);
		pointer-events: none;
	}
`;

export const WorkoutList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
