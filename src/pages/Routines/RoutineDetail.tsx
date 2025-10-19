import { useState } from 'react';

import FormButton from '@/components/common/Form/FormButton/FormButton.tsx';

import * as S from './RoutineDetail.style.ts';

// 각 세트의 상세 정보
interface WorkoutSet {
	id: string; // 고유 식별자 (드래그 앤 드롭 시 필요)
	weight: string; // 무게 (예: '100kg', 'bodyweight')
	reps: number; // 반복 횟수
	completed?: boolean; // 완료 여부 (선택사항)
}

// 각 운동의 정보
interface Workout {
	id: string; // 고유 식별자 (드래그 앤 드롭으로 순서 변경 시 필수)
	name: string; // 운동 이름
	sets: WorkoutSet[]; // 세트 배열
	order: number; // 정렬 순서 (드래그 앤 드롭 후 순서 유지)
	notes?: string; // 메모 (선택사항)
}

// 루틴 전체 데이터
interface RoutineDetailData {
	routine_name: string;
	workouts: Workout[]; // 운동 배열
}

const RoutineDetail = () => {
	const [routineDetailData, setRoutineDetailData] = useState<RoutineDetailData>({
		routine_name: 'Leg',
		workouts: [
			{
				id: 'workout-1',
				name: 'leg press',
				order: 0,
				sets: [
					{ id: 'set-1-1', weight: '100kg', reps: 10 },
					{ id: 'set-1-2', weight: '100kg', reps: 10 },
					{ id: 'set-1-3', weight: '100kg', reps: 10 },
				],
			},
			{
				id: 'workout-2',
				name: 'squat',
				order: 1,
				sets: [
					{ id: 'set-2-1', weight: '80kg', reps: 8 },
					{ id: 'set-2-2', weight: '80kg', reps: 8 },
					{ id: 'set-2-3', weight: '80kg', reps: 8 },
				],
			},
		],
	});

	// 새로운 운동 추가 함수
	const handleAddWorkout = () => {
		const newWorkout: Workout = {
			id: `workout-${Date.now()}`, // 고유 ID 생성
			name: 'New Workout',
			order: routineDetailData.workouts.length, // 마지막 순서로 추가
			sets: [{ id: `set-${Date.now()}`, weight: '0kg', reps: 0 }],
		};

		setRoutineDetailData((prev) => ({
			...prev,
			workouts: [...prev.workouts, newWorkout],
		}));
	};

	// 운동 이름 수정 함수
	const handleUpdateWorkoutName = (workoutId: string, newName: string) => {
		setRoutineDetailData((prev) => ({
			...prev,
			workouts: prev.workouts.map((workout) => (workout.id === workoutId ? { ...workout, name: newName } : workout)),
		}));
	};

	// 세트 무게 수정 함수
	const handleUpdateSetWeight = (workoutId: string, setId: string, newWeight: string) => {
		setRoutineDetailData((prev) => ({
			...prev,
			workouts: prev.workouts.map((workout) =>
				workout.id === workoutId
					? {
							...workout,
							sets: workout.sets.map((set) => (set.id === setId ? { ...set, weight: newWeight } : set)),
						}
					: workout
			),
		}));
	};

	// 세트 반복 횟수 수정 함수
	const handleUpdateSetReps = (workoutId: string, setId: string, newReps: number) => {
		setRoutineDetailData((prev) => ({
			...prev,
			workouts: prev.workouts.map((workout) =>
				workout.id === workoutId
					? {
							...workout,
							sets: workout.sets.map((set) => (set.id === setId ? { ...set, reps: newReps } : set)),
						}
					: workout
			),
		}));
	};

	return (
		<S.RoutineDetailWrapper>
			<S.InfoSection>
				<S.RoutineTitle>{routineDetailData.routine_name}</S.RoutineTitle>
			</S.InfoSection>
			<S.WorkoutSection>
				<S.WorkoutList>
					{routineDetailData.workouts
						.sort((a, b) => a.order - b.order)
						.map((workout) => (
							<S.WorkoutCard key={workout.id}>
								<input
									type="text"
									value={workout.name}
									onChange={(e) => handleUpdateWorkoutName(workout.id, e.target.value)}
									style={{
										fontSize: '18px',
										fontWeight: 'bold',
										marginBottom: '12px',
										background: 'transparent',
										border: 'none',
										color: 'white',
										outline: 'none',
									}}
								/>
								<div>
									{workout.sets.map((set) => (
										<div key={set.id} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
											<input
												type="text"
												value={set.weight}
												onChange={(e) => handleUpdateSetWeight(workout.id, set.id, e.target.value)}
												style={{
													background: 'transparent',
													border: '1px solid #2a3441',
													borderRadius: '4px',
													padding: '4px 8px',
													color: 'white',
													outline: 'none',
													width: '80px',
												}}
											/>
											<span>×</span>
											<input
												type="number"
												value={set.reps}
												onChange={(e) => handleUpdateSetReps(workout.id, set.id, parseInt(e.target.value) || 0)}
												style={{
													background: 'transparent',
													border: '1px solid #2a3441',
													borderRadius: '4px',
													padding: '4px 8px',
													color: 'white',
													outline: 'none',
													width: '60px',
												}}
											/>
											<span>reps</span>
										</div>
									))}
								</div>
							</S.WorkoutCard>
						))}
				</S.WorkoutList>
			</S.WorkoutSection>
			<S.ButtonWrapper>
				<FormButton size="small" type="button" fullWidth onClick={handleAddWorkout}>
					Add workout
				</FormButton>
				<FormButton size="small" variant="secondary" type="button" fullWidth>
					Cancel routine
				</FormButton>
			</S.ButtonWrapper>
		</S.RoutineDetailWrapper>
	);
};

export default RoutineDetail;
