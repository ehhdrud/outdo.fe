// SummaryChart용 목데이터 (176-182일, 요일별 동적 생성)
// 최신순으로 배열되어 있음 (인덱스 0이 가장 최신, 마지막이 가장 오래된 데이터)
// 일요일: 176일, 월요일: 177일, ..., 토요일: 182일

export interface DayActivity {
	date: string; // YYYY-MM-DD 형식
	activity: number; // 0: 비활성, 1: 낮은 활동, 2: 높은 활동
}

export const generateMockSummaryData = (customDays?: number): DayActivity[] => {
	const today = new Date();

	// 커스텀 일수가 제공되지 않으면 현재 요일에 따라 동적 계산
	const dayOfWeek = today.getDay(); // 0=일요일, 1=월요일, ..., 6=토요일
	const days = customDays ?? 176 + dayOfWeek; // 176~182일 범위

	const result: DayActivity[] = [];

	for (let i = 0; i < days; i++) {
		const date = new Date(today);
		date.setDate(today.getDate() - i);

		result.push({
			date: date.toISOString().split('T')[0], // 'YYYY-MM-DD' 형식
			activity: Math.floor(Math.random() * 3), // 0~2 랜덤
		});
	}

	return result;
};

export const mockSummaryData = generateMockSummaryData();

// 활동 레벨만 추출한 배열 (기존 컴포넌트와의 호환성)
export const mockActivityLevels = mockSummaryData.map((day) => day.activity);
