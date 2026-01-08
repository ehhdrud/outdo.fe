import { useEffect, useState } from 'react';

import { dashboardService } from '@/api/dashboard';
import Achievement from '@/components/Achievement/Achievement';
import LayoutSection from '@/components/common/LayoutSection/LayoutSection';
import SummaryChart from '@/components/SummaryChart/SummaryChart';
import { AchievementDetail, DayActivity } from '@/types/api';

import * as S from './Dashboard.style.ts';

const Dashboard = () => {
	const [activities, setActivities] = useState<DayActivity[]>([]);
	const [achievements, setAchievements] = useState<AchievementDetail[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchDashboardData = async () => {
			setIsLoading(true);

			const today = new Date();
			const dayOfWeek = today.getDay();
			const daysToFetch = 176 + dayOfWeek;

			const startDate = new Date(today);
			startDate.setDate(today.getDate() - daysToFetch);

			const formatDate = (date: Date) => date.toISOString().split('T')[0];

			try {
				const [activitiesRes, achievementsRes] = await Promise.all([
					dashboardService.getActivities(formatDate(startDate), formatDate(today)),
					dashboardService.getAchievements(),
				]);

				if (activitiesRes.data.success) {
					setActivities(activitiesRes.data.data);
				}

				if (achievementsRes.data.success) {
					setAchievements(achievementsRes.data.data);
				}
			} catch (error) {
				console.error('Failed to fetch dashboard data:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchDashboardData();
	}, []);

	return (
		<S.DashboardWrapper>
			<LayoutSection title="Summary">
				<SummaryChart activities={activities} isLoading={isLoading} />
			</LayoutSection>
			<LayoutSection title="Achievement">
				<Achievement achievements={achievements} isLoading={isLoading} />
			</LayoutSection>
		</S.DashboardWrapper>
	);
};

export default Dashboard;
