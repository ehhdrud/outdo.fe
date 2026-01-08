import { api } from '@/api/index';
import { ApiResponse, CreateRoutineRequest, Routine, RoutineDay, RoutineListItem, SaveRoutineDayRequest } from '@/types/api';

export const routineService = {
	getRoutines: () => api.get<ApiResponse<RoutineListItem[]>>('/routines'),

	getRoutine: (routinePk: number) => api.get<ApiResponse<Routine>>(`/routines/${routinePk}`),

	getTodaySession: (routinePk: number) => api.get<ApiResponse<RoutineDay>>(`/routines/${routinePk}/today`),

	getSessionByDate: (routinePk: number, date: string) => api.get<ApiResponse<RoutineDay>>('/routines/by-date', { routine_pk: routinePk, date }),

	createRoutine: (data: CreateRoutineRequest) => api.post<ApiResponse<Routine>>('/routines', data),

	saveTodaySession: (routinePk: number, data?: SaveRoutineDayRequest) => api.post<ApiResponse<RoutineDay>>(`/routines/${routinePk}/days/today`, data),

	saveSession: (routinePk: number, data: SaveRoutineDayRequest) => api.post<ApiResponse<RoutineDay>>(`/routines/${routinePk}/days`, data),

	updateRoutineName: (routinePk: number, routineName: string) => api.patch<ApiResponse<Routine>>(`/routines/${routinePk}`, { routine_name: routineName }),

	deleteRoutine: (routinePk: number) => api.delete<ApiResponse<unknown>>(`/routines/${routinePk}`),
};
