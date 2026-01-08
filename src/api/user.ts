import { api } from '@/api/index';
import { ApiResponse, UpdateProfileRequest, User } from '@/types/api';

export const userService = {
	getProfile: () => api.get<ApiResponse<User>>('/users/profile'),

	updateProfile: (data: UpdateProfileRequest) => api.patch<ApiResponse<User>>('/users/profile', data),
};
