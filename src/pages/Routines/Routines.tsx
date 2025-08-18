import * as S from './Routines.style.ts';

interface Workout {
	name: string;
	sets: number;
	target?: string; // "8-12", "AMRAP", etc.
}

interface Routine {
	pk: number;
	routine: string;
	workouts: Workout[];
}

const Routines = () => {
	const handleWorkoutClick = (workoutName: string) => {
		// Future: Handle workout interaction (start, edit, etc.)
		console.log(`Clicked on ${workoutName}`);
	};

	const handleKeyDown = (event: React.KeyboardEvent, workoutName: string) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleWorkoutClick(workoutName);
		}
	};

	const routines: Routine[] = [
		{
			pk: 1,
			routine: 'pull1',
			workouts: [
				{ name: 'pull up', sets: 4, target: '8-12' },
				{ name: 'lat pulldown', sets: 3, target: '10-12' },
				{ name: 'seated row', sets: 3, target: '10-12' },
				{ name: 'barbell row', sets: 3, target: '8-10' },
				{ name: 'face pull', sets: 3, target: '12-15' },
				{ name: 'barbell curl', sets: 3, target: '10-12' },
				{ name: 'hammer curl', sets: 3, target: '10-12' },
			],
		},
		{
			pk: 2,
			routine: 'push1',
			workouts: [
				{ name: 'bench press', sets: 4, target: '8-10' },
				{ name: 'incline dumbbell press', sets: 3, target: '10-12' },
				{ name: 'dips', sets: 3, target: '10-15' },
				{ name: 'overhead press', sets: 3, target: '8-10' },
				{ name: 'lateral raise', sets: 4, target: '12-15' },
				{ name: 'tricep pushdown', sets: 3, target: '10-12' },
				{ name: 'overhead tricep extension', sets: 3, target: '10-12' },
			],
		},
		{
			pk: 3,
			routine: 'shoulder1',
			workouts: [
				{ name: 'overhead press', sets: 4, target: '8-10' },
				{ name: 'lateral raise', sets: 4, target: '12-15' },
				{ name: 'rear delt fly', sets: 3, target: '12-15' },
				{ name: 'front raise', sets: 3, target: '12-15' },
				{ name: 'upright row', sets: 3, target: '10-12' },
				{ name: 'shrugs', sets: 3, target: '12-15' },
				{ name: 'face pull', sets: 3, target: '15-20' },
			],
		},
		{
			pk: 4,
			routine: 'legs',
			workouts: [
				{ name: 'squat', sets: 4, target: '8-10' },
				{ name: 'romanian deadlift', sets: 3, target: '10-12' },
				{ name: 'leg press', sets: 3, target: '12-15' },
				{ name: 'walking lunge', sets: 3, target: '12/leg' },
				{ name: 'leg curl', sets: 3, target: '12-15' },
				{ name: 'calf raise', sets: 4, target: '15-20' },
				{ name: 'leg extension', sets: 3, target: '12-15' },
			],
		},
		{
			pk: 5,
			routine: 'pull2',
			workouts: [
				{ name: 'deadlift', sets: 4, target: '5-8' },
				{ name: 'wide grip pulldown', sets: 3, target: '10-12' },
				{ name: 'cable row', sets: 3, target: '10-12' },
				{ name: 't-bar row', sets: 3, target: '8-10' },
				{ name: 'reverse fly', sets: 3, target: '12-15' },
				{ name: 'preacher curl', sets: 3, target: '10-12' },
				{ name: 'cable curl', sets: 3, target: '12-15' },
			],
		},
		{
			pk: 6,
			routine: 'push2',
			workouts: [
				{ name: 'incline bench press', sets: 4, target: '8-10' },
				{ name: 'dumbbell press', sets: 3, target: '10-12' },
				{ name: 'decline bench press', sets: 3, target: '10-12' },
				{ name: 'arnold press', sets: 3, target: '10-12' },
				{ name: 'cable lateral raise', sets: 4, target: '12-15' },
				{ name: 'close grip bench press', sets: 3, target: '8-10' },
				{ name: 'diamond pushup', sets: 3, target: 'AMRAP' },
			],
		},
		{
			pk: 7,
			routine: 'shoulder2',
			workouts: [
				{ name: 'dumbbell shoulder press', sets: 4, target: '8-10' },
				{ name: 'side lateral raise', sets: 4, target: '12-15' },
				{ name: 'bent over lateral raise', sets: 3, target: '12-15' },
				{ name: 'cable front raise', sets: 3, target: '12-15' },
				{ name: 'cable upright row', sets: 3, target: '10-12' },
				{ name: 'barbell shrugs', sets: 3, target: '12-15' },
				{ name: 'high pull', sets: 3, target: '8-10' },
			],
		},
	];

	return (
		<S.RoutinesWrapper>
			{routines.map((routine) => (
				<S.RoutineCard key={routine.pk}>
					<S.RoutineTitle>{routine.routine}</S.RoutineTitle>
					<S.WorkoutList>
						{routine.workouts.map((workout, index) => (
							<S.WorkoutItem
								key={index}
								role="button"
								tabIndex={0}
								aria-label={`${workout.name}, ${workout.sets} sets${workout.target ? `, target ${workout.target} reps` : ''}`}
								onClick={() => handleWorkoutClick(workout.name)}
								onKeyDown={(e) => handleKeyDown(e, workout.name)}
							>
								<S.WorkoutName>{workout.name}</S.WorkoutName>
								<S.WorkoutMeta>
									<S.SetsBadge aria-label={`${workout.sets} sets`}>{workout.sets} sets</S.SetsBadge>
									{workout.target && <S.TargetBadge aria-label={`target ${workout.target} repetitions`}>{workout.target}</S.TargetBadge>}
								</S.WorkoutMeta>
							</S.WorkoutItem>
						))}
					</S.WorkoutList>
				</S.RoutineCard>
			))}
		</S.RoutinesWrapper>
	);
};

export default Routines;
