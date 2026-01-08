export interface ApiResponse<T> {
	success: boolean;
	data: T;
}

export interface ApiError {
	success: false;
	message: string;
	extras?: {
		rs_code?: string;
	};
}

export interface AuthTokens {
	access_token: string;
	refresh_token: string;
}

export interface User {
	user_pk: number;
	email: string;
	name: string;
	bio: string | null;
	google_id: string | null;
}

export interface SigninRequest {
	email: string;
	password: string;
}

export interface SignupRequest {
	email: string;
	password: string;
	name: string;
}

export interface ChangePasswordRequest {
	current_password: string;
	new_password: string;
}

export interface UpdateProfileRequest {
	name?: string;
	bio?: string;
}

export interface RoutineSet {
	routine_day_set_pk?: number;
	set_order: number;
	weight: number | null;
	reps: number;
}

export interface RoutineWorkout {
	routine_day_workout_pk?: number;
	workout_name: string;
	order: number;
	notes: string | null;
	sets: RoutineSet[];
}

export interface RoutineDay {
	routine_day_pk: number;
	session_date: string;
	workouts: RoutineWorkout[];
}

export interface RoutineWorkoutSummary {
	workout_name: string;
	sets_count: number;
	max_weight?: number;
}

export interface Routine {
	routine_pk: number;
	routine_name: string;
	created_at: string;
	updated_at: string;
	latest_session?: RoutineDay;
}

export interface RoutineListItem {
	routine_pk: number;
	routine_name: string;
	workouts: RoutineWorkoutSummary[];
}

export interface CreateRoutineRequest {
	routine_name: string;
	workouts: {
		workout_name: string;
		order?: number;
		notes?: string | null;
		sets: { weight?: number | null; reps: number }[];
	}[];
}

export interface SaveRoutineDayRequest {
	session_date?: string;
	workouts?: {
		workout_name: string;
		order?: number;
		notes?: string | null;
		sets: { weight?: number | null; reps: number }[];
	}[];
}

export interface MaxWeightRecord {
	workout_name: string;
	order: number;
	max_weight: number;
}

export interface DayActivity {
	date: string;
	activity: 0 | 1 | 2;
	routine_name: string | null;
	routine_pk: number | null;
	routine_day_pk: number | null;
	achievement: number | null;
	has_max_weight_achieved: boolean;
	max_weight_records: MaxWeightRecord[] | null;
	is_new_routine: boolean;
}

export interface AchievementWorkout {
	workout_name: string;
	order: number;
	weight_increase: number;
	previous_max_weight: number;
	current_max_weight: number;
}

export interface AchievementDetail {
	date: string;
	routine_name: string;
	routine_pk: number;
	routine_day_pk: number;
	achievement: number;
	workouts: AchievementWorkout[];
}
