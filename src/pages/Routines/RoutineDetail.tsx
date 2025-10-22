import { useEffect, useState } from 'react';

import FormButton from '@/components/common/Form/FormButton/FormButton.tsx';

import NoteModal from './NoteModal';
import * as S from './RoutineDetail.style.ts';

// 각 세트의 상세 정보
interface WorkoutSet {
	id: string; // 고유 식별자 (드래그 앤 드롭 시 필요)
	weight: number; // 무게 (숫자만)
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
					{ id: 'set-1-1', weight: 100, reps: 10 },
					{ id: 'set-1-2', weight: 100, reps: 10 },
					{ id: 'set-1-3', weight: 100, reps: 10 },
				],
			},
			{
				id: 'workout-2',
				name: 'squat',
				order: 1,
				sets: [
					{ id: 'set-2-1', weight: 80, reps: 8 },
					{ id: 'set-2-2', weight: 80, reps: 8 },
					{ id: 'set-2-3', weight: 80, reps: 8 },
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
			sets: [{ id: `set-${Date.now()}`, weight: 0, reps: 0 }],
		};

		setRoutineDetailData((prev) => ({
			...prev,
			workouts: [...prev.workouts, newWorkout],
		}));
	};
	// Workout 삭제 함수
	const handleDeleteWorkout = (workoutId: string) => {
		setRoutineDetailData((prev) => ({
			...prev,
			workouts: prev.workouts.filter((workout) => workout.id !== workoutId),
		}));
		setOpenMenuWorkoutId(null); // 더보기 메뉴 닫기
	};

	// 더보기 메뉴 상태
	const [openMenuWorkoutId, setOpenMenuWorkoutId] = useState<string | null>(null);
	const toggleMoreMenu = (workoutId: string) => {
		setOpenMenuWorkoutId((prev) => (prev === workoutId ? null : workoutId));
	};

	// 메모 모달 상태
	const [noteModalOpen, setNoteModalOpen] = useState(false);
	const [selectedWorkoutId, setSelectedWorkoutId] = useState<string | null>(null);

	// 외부 클릭 시 메뉴 닫기
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (openMenuWorkoutId) {
				const target = event.target as HTMLElement;
				// 메뉴 내부 클릭은 무시
				if (!target.closest('[data-more-menu]')) {
					setOpenMenuWorkoutId(null);
				}
			}
		};

		if (openMenuWorkoutId) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [openMenuWorkoutId]);

	// 운동 이름 수정 함수
	const handleUpdateWorkoutName = (workoutId: string, newName: string) => {
		setRoutineDetailData((prev) => ({
			...prev,
			workouts: prev.workouts.map((workout) => (workout.id === workoutId ? { ...workout, name: newName } : workout)),
		}));
	};

	// 세트 무게 수정 함수
	const handleUpdateSetWeight = (workoutId: string, setId: string, newWeight: number) => {
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

	// 세트 추가 함수
	const handleAddSet = (workoutId: string) => {
		setRoutineDetailData((prev) => ({
			...prev,
			workouts: prev.workouts.map((workout) =>
				workout.id === workoutId
					? {
							...workout,
							sets: [...workout.sets, { id: `set-${Date.now()}`, weight: 0, reps: 0 }],
						}
					: workout
			),
		}));
	};

	// 메모 모달 열기 함수
	const handleOpenNoteModal = (workoutId: string) => {
		setSelectedWorkoutId(workoutId);
		setNoteModalOpen(true);
		setOpenMenuWorkoutId(null); // 더보기 메뉴 닫기
	};

	// 메모 저장 함수
	const handleSaveNote = (note: string) => {
		if (selectedWorkoutId) {
			setRoutineDetailData((prev) => ({
				...prev,
				workouts: prev.workouts.map((workout) => (workout.id === selectedWorkoutId ? { ...workout, notes: note } : workout)),
			}));
		}
	};

	return (
		<S.RoutineDetailWrapper>
			<S.InfoSection>
				<S.InfoHeader>
					<S.RoutineTitle>{routineDetailData.routine_name}</S.RoutineTitle>
					<FormButton size="small" type="button">
						Save
					</FormButton>
				</S.InfoHeader>
			</S.InfoSection>
			<S.WorkoutSection>
				<S.WorkoutList>
					{routineDetailData.workouts
						.sort((a, b) => a.order - b.order)
						.map((workout) => (
							<S.WorkoutCard key={workout.id}>
								<S.WorkoutHeader>
									<input
										type="text"
										value={workout.name}
										onChange={(e) => handleUpdateWorkoutName(workout.id, e.target.value)}
										style={{
											fontSize: '18px',
											fontWeight: 'bold',
											background: 'transparent',
											border: 'none',
											color: 'white',
											outline: 'none',
										}}
									/>
									<S.MoreButton aria-label="More options" onClick={() => toggleMoreMenu(workout.id)}>
										⋯
									</S.MoreButton>
									{openMenuWorkoutId === workout.id && (
										<S.MoreMenu data-more-menu>
											<S.MoreMenuList>
												<S.MoreMenuItem>
													<button type="button" onClick={() => handleOpenNoteModal(workout.id)}>
														Add note
													</button>
												</S.MoreMenuItem>
												<S.MoreMenuItem>
													<button type="button" onClick={() => handleDeleteWorkout(workout.id)}>
														Delete workout
													</button>
												</S.MoreMenuItem>
											</S.MoreMenuList>
										</S.MoreMenu>
									)}
								</S.WorkoutHeader>
								<div>
									{workout.sets.map((set) => (
										<S.SetRow key={set.id}>
											<S.WeightInputGroup>
												<S.NumberInput
													type="number"
													value={set.weight}
													onChange={(e) => handleUpdateSetWeight(workout.id, set.id, parseInt(e.target.value) || 0)}
												/>
												<span>weight</span>
											</S.WeightInputGroup>
											<span>×</span>
											<S.RepsInputGroup>
												<S.NumberInput
													type="number"
													value={set.reps}
													onChange={(e) => handleUpdateSetReps(workout.id, set.id, parseInt(e.target.value) || 0)}
												/>
												<span>reps</span>
											</S.RepsInputGroup>
										</S.SetRow>
									))}
								</div>
								<FormButton variant="tertiary" size="thin" type="button" fullWidth onClick={() => handleAddSet(workout.id)}>
									Add set
								</FormButton>
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
			<NoteModal
				isOpen={noteModalOpen}
				onClose={() => setNoteModalOpen(false)}
				onSave={handleSaveNote}
				initialNote={selectedWorkoutId ? routineDetailData.workouts.find((w) => w.id === selectedWorkoutId)?.notes || '' : ''}
				workoutName={selectedWorkoutId ? routineDetailData.workouts.find((w) => w.id === selectedWorkoutId)?.name || '' : ''}
			/>
		</S.RoutineDetailWrapper>
	);
};

export default RoutineDetail;
