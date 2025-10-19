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
`;

export const WorkoutList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const NumberInput = styled.input`
	background: transparent;
	border: 1px solid #2a3441;
	border-radius: 4px;
	padding: 4px 8px;
	color: white;
	outline: none;
	width: 60px;

	/* 스피너 버튼 숨기기 */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox에서 스피너 숨기기 */
	&[type='number'] {
		-moz-appearance: textfield;
	}
`;

export const WeightInputGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const RepsInputGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const SetRow = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
	margin-bottom: 8px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
