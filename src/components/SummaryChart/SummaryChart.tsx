import React from 'react';

import { DayActivity } from '@/types/api';

import * as S from './SummaryChart.style';

interface SummaryChartProps {
	activities?: DayActivity[];
	isLoading?: boolean;
}

const SummaryChart: React.FC<SummaryChartProps> = ({ activities = [], isLoading = false }) => {
	const weekLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const chartData = [...activities].reverse();

	if (isLoading) {
		return (
			<S.ChartWrapper>
				<S.WeekLabels>
					{weekLabels.map((label, index) => (
						<S.WeekLabel key={index}>{label}</S.WeekLabel>
					))}
				</S.WeekLabels>
				<S.GridContainer>
					{Array.from({ length: 182 }).map((_, index) => (
						<S.DaySquare key={index} $activity={0} />
					))}
				</S.GridContainer>
			</S.ChartWrapper>
		);
	}

	return (
		<S.ChartWrapper>
			<S.WeekLabels>
				{weekLabels.map((label, index) => (
					<S.WeekLabel key={index}>{label}</S.WeekLabel>
				))}
			</S.WeekLabels>

			<S.GridContainer>
				{chartData.map((dayData, index) => {
					const baseTitle = `${dayData?.date || `Day ${index + 1}`}, Routine: ${dayData?.routine_name || 'Rest'}`;
					const achievementText = dayData?.achievement ? `, Achievement: +${dayData.achievement} weight` : '';

					return <S.DaySquare key={index} $activity={dayData?.activity || 0} title={baseTitle + achievementText} />;
				})}
			</S.GridContainer>
		</S.ChartWrapper>
	);
};

export default SummaryChart;
