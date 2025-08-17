import styled from '@emotion/styled';

import { colors } from '../../styles/color';

export const ChartWrapper = styled.div`
	display: flex;
	align-items: stretch; /* 두 컴포넌트의 높이 동일하게 */
	gap: 4px;
	position: relative;
	width: 100%;
	min-width: 294px; /* WeekLabels(20px) + gap(4px) + GridContainer(270px) */

	/* 480px 이상에서 최소 너비 업데이트 */
	@media (min-width: 480px) {
		min-width: 348px; /* WeekLabels(20px) + gap(4px) + GridContainer(324px) */
	}

	/* 540px 이상에서 최소 너비 업데이트 */
	@media (min-width: 540px) {
		min-width: 394px; /* WeekLabels(20px) + gap(4px) + GridContainer(370px) */
	}
	overflow-x: auto;
	scrollbar-width: thin; /* Firefox용 얇은 스크롤바 */
	scrollbar-color: transparent transparent; /* Firefox용 투명 스크롤바 */

	&:hover {
		scrollbar-color: ${colors.surface.border} transparent; /* Firefox용 호버 시 스크롤바 표시 */
	}

	/* 커스텀 스크롤바 스타일링 - 필요할 때만 보임 */
	&::-webkit-scrollbar {
		height: 4px;
	}

	&::-webkit-scrollbar-track {
		background: transparent; /* 트랙 투명 */
	}

	&::-webkit-scrollbar-thumb {
		background: ${colors.surface.border};
		border-radius: 2px;
		transition: background-color 0.2s ease;

		&:hover {
			background: ${colors.text.muted};
		}
	}

	/* 스크롤이 필요없을 때 숨김 */
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
	gap: 2px; /* GridContainer와 동일한 gap */
	flex-shrink: 0;
	width: 20px;
	min-width: 20px; /* 최소 너비 보장 */
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
	grid-template-columns: repeat(19, minmax(0, 1fr)); /* 최소 크기 0으로 제한 */
	grid-template-rows: repeat(7, 1fr); /* 7행 명시적 정의 */
	grid-auto-flow: column; /* 열 우선 배치 (위에서 아래로, 다음 열로) */
	gap: 2px;
	width: calc(100% - 24px); /* 100% - WeekLabels(20px) - gap(4px) */
	aspect-ratio: 19 / 7; /* 19열 7행 비율 유지 */
	min-width: 270px; /* 19 * 12px + 18 * 2px(gap) = 270px 최소 너비 */

	/* 480px 이상에서 23열로 변경 */
	@media (min-width: 480px) {
		grid-template-columns: repeat(23, minmax(0, 1fr)); /* 최소 크기 0으로 제한 */
		aspect-ratio: 23 / 7; /* 23열 7행 비율 유지 */
		min-width: 324px; /* 23 * 12px + 22 * 2px(gap) = 324px 최소 너비 */
	}

	/* 540px 이상에서 26열로 변경 */
	@media (min-width: 540px) {
		grid-template-columns: repeat(26, minmax(0, 1fr)); /* 최소 크기 0으로 제한 */
		aspect-ratio: 26 / 7; /* 26열 7행 비율 유지 */
		min-width: 370px; /* 26 * 12px + 25 * 2px(gap) = 370px 최소 너비 */
	}
`;

interface DaySquareProps {
	$activity: number;
}

export const DaySquare = styled.div<DaySquareProps>`
	width: 100%;
	aspect-ratio: 1; /* 정사각형 비율 유지 */
	border-radius: 2px;
	cursor: pointer;
	transition: all 0.2s ease;
	box-sizing: border-box; /* border를 width에 포함 */

	/* 프로젝트의 파란색 테마를 사용한 활동 레벨 색상 */
	background-color: ${({ $activity }) => {
		switch ($activity) {
			case 0:
				return colors.surface.borderSubtle; // 비활성
			case 1:
				return colors.accent.muted; // 낮은 활동
			case 2:
				return colors.accent.primary; // 높은 활동
			default:
				return colors.surface.borderSubtle;
		}
	}};

	border: 1px solid ${colors.surface.border};

	&:hover {
		border-color: ${colors.accent.hover};

		/* 호버 시 불투명도/밝기 약간 증가 */
		filter: brightness(1.2);
	}

	/* 3단계 반응형 숨김 처리 - 최신 데이터 우선 표시 */
	/* 479px 이하: 최신 133개(19열)만 표시, 이전 49개 숨김 */
	&:nth-of-type(-n + 49) {
		@media (max-width: 479px) {
			display: none;
		}
	}

	/* 480-539px: 최신 161개(23열)만 표시, 이전 21개 숨김 */
	&:nth-of-type(-n + 21) {
		@media (min-width: 480px) and (max-width: 539px) {
			display: none;
		}
	}
`;

/* 인덱스 파일용 스타일 익스포트 */
export * from './SummaryChart.style';
