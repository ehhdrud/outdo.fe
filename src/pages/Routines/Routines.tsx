import { useNavigate } from 'react-router-dom';

import Badge from '@/components/common/Badge/Badge';

import * as S from './Routines.style.ts';

interface Workout {
	name: string;
	sets: number;
	maxWeight?: string;
}

interface Routine {
	pk: number;
	routine: string;
	workouts: Workout[];
}

const Routines = () => {
	const navigate = useNavigate();

	const handleRoutineClick = (routine: Routine) => {
		navigate(`/routines/${routine.pk}`);
	};

	const handleKeyDown = (event: React.KeyboardEvent, routine: Routine) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleRoutineClick(routine);
		}
	};

	const routines: Routine[] = [
		{
			pk: 1,
			routine: 'pull1',
			workouts: [
				{ name: 'pull up', sets: 4, maxWeight: '15kg' },
				{ name: 'lat pulldown', sets: 3, maxWeight: '70kg' },
				{ name: 'seated row', sets: 3, maxWeight: '60kg' },
				{ name: 'barbell row', sets: 3, maxWeight: '80kg' },
				{ name: 'face pull', sets: 3, maxWeight: '25kg' },
				{ name: 'barbell curl', sets: 3, maxWeight: '35kg' },
				{ name: 'hammer curl', sets: 3, maxWeight: '20kg' },
			],
		},
		{
			pk: 2,
			routine: 'push1',
			workouts: [
				{ name: 'bench press', sets: 4, maxWeight: '100kg' },
				{ name: 'incline dumbbell press', sets: 3, maxWeight: '30kg' },
				{ name: 'dips', sets: 3, maxWeight: '20kg' },
				{ name: 'overhead press', sets: 3, maxWeight: '60kg' },
				{ name: 'lateral raise', sets: 4, maxWeight: '12kg' },
				{ name: 'tricep pushdown', sets: 3, maxWeight: '40kg' },
				{ name: 'overhead tricep extension', sets: 3, maxWeight: '25kg' },
			],
		},
		{
			pk: 3,
			routine: 'shoulder1',
			workouts: [
				{ name: 'overhead press', sets: 4, maxWeight: '60kg' },
				{ name: 'lateral raise', sets: 4, maxWeight: '12kg' },
				{ name: 'rear delt fly', sets: 3, maxWeight: '15kg' },
				{ name: 'front raise', sets: 3, maxWeight: '10kg' },
				{ name: 'upright row', sets: 3, maxWeight: '40kg' },
				{ name: 'shrugs', sets: 3, maxWeight: '50kg' },
				{ name: 'face pull', sets: 3, maxWeight: '20kg' },
			],
		},
		{
			pk: 4,
			routine: 'legs',
			workouts: [
				{ name: 'squat', sets: 4, maxWeight: '120kg' },
				{ name: 'romanian deadlift', sets: 3, maxWeight: '100kg' },
				{ name: 'leg press', sets: 3, maxWeight: '200kg' },
				{ name: 'walking lunge', sets: 3, maxWeight: '25kg' },
				{ name: 'leg curl', sets: 3, maxWeight: '45kg' },
				{ name: 'calf raise', sets: 4, maxWeight: '80kg' },
				{ name: 'leg extension', sets: 3, maxWeight: '50kg' },
			],
		},
		{
			pk: 5,
			routine: 'pull2',
			workouts: [
				{ name: 'deadlift', sets: 4, maxWeight: '150kg' },
				{ name: 'wide grip pulldown', sets: 3, maxWeight: '75kg' },
				{ name: 'cable row', sets: 3, maxWeight: '65kg' },
				{ name: 't-bar row', sets: 3, maxWeight: '70kg' },
				{ name: 'reverse fly', sets: 3, maxWeight: '18kg' },
				{ name: 'preacher curl', sets: 3, maxWeight: '30kg' },
				{ name: 'cable curl', sets: 3, maxWeight: '35kg' },
			],
		},
		{
			pk: 6,
			routine: 'push2',
			workouts: [
				{ name: 'incline bench press', sets: 4, maxWeight: '90kg' },
				{ name: 'dumbbell press', sets: 3, maxWeight: '35kg' },
				{ name: 'decline bench press', sets: 3, maxWeight: '95kg' },
				{ name: 'arnold press', sets: 3, maxWeight: '25kg' },
				{ name: 'cable lateral raise', sets: 4, maxWeight: '15kg' },
				{ name: 'close grip bench press', sets: 3, maxWeight: '85kg' },
				{ name: 'diamond pushup', sets: 3 },
			],
		},
		{
			pk: 7,
			routine: 'shoulder2',
			workouts: [
				{ name: 'dumbbell shoulder press', sets: 4, maxWeight: '28kg' },
				{ name: 'side lateral raise', sets: 4, maxWeight: '14kg' },
				{ name: 'bent over lateral raise', sets: 3, maxWeight: '12kg' },
				{ name: 'cable front raise', sets: 3, maxWeight: '18kg' },
				{ name: 'cable upright row', sets: 3, maxWeight: '45kg' },
				{ name: 'barbell shrugs', sets: 3, maxWeight: '60kg' },
				{ name: 'high pull', sets: 3, maxWeight: '55kg' },
			],
		},
	];

	return (
		<S.RoutinesWrapper>
			{routines.map((routine) => (
				<S.RoutineCard
					key={routine.pk}
					role="button"
					tabIndex={0}
					aria-label={`${routine.routine} routine with ${routine.workouts.length} exercises`}
					onClick={() => handleRoutineClick(routine)}
					onKeyDown={(e) => handleKeyDown(e, routine)}
				>
					<S.RoutineTitle>{routine.routine}</S.RoutineTitle>
					<S.WorkoutList>
						{routine.workouts.map((workout, index) => (
							<S.WorkoutItem key={index}>
								<S.WorkoutName>{workout.name}</S.WorkoutName>
								<S.WorkoutMeta>
									<Badge variant="primary" aria-label={`${workout.sets} sets`}>
										{workout.sets} sets
									</Badge>
									{workout.maxWeight && (
										<Badge variant="secondary" aria-label={`max weight ${workout.maxWeight}`}>
											{workout.maxWeight}
										</Badge>
									)}
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
