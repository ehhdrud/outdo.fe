import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FormButton from '@/components/common/Form/FormButton/FormButton.tsx';
import NoteModal from '@/components/NoteModal/NoteModal';
import { mockRoutineDetailData, RoutineDetailData, RoutineWorkoutDetail } from '@/data/mockRoutineDetailData';

import * as S from './RoutineDetail.style.ts';

const RoutineDetail = () => {
	const { id } = useParams<{ id: string }>();

	// Create initial data based on route
	const getInitialData = (): RoutineDetailData => {
		if (id === 'new') {
			return {
				routine_pk: Date.now(),
				routine_name: 'new workout',
				workouts: [
					{
						workout_pk: Date.now(),
						workout_name: 'New Workout',
						order: 0,
						sets: [{ set_pk: Date.now(), weight: 0, reps: 0 }],
					},
				],
			};
		}
		return mockRoutineDetailData;
	};

	const [routineDetailData, setRoutineDetailData] = useState<RoutineDetailData>(getInitialData());

	// 새로운 운동 추가 함수
	const handleAddWorkout = () => {
		const newWorkout: RoutineWorkoutDetail = {
			workout_pk: Date.now(), // 고유 ID 생성
			workout_name: 'New Workout',
			order: routineDetailData.workouts.length, // 마지막 순서로 추가
			sets: [{ set_pk: Date.now(), weight: 0, reps: 0 }],
		};

		setRoutineDetailData((prev) => ({
			...prev,
			workouts: [...prev.workouts, newWorkout],
		}));
	};
	// Workout 삭제 함수
	const handleDeleteWorkout = (workoutId: number) => {
		setRoutineDetailData((prev) => ({
			...prev,
			workouts: prev.workouts.filter((workout) => workout.workout_pk !== workoutId),
		}));
		setOpenMenuWorkoutId(null); // 더보기 메뉴 닫기
	};

	// 더보기 메뉴 상태
	const [openMenuWorkoutId, setOpenMenuWorkoutId] = useState<number | null>(null);
	const toggleMoreMenu = (workoutId: number) => {
		setOpenMenuWorkoutId((prev) => (prev === workoutId ? null : workoutId));
	};

	// 메모 모달 상태
	const [noteModalOpen, setNoteModalOpen] = useState(false);
	const [selectedWorkoutId, setSelectedWorkoutId] = useState<number | null>(null);

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
	const handleUpdateWorkoutName = (workoutId: number, newName: string) => {
		setRoutineDetailData((prev) => ({
			...prev,
			workouts: prev.workouts.map((workout) => (workout.workout_pk === workoutId ? { ...workout, workout_name: newName } : workout)),
		}));
	};

	// 세트 무게 수정 함수
	const handleUpdateSetWeight = (workoutId: number, setId: number, newWeight: number) => {
		setRoutineDetailData((prev) => ({
			...prev,
			workouts: prev.workouts.map((workout) =>
				workout.workout_pk === workoutId
					? {
							...workout,
							sets: workout.sets.map((set) => (set.set_pk === setId ? { ...set, weight: newWeight } : set)),
						}
					: workout
			),
		}));
	};

	// 세트 반복 횟수 수정 함수
	const handleUpdateSetReps = (workoutId: number, setId: number, newReps: number) => {
		setRoutineDetailData((prev) => ({
			...prev,
			workouts: prev.workouts.map((workout) =>
				workout.workout_pk === workoutId
					? {
							...workout,
							sets: workout.sets.map((set) => (set.set_pk === setId ? { ...set, reps: newReps } : set)),
						}
					: workout
			),
		}));
	};

	// 세트 추가 함수
	const handleAddSet = (workoutId: number) => {
		setRoutineDetailData((prev) => ({
			...prev,
			workouts: prev.workouts.map((workout) =>
				workout.workout_pk === workoutId
					? {
							...workout,
							sets: [...workout.sets, { set_pk: Date.now(), weight: 0, reps: 0 }],
						}
					: workout
			),
		}));
	};

	// 메모 모달 열기 함수
	const handleOpenNoteModal = (workoutId: number) => {
		setSelectedWorkoutId(workoutId);
		setNoteModalOpen(true);
		setOpenMenuWorkoutId(null); // 더보기 메뉴 닫기
	};

	// 메모 저장 함수
	const handleSaveNote = (note: string) => {
		if (selectedWorkoutId) {
			setRoutineDetailData((prev) => ({
				...prev,
				workouts: prev.workouts.map((workout) => (workout.workout_pk === selectedWorkoutId ? { ...workout, notes: note } : workout)),
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
							<S.WorkoutCard key={workout.workout_pk}>
								<S.WorkoutHeader>
									<input
										type="text"
										value={workout.workout_name}
										onChange={(e) => handleUpdateWorkoutName(workout.workout_pk, e.target.value)}
										style={{
											fontSize: '18px',
											fontWeight: 'bold',
											background: 'transparent',
											border: 'none',
											color: 'white',
											outline: 'none',
										}}
									/>
									<S.MoreButton aria-label="More options" onClick={() => toggleMoreMenu(workout.workout_pk)}>
										⋯
									</S.MoreButton>
									{openMenuWorkoutId === workout.workout_pk && (
										<S.MoreMenu data-more-menu>
											<S.MoreMenuList>
												<S.MoreMenuItem>
													<button type="button" onClick={() => handleOpenNoteModal(workout.workout_pk)}>
														Note
													</button>
												</S.MoreMenuItem>
												<S.MoreMenuItem>
													<button type="button" onClick={() => handleDeleteWorkout(workout.workout_pk)}>
														Delete workout
													</button>
												</S.MoreMenuItem>
											</S.MoreMenuList>
										</S.MoreMenu>
									)}
								</S.WorkoutHeader>
								<div>
									{workout.sets.map((set) => (
										<S.SetRow key={set.set_pk}>
											<S.WeightInputGroup>
												<S.NumberInput
													type="number"
													value={set.weight}
													onChange={(e) => handleUpdateSetWeight(workout.workout_pk, set.set_pk, parseInt(e.target.value) || 0)}
												/>
												<span>weight</span>
											</S.WeightInputGroup>
											<span>×</span>
											<S.RepsInputGroup>
												<S.NumberInput
													type="number"
													value={set.reps}
													onChange={(e) => handleUpdateSetReps(workout.workout_pk, set.set_pk, parseInt(e.target.value) || 0)}
												/>
												<span>reps</span>
											</S.RepsInputGroup>
										</S.SetRow>
									))}
								</div>
								<FormButton variant="tertiary" size="thin" type="button" fullWidth onClick={() => handleAddSet(workout.workout_pk)}>
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
				initialNote={selectedWorkoutId ? routineDetailData.workouts.find((w) => w.workout_pk === selectedWorkoutId)?.notes || '' : ''}
				workoutName={selectedWorkoutId ? routineDetailData.workouts.find((w) => w.workout_pk === selectedWorkoutId)?.workout_name || '' : ''}
			/>
		</S.RoutineDetailWrapper>
	);
};

export default RoutineDetail;
