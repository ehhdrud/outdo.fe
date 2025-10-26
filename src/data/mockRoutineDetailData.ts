// 각 세트의 상세 정보
export interface WorkoutSet {
	id: string; // 고유 식별자 (드래그 앤 드롭 시 필요)
	weight: number; // 무게 (숫자만)
	reps: number; // 반복 횟수
	completed?: boolean; // 완료 여부 (선택사항)
}

// 각 운동의 정보
export interface Workout {
	workout_pk: string; // 고유 식별자 (드래그 앤 드롭으로 순서 변경 시 필수)
	workout_name: string; // 운동 이름
	sets: WorkoutSet[]; // 세트 배열
	order: number; // 정렬 순서 (드래그 앤 드롭 후 순서 유지)
	notes?: string; // 메모 (선택사항)
}

// 루틴 전체 데이터
export interface RoutineDetailData {
	routine_pk: number;
	routine_name: string;
	workouts: Workout[]; // 운동 배열
}

export const mockRoutineDetailData: RoutineDetailData = {
	routine_pk: 1,
	routine_name: 'Leg',
	workouts: [
		{
			workout_pk: 'workout-1',
			workout_name: 'leg press',
			order: 0,
			sets: [
				{ id: 'set-1-1', weight: 100, reps: 10 },
				{ id: 'set-1-2', weight: 100, reps: 10 },
				{ id: 'set-1-3', weight: 100, reps: 10 },
			],
		},
		{
			workout_pk: 'workout-2',
			workout_name: 'squat',
			order: 1,
			sets: [
				{ id: 'set-2-1', weight: 80, reps: 8 },
				{ id: 'set-2-2', weight: 80, reps: 8 },
				{ id: 'set-2-3', weight: 80, reps: 8 },
			],
		},
	],
};
