import styled from '@emotion/styled';

import { colors } from '@/styles/color';

export const RoutineDetailWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
`;

export const InfoSection = styled.div`
	position: sticky;
	top: -20px;
	z-index: 10;
	background: rgba(22, 27, 34, 0.5);
	backdrop-filter: blur(10px);
	padding: 16px 0;
	margin: -20px -20px 0px -20px;
	padding-left: 20px;
	padding-right: 20px;
	box-shadow:
		0 12px 48px rgba(0, 0, 0, 1),
		0 8px 24px rgba(0, 0, 0, 0.3),
		0 4px 16px rgba(0, 0, 0, 0.2);
`;

export const InfoHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const RoutineTitle = styled.h3`
	font-size: ${({ theme }) => theme.fontSize.size2xl};
`;

export const WorkoutSection = styled.div`
	/* workout이 추가되고 삭제되며 관리되는 공간 */
	margin-top: 8px;
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

export const WorkoutHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 12px;
	position: relative;
`;

export const MoreButton = styled.button`
	background: transparent;
	border: none;
	color: rgba(255, 255, 255, 0.8);
	padding: 4px 8px;
	border-radius: 4px;
	cursor: pointer;
	transition: background 0.2s ease;
	line-height: 1;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background: rgba(255, 255, 255, 0.08);
	}
`;

export const MoreMenu = styled.div`
	position: absolute;
	top: calc(100% + 6px);
	right: 0;
	background: #151a26;
	border: 1px solid #2a3441;
	border-radius: 6px;
	min-width: 160px;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.32);
	overflow: hidden;
`;

export const MoreMenuList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 6px 0;
`;

export const MoreMenuItem = styled.li`
	button {
		width: 100%;
		background: transparent;
		border: none;
		color: rgba(255, 255, 255, 0.9);
		padding: 8px 12px;
		text-align: left;
		cursor: pointer;
		font-size: 13px;

		&:hover {
			background: rgba(255, 255, 255, 0.06);
		}
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

	span {
		font-size: 12px;
	}
`;

export const RepsInputGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;

	span {
		font-size: 12px;
	}
`;

export const SetRow = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
	margin-bottom: 8px;
	justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const LoadingText = styled.p`
	font-size: 14px;
	color: ${colors.text.muted};
	text-align: center;
	padding: 48px 0;
`;
