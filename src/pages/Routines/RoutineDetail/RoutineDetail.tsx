import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { routineService } from '@/api/routine';
import FormButton from '@/components/common/Form/FormButton/FormButton.tsx';
import NoteModal from '@/components/NoteModal/NoteModal';
import { useToastStore } from '@/store/toastStore';

import * as S from './RoutineDetail.style.ts';

interface WorkoutSet {
	set_pk: number;
	weight: number;
	reps: number;
}

interface RoutineWorkoutDetail {
	workout_pk: number;
	workout_name: string;
	sets: WorkoutSet[];
	order: number;
	notes?: string;
}

interface RoutineDetailData {
	routine_pk: number;
	routine_name: string;
	workouts: RoutineWorkoutDetail[];
}

const RoutineDetail = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const { openToast } = useToastStore();
	const [isLoading, setIsLoading] = useState(true);
	const [isSaving, setIsSaving] = useState(false);

	const getInitialData = (): RoutineDetailData => ({
		routine_pk: 0,
		routine_name: 'new workout',
		workouts: [
			{
				workout_pk: Date.now(),
				workout_name: 'New Workout',
				order: 0,
				sets: [{ set_pk: Date.now(), weight: 0, reps: 0 }],
			},
		],
	});

	const [routineDetailData, setRoutineDetailData] = useState<RoutineDetailData>(getInitialData());
	const [openMenuWorkoutId, setOpenMenuWorkoutId] = useState<number | null>(null);
	const [noteModalOpen, setNoteModalOpen] = useState(false);
	const [selectedWorkoutId, setSelectedWorkoutId] = useState<number | null>(null);

	useEffect(() => {
		const fetchRoutineDetail = async () => {
			if (id === 'new') {
				setIsLoading(false);
				return;
			}

			setIsLoading(true);
			try {
				const response = await routineService.getTodaySession(Number(id));
				if (response.data.success) {
					const routineDay = response.data.data;
					setRoutineDetailData({
						routine_pk: Number(id),
						routine_name: routineDay.workouts[0]?.workout_name ? `Routine ${id}` : 'Routine',
						workouts: routineDay.workouts.map((w, index) => ({
							workout_pk: w.routine_day_workout_pk || Date.now() + index,
							workout_name: w.workout_name,
							order: w.order,
							notes: w.notes || undefined,
							sets: w.sets.map((s, sIndex) => ({
								set_pk: s.routine_day_set_pk || Date.now() + sIndex,
								weight: s.weight || 0,
								reps: s.reps,
							})),
						})),
					});
				}
			} catch (error) {
				console.error('Failed to fetch routine detail:', error);
				setRoutineDetailData({
					routine_pk: Number(id),
					routine_name: 'New Routine',
					workouts: [
						{
							workout_pk: Date.now(),
							workout_name: 'New Workout',
							order: 0,
							sets: [{ set_pk: Date.now(), weight: 0, reps: 0 }],
						},
					],
				});
			} finally {
				setIsLoading(false);
			}
		};

		fetchRoutineDetail();
	}, [id]);

	const handleSave = async () => {
		setIsSaving(true);
		try {
			const workoutsData = routineDetailData.workouts.map((w) => ({
				workout_name: w.workout_name,
				order: w.order,
				notes: w.notes || null,
				sets: w.sets.map((s) => ({
					weight: s.weight || null,
					reps: s.reps,
				})),
			}));

			if (id === 'new') {
				const response = await routineService.createRoutine({
					routine_name: routineDetailData.routine_name,
					workouts: workoutsData,
				});
				if (response.data.success) {
					openToast({
						icon: 'check',
						content: 'Routine created successfully',
						showTime: 2000,
					});
					navigate('/routines');
				}
			} else {
				const response = await routineService.saveTodaySession(Number(id), {
					workouts: workoutsData,
				});
				if (response.data.success) {
					openToast({
						icon: 'check',
						content: 'Routine saved successfully',
						showTime: 2000,
					});
				}
			}
		} catch (error) {
			console.error('Failed to save routine:', error);
			openToast({
				icon: 'alert',
				content: 'Failed to save routine',
				showTime: 3000,
			});
		} finally {
			setIsSaving(false);
		}
	};

	const handleCancel = () => {
		navigate('/routines');
	};

	const handleAddWorkout = () => {
		const newWorkout: RoutineWorkoutDetail = {
			workout_pk: Date.now(),
			workout_name: 'New Workout',
			order: routineDetailData.workouts.length,
			sets: [{ set_pk: Date.now(), weight: 0, reps: 0 }],
		};

		setRoutineDetailData((prev) => ({
			...prev,
			workouts: [...prev.workouts, newWorkout],
		}));
	};

	const handleDeleteWorkout = (workoutId: number) => {
		setRoutineDetailData((prev) => ({
			...prev,
			workouts: prev.workouts.filter((workout) => workout.workout_pk !== workoutId),
		}));
		setOpenMenuWorkoutId(null);
	};

	const toggleMoreMenu = (workoutId: number) => {
		setOpenMenuWorkoutId((prev) => (prev === workoutId ? null : workoutId));
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (openMenuWorkoutId) {
				const target = event.target as HTMLElement;
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

	const handleUpdateWorkoutName = (workoutId: number, newName: string) => {
		setRoutineDetailData((prev) => ({
			...prev,
			workouts: prev.workouts.map((workout) => (workout.workout_pk === workoutId ? { ...workout, workout_name: newName } : workout)),
		}));
	};

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

	const handleOpenNoteModal = (workoutId: number) => {
		setSelectedWorkoutId(workoutId);
		setNoteModalOpen(true);
		setOpenMenuWorkoutId(null);
	};

	const handleSaveNote = (note: string) => {
		if (selectedWorkoutId) {
			setRoutineDetailData((prev) => ({
				...prev,
				workouts: prev.workouts.map((workout) => (workout.workout_pk === selectedWorkoutId ? { ...workout, notes: note } : workout)),
			}));
		}
	};

	if (isLoading) {
		return (
			<S.RoutineDetailWrapper>
				<S.LoadingText>Loading routine...</S.LoadingText>
			</S.RoutineDetailWrapper>
		);
	}

	return (
		<S.RoutineDetailWrapper>
			<S.InfoSection>
				<S.InfoHeader>
					<S.RoutineTitle>{routineDetailData.routine_name}</S.RoutineTitle>
					<FormButton size="small" type="button" onClick={handleSave} disabled={isSaving} loading={isSaving ? 'Saving...' : false}>
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
				<FormButton size="small" variant="secondary" type="button" fullWidth onClick={handleCancel}>
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
