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
		scrollbar-color: #3a4553 transparent;
	}

	&::-webkit-scrollbar {
		height: 4px;
	}

	&::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.03);
		border-radius: 2px;
	}

	&::-webkit-scrollbar-thumb {
		background: #3a4553;
		border-radius: 2px;
		transition: background-color 0.2s ease;

		&:hover {
			background: #4a5563;
		}
	}

	&::-webkit-scrollbar-thumb {
		background: transparent;
	}

	&:hover::-webkit-scrollbar-thumb {
		background: #3a4553;

		&:hover {
			background: #4a5563;
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
	color: #8b949e;
	line-height: 1;
	width: 20px;
	font-weight: 500;
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
				return '#232935';
			case 1:
				return '#1f6feb60';
			case 2:
				return '#58a6ff';
			default:
				return '#232935';
		}
	}};

	border: 1px solid #2a3441;

	&:hover {
		border-color: ${({ $activity }) => ($activity === 0 ? '#2a3441' : '#58a6ff')};
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
