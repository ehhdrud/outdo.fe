import { api } from '@/api/index';
import { AchievementDetail, ApiResponse, DayActivity } from '@/types/api';

export const dashboardService = {
	getActivities: (startDate: string, endDate: string) => api.get<ApiResponse<DayActivity[]>>('/dashboard/activities', { startDate, endDate }),

	getAchievements: () => api.get<ApiResponse<AchievementDetail[]>>('/dashboard/achievements'),
};
