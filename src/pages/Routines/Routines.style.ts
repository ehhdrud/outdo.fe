import styled from '@emotion/styled';

export const RoutinesWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const RoutineCard = styled.div`
	background: linear-gradient(135deg, #1a1f2e 0%, #1e2332 100%);
	border: 1px solid #2a3441;
	border-radius: 8px;
	padding: 16px;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	outline: none;
	position: relative;
	overflow: hidden;
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(47, 129, 247, 0.03) 0%, rgba(30, 35, 50, 0.05) 100%);
		opacity: 0;
		transition: opacity 0.3s ease;
		pointer-events: none;
	}

	&:hover,
	&:focus {
		background: linear-gradient(135deg, #1e2436 0%, #22273a 100%);
		border-color: #3a4553;
		transform: translateY(-2px);
		box-shadow:
			0 8px 25px rgba(26, 31, 46, 0.4),
			0 3px 10px rgba(47, 129, 247, 0.1);

		&::before {
			opacity: 1;
		}
	}

	&:focus {
		box-shadow:
			0 8px 25px rgba(26, 31, 46, 0.4),
			0 0 0 3px rgba(47, 129, 247, 0.3);
	}
`;

export const RoutineTitle = styled.h3`
	font-size: ${({ theme }) => theme.fontSize.sizeMd};
	font-weight: ${({ theme }) => theme.fontWeight.weightSemi};
	color: #f0f6fc;
	margin: 0 0 12px 0;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	line-height: 1.4;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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
	padding: 8px 10px;
	border-radius: 4px;
`;

export const WorkoutName = styled.span`
	font-size: ${({ theme }) => theme.fontSize.sizeXs};
	color: #e6edf3;
	text-transform: capitalize;
	line-height: 1.4;
	flex: 1;
	font-weight: 500;
`;

export const WorkoutMeta = styled.div`
	display: flex;
	gap: 6px;
	align-items: center;
`;
