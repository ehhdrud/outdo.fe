import React from 'react';

import { mockActivityLevels, mockDashboardData } from '@/data/mockDashboardData';

import * as S from './SummaryChart.style';

interface SummaryChartProps {
	data?: number[];
	showDebugInfo?: boolean;
}

const SummaryChart: React.FC<SummaryChartProps> = ({ data, showDebugInfo = false }) => {
	const chartData = data ? [...data].reverse() : [...mockActivityLevels].reverse();
	const reversedSummaryData = [...mockDashboardData].reverse();
	const weekLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const activityStats = chartData.reduce(
		(acc, level) => {
			acc[level as keyof typeof acc]++;
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
					{chartData.map((dayValue, index) => {
						const dayData = reversedSummaryData[index];
						const baseTitle = `${dayData?.date || `Day ${index + 1}`}, Routine: ${dayData?.routine || 'Rest'}`;
						const achievementText = dayData?.achievement ? `, Achievement: ${dayData.achievement}` : '';

						return <S.DaySquare key={index} $activity={dayValue} title={baseTitle + achievementText} />;
					})}
				</S.GridContainer>
			</S.ChartWrapper>

			{showDebugInfo && (
				<div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px', fontSize: '12px' }}>
					<h4 style={{ margin: '0 0 8px 0' }}>테스트 데이터 정보</h4>
					<p style={{ margin: '4px 0' }}>총 데이터: {chartData.length}개</p>
					<p style={{ margin: '4px 0' }}>비활성 (0): {activityStats[0]}개</p>
					<p style={{ margin: '4px 0' }}>낮은 활동 (1): {activityStats[1]}개</p>
					<p style={{ margin: '4px 0' }}>높은 활동 (2): {activityStats[2]}개</p>
					<p style={{ margin: '4px 0' }}>최신 날짜: {mockDashboardData[0]?.date}</p>
					<p style={{ margin: '4px 0' }}>가장 오래된 날짜: {mockDashboardData[181]?.date}</p>
				</div>
			)}
		</div>
	);
};

export default SummaryChart;
