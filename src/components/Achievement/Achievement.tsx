import React from 'react';

import * as S from './Achievement.style';
import { mockSummaryData } from '../../data/mockSummaryData';

interface AchievementData {
	date: string;
	routine: string;
	achievement: string;
}

const Achievement: React.FC = () => {
	// mockSummaryData에서 achievement가 있는 최근 5개 추출
	const recentAchievements: AchievementData[] = mockSummaryData
		.filter((day) => day.achievement !== null && day.routine !== null)
		.slice(0, 5)
		.map((day) => ({
			date: day.date,
			routine: day.routine!,
			achievement: day.achievement!,
		}));

	return (
		<S.AchievementWrapper>
			{recentAchievements.map((item, index) => (
				<S.AchievementItem key={index}>
					<S.DateText>{item.date}</S.DateText>
					<S.RoutineText>{item.routine}</S.RoutineText>
					<S.AchievementText>{item.achievement}</S.AchievementText>
				</S.AchievementItem>
			))}
		</S.AchievementWrapper>
	);
};

export default Achievement;
