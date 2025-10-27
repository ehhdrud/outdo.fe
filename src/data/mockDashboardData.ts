export interface DayActivity {
	date: string;
	activity: number;
	routine_name: string | null;
	achievement: number | null; // 무게 증가량 (숫자)
}

export const generateMockDashboardData = (customDays?: number): DayActivity[] => {
	const today = new Date();

	const dayOfWeek = today.getDay();
	const days = customDays ?? 176 + dayOfWeek;

	const routines = ['Push', 'Pull', 'Legs'];
	const result: DayActivity[] = [];

	for (let i = 0; i < days; i++) {
		const date = new Date(today);
		date.setDate(today.getDate() - i);

		const activity = Math.floor(Math.random() * 3);
		const routine_name = activity === 0 ? null : routines[Math.floor(Math.random() * routines.length)];
		const achievement = activity === 2 ? Math.floor(Math.random() * 50) + 1 : null;

		result.push({
			date: date.toISOString().split('T')[0],
			activity,
			routine_name,
			achievement,
		});
	}

	return result;
};

export const mockDashboardData = generateMockDashboardData();

export const mockActivityLevels = mockDashboardData.map((day) => day.activity);
