import React from 'react';

import { mockDashboardData } from '@/data/mockDashboardData';

import * as S from './Achievement.style';

interface AchievementData {
	date: string;
	routine_name: string;
	achievement: number;
}

const Achievement: React.FC = () => {
	const recentAchievements: AchievementData[] = mockDashboardData
		.filter((day) => day.achievement !== null && day.routine_name !== null)
		.slice(0, 5)
		.map((day) => ({
			date: day.date,
			routine_name: day.routine_name!,
			achievement: day.achievement!,
		}));

	return (
		<S.AchievementWrapper>
			{recentAchievements.map((item, index) => (
				<S.AchievementItem key={index}>
					<S.DateText>{item.date}</S.DateText>
					<S.RoutineText>{item.routine_name}</S.RoutineText>
					<S.AchievementText>+{item.achievement} weight</S.AchievementText>
				</S.AchievementItem>
			))}
		</S.AchievementWrapper>
	);
};

export default Achievement;
