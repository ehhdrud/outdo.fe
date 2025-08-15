import React from 'react';

import * as S from './SummaryChart.style';

interface SummaryChartProps {
	data?: number[];
}

const SummaryChart: React.FC<SummaryChartProps> = ({ data }) => {
	// 데이터가 제공되지 않으면 샘플 데이터 생성
	// ~479px: 20열(140일), 480-539px: 23열(161일), 540px+: 26열(182일)
	const generateSampleData = () => {
		const totalDays = 7 * 26; // 182일 (최대값으로 생성)
		const sampleData: number[] = [];

		for (let i = 0; i < totalDays; i++) {
			// 랜덤 데이터: 0 (비활성), 1 (낮은 활동), 2 (높은 활동)
			sampleData.push(Math.floor(Math.random() * 3));
		}
		return sampleData;
	};

	const chartData = data || generateSampleData();
	const weekLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	return (
		<S.ChartWrapper>
			<S.WeekLabels>
				{weekLabels.map((label, index) => (
					<S.WeekLabel key={index}>{label}</S.WeekLabel>
				))}
			</S.WeekLabels>

			<S.GridContainer>
				{chartData.map((dayValue, index) => (
					<S.DaySquare key={index} $activity={dayValue} title={`Day ${index + 1}, Activity: ${dayValue}`} />
				))}
			</S.GridContainer>
		</S.ChartWrapper>
	);
};

export default SummaryChart;
