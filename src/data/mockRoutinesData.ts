export interface RoutineWorkoutSummary {
	workout_name: string;
	sets_count: number;
	max_weight?: number;
}

export interface Routine {
	routine_pk: number;
	routine_name: string;
	workouts: RoutineWorkoutSummary[];
}

export const mockRoutinesData: Routine[] = [
	{
		routine_pk: 1,
		routine_name: 'pull1',
		workouts: [
			{ workout_name: 'pull up', sets_count: 4, max_weight: 15 },
			{ workout_name: 'lat pulldown', sets_count: 3, max_weight: 70 },
			{ workout_name: 'seated row', sets_count: 3, max_weight: 60 },
			{ workout_name: 'barbell row', sets_count: 3, max_weight: 80 },
			{ workout_name: 'face pull', sets_count: 3, max_weight: 25 },
			{ workout_name: 'barbell curl', sets_count: 3, max_weight: 35 },
			{ workout_name: 'hammer curl', sets_count: 3, max_weight: 20 },
		],
	},
	{
		routine_pk: 2,
		routine_name: 'push1',
		workouts: [
			{ workout_name: 'bench press', sets_count: 4, max_weight: 100 },
			{ workout_name: 'incline dumbbell press', sets_count: 3, max_weight: 30 },
			{ workout_name: 'dips', sets_count: 3, max_weight: 20 },
			{ workout_name: 'overhead press', sets_count: 3, max_weight: 60 },
			{ workout_name: 'lateral raise', sets_count: 4, max_weight: 12 },
			{ workout_name: 'tricep pushdown', sets_count: 3, max_weight: 40 },
			{ workout_name: 'overhead tricep extension', sets_count: 3, max_weight: 25 },
		],
	},
	{
		routine_pk: 3,
		routine_name: 'shoulder1',
		workouts: [
			{ workout_name: 'overhead press', sets_count: 4, max_weight: 60 },
			{ workout_name: 'lateral raise', sets_count: 4, max_weight: 12 },
			{ workout_name: 'rear delt fly', sets_count: 3, max_weight: 15 },
			{ workout_name: 'front raise', sets_count: 3, max_weight: 10 },
			{ workout_name: 'upright row', sets_count: 3, max_weight: 40 },
			{ workout_name: 'shrugs', sets_count: 3, max_weight: 50 },
			{ workout_name: 'face pull', sets_count: 3, max_weight: 20 },
		],
	},
	{
		routine_pk: 4,
		routine_name: 'legs',
		workouts: [
			{ workout_name: 'squat', sets_count: 4, max_weight: 120 },
			{ workout_name: 'romanian deadlift', sets_count: 3, max_weight: 100 },
			{ workout_name: 'leg press', sets_count: 3, max_weight: 200 },
			{ workout_name: 'walking lunge', sets_count: 3, max_weight: 25 },
			{ workout_name: 'leg curl', sets_count: 3, max_weight: 45 },
			{ workout_name: 'calf raise', sets_count: 4, max_weight: 80 },
			{ workout_name: 'leg extension', sets_count: 3, max_weight: 50 },
		],
	},
	{
		routine_pk: 5,
		routine_name: 'pull2',
		workouts: [
			{ workout_name: 'deadlift', sets_count: 4, max_weight: 150 },
			{ workout_name: 'wide grip pulldown', sets_count: 3, max_weight: 75 },
			{ workout_name: 'cable row', sets_count: 3, max_weight: 65 },
			{ workout_name: 't-bar row', sets_count: 3, max_weight: 70 },
			{ workout_name: 'reverse fly', sets_count: 3, max_weight: 18 },
			{ workout_name: 'preacher curl', sets_count: 3, max_weight: 30 },
			{ workout_name: 'cable curl', sets_count: 3, max_weight: 35 },
		],
	},
	{
		routine_pk: 6,
		routine_name: 'push2',
		workouts: [
			{ workout_name: 'incline bench press', sets_count: 4, max_weight: 90 },
			{ workout_name: 'dumbbell press', sets_count: 3, max_weight: 35 },
			{ workout_name: 'decline bench press', sets_count: 3, max_weight: 95 },
			{ workout_name: 'arnold press', sets_count: 3, max_weight: 25 },
			{ workout_name: 'cable lateral raise', sets_count: 4, max_weight: 15 },
			{ workout_name: 'close grip bench press', sets_count: 3, max_weight: 85 },
			{ workout_name: 'diamond pushup', sets_count: 3 },
		],
	},
	{
		routine_pk: 7,
		routine_name: 'shoulder2',
		workouts: [
			{ workout_name: 'dumbbell shoulder press', sets_count: 4, max_weight: 28 },
			{ workout_name: 'side lateral raise', sets_count: 4, max_weight: 14 },
			{ workout_name: 'bent over lateral raise', sets_count: 3, max_weight: 12 },
			{ workout_name: 'cable front raise', sets_count: 3, max_weight: 18 },
			{ workout_name: 'cable upright row', sets_count: 3, max_weight: 45 },
			{ workout_name: 'barbell shrugs', sets_count: 3, max_weight: 60 },
			{ workout_name: 'high pull', sets_count: 3, max_weight: 55 },
		],
	},
];
