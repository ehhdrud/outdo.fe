import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routineService } from '@/api/routine';
import Badge from '@/components/common/Badge/Badge';
import FormButton from '@/components/common/Form/FormButton/FormButton';
import { RoutineListItem } from '@/types/api';

import * as S from './Routines.style.ts';

const Routines = () => {
	const navigate = useNavigate();
	const [routines, setRoutines] = useState<RoutineListItem[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchRoutines = async () => {
			setIsLoading(true);
			try {
				const response = await routineService.getRoutines();
				if (response.data.success) {
					setRoutines(response.data.data);
				}
			} catch (error) {
				console.error('Failed to fetch routines:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchRoutines();
	}, []);

	const handleRoutineClick = (routine: RoutineListItem) => {
		navigate(`/routines/${routine.routine_pk}`);
	};

	const handleKeyDown = (event: React.KeyboardEvent, routine: RoutineListItem) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleRoutineClick(routine);
		}
	};

	const handleAddRoutine = () => {
		navigate('/routines/new');
	};

	if (isLoading) {
		return (
			<S.RoutinesWrapper>
				<S.LoadingText>Loading routines...</S.LoadingText>
			</S.RoutinesWrapper>
		);
	}

	return (
		<S.RoutinesWrapper>
			{routines.length === 0 ? (
				<S.EmptyText>No routines yet. Create your first routine!</S.EmptyText>
			) : (
				routines.map((routine) => (
					<S.RoutineCard
						key={routine.routine_pk}
						role="button"
						tabIndex={0}
						aria-label={`${routine.routine_name} routine with ${routine.workouts.length} exercises`}
						onClick={() => handleRoutineClick(routine)}
						onKeyDown={(e) => handleKeyDown(e, routine)}
					>
						<S.RoutineTitle>{routine.routine_name}</S.RoutineTitle>
						<S.WorkoutList>
							{routine.workouts.map((workout, index) => (
								<S.WorkoutItem key={index}>
									<S.WorkoutName>{workout.workout_name}</S.WorkoutName>
									<S.WorkoutMeta>
										<Badge variant="primary" aria-label={`${workout.sets_count} sets`}>
											{workout.sets_count} sets
										</Badge>
										{workout.max_weight && (
											<Badge variant="secondary" aria-label={`max weight ${workout.max_weight}`}>
												{workout.max_weight} weight
											</Badge>
										)}
									</S.WorkoutMeta>
								</S.WorkoutItem>
							))}
						</S.WorkoutList>
					</S.RoutineCard>
				))
			)}
			<FormButton size="small" type="button" fullWidth onClick={handleAddRoutine}>
				Add routine
			</FormButton>
		</S.RoutinesWrapper>
	);
};

export default Routines;
