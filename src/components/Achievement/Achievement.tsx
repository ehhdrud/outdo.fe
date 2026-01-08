import React from 'react';

import { AchievementDetail } from '@/types/api';

import * as S from './Achievement.style';

interface AchievementProps {
	achievements?: AchievementDetail[];
	isLoading?: boolean;
}

const Achievement: React.FC<AchievementProps> = ({ achievements = [], isLoading = false }) => {
	if (isLoading) {
		return (
			<S.AchievementWrapper>
				<S.EmptyText>Loading achievements...</S.EmptyText>
			</S.AchievementWrapper>
		);
	}

	if (achievements.length === 0) {
		return (
			<S.AchievementWrapper>
				<S.EmptyText>No achievements yet</S.EmptyText>
			</S.AchievementWrapper>
		);
	}

	return (
		<S.AchievementWrapper>
			{achievements.slice(0, 5).map((item, index) => (
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
