import styled from '@emotion/styled';

import { colors } from '@/styles/color';

export const ChartWrapper = styled.div`
	display: flex;
	align-items: stretch;
	gap: 4px;
	position: relative;
	width: 100%;
	min-width: 294px;

	@media (min-width: 480px) {
		min-width: 348px;
	}

	@media (min-width: 540px) {
		min-width: 394px;
	}
	overflow-x: auto;
	scrollbar-width: thin;
	scrollbar-color: transparent transparent;

	&:hover {
		scrollbar-color: ${colors.surface.border} transparent;
	}

	&::-webkit-scrollbar {
		height: 4px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background: ${colors.surface.border};
		border-radius: 2px;
		transition: background-color 0.2s ease;

		&:hover {
			background: ${colors.text.muted};
		}
	}

	&::-webkit-scrollbar-thumb {
		background: transparent;
	}

	&:hover::-webkit-scrollbar-thumb {
		background: ${colors.surface.border};

		&:hover {
			background: ${colors.text.muted};
		}
	}
`;

export const WeekLabels = styled.div`
	display: grid;
	grid-template-rows: repeat(7, 1fr);
	gap: 2px;
	flex-shrink: 0;
	width: 20px;
	min-width: 20px;
`;

export const WeekLabel = styled.div`
	display: flex;
	align-items: center;
	font-size: 10px;
	color: ${colors.text.muted};
	line-height: 1;
	width: 20px;
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(19, minmax(0, 1fr));
	grid-template-rows: repeat(7, 1fr);
	grid-auto-flow: column;
	gap: 2px;
	width: calc(100% - 24px);
	aspect-ratio: 19 / 7;
	min-width: 270px;

	@media (min-width: 480px) {
		grid-template-columns: repeat(23, minmax(0, 1fr));
		aspect-ratio: 23 / 7;
		min-width: 324px;
	}

	@media (min-width: 540px) {
		grid-template-columns: repeat(26, minmax(0, 1fr));
		aspect-ratio: 26 / 7;
		min-width: 370px;
	}
`;

interface DaySquareProps {
	$activity: number;
}

export const DaySquare = styled.div<DaySquareProps>`
	width: 100%;
	aspect-ratio: 1;
	border-radius: 2px;
	cursor: ${({ $activity }) => ($activity === 0 ? 'default' : 'pointer')};
	transition: all 0.2s ease;
	box-sizing: border-box;

	background-color: ${({ $activity }) => {
		switch ($activity) {
			case 0:
				return colors.surface.borderSubtle;
			case 1:
				return colors.accent.muted;
			case 2:
				return colors.accent.primary;
			default:
				return colors.surface.borderSubtle;
		}
	}};

	border: 1px solid ${colors.surface.border};

	&:hover {
		border-color: ${({ $activity }) => ($activity === 0 ? colors.surface.border : colors.accent.hover)};
		filter: ${({ $activity }) => ($activity === 0 ? 'none' : 'brightness(1.2)')};
		transform: ${({ $activity }) => ($activity === 0 ? 'none' : 'scale(1.05)')};
	}

	&:nth-of-type(-n + 49) {
		@media (max-width: 479px) {
			display: none;
		}
	}

	&:nth-of-type(-n + 21) {
		@media (min-width: 480px) and (max-width: 539px) {
			display: none;
		}
	}
`;

export * from './SummaryChart.style';
