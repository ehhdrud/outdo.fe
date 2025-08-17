import React from 'react';

import * as S from './SummaryChart.style';
import { mockActivityLevels, mockSummaryData } from '../../data/mockSummaryData';

interface SummaryChartProps {
	data?: number[];
	showDebugInfo?: boolean; // 테스트용 디버그 정보 표시
}

const SummaryChart: React.FC<SummaryChartProps> = ({ data, showDebugInfo = false }) => {
	// 데이터가 제공되지 않으면 목데이터 사용
	// ~479px: 19열(133일), 480-539px: 23열(161일), 540px+: 26열(182일)
	const chartData = data || mockActivityLevels;
	const weekLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	// 활동 레벨별 개수 계산
	const activityStats = chartData.reduce(
		(acc, level) => {
			acc[level]++;
			return acc;
		},
		{ 0: 0, 1: 0, 2: 0 }
	);

	return (
		<div>
			<S.ChartWrapper>
				<S.WeekLabels>
					{weekLabels.map((label, index) => (
						<S.WeekLabel key={index}>{label}</S.WeekLabel>
					))}
				</S.WeekLabels>

				<S.GridContainer>
					{chartData.map((dayValue, index) => (
						<S.DaySquare key={index} $activity={dayValue} title={`${mockSummaryData[index]?.date || `Day ${index + 1}`}, Activity: ${dayValue}`} />
					))}
				</S.GridContainer>
			</S.ChartWrapper>

			{showDebugInfo && (
				<div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px', fontSize: '12px' }}>
					<h4 style={{ margin: '0 0 8px 0' }}>테스트 데이터 정보</h4>
					<p style={{ margin: '4px 0' }}>총 데이터: {chartData.length}개</p>
					<p style={{ margin: '4px 0' }}>비활성 (0): {activityStats[0]}개</p>
					<p style={{ margin: '4px 0' }}>낮은 활동 (1): {activityStats[1]}개</p>
					<p style={{ margin: '4px 0' }}>높은 활동 (2): {activityStats[2]}개</p>
					<p style={{ margin: '4px 0' }}>최신 날짜: {mockSummaryData[0]?.date}</p>
					<p style={{ margin: '4px 0' }}>가장 오래된 날짜: {mockSummaryData[181]?.date}</p>
				</div>
			)}
		</div>
	);
};

export default SummaryChart;
