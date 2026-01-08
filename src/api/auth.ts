import { api, api_auth } from '@/api/index';
import { ApiResponse, AuthTokens, ChangePasswordRequest, SigninRequest, SignupRequest } from '@/types/api';

export const authService = {
	signin: (data: SigninRequest) => api_auth.post<ApiResponse<AuthTokens>>('/auth/signin', data),

	signup: (data: SignupRequest) => api_auth.post<ApiResponse<AuthTokens>>('/auth/signup', data),

	renewalToken: (refreshToken: string) => api_auth.post<ApiResponse<{ access_token: string }>>('/auth/renewalToken', { refresh_token: refreshToken }),

	changePassword: (data: ChangePasswordRequest) => api.post<ApiResponse<unknown>>('/auth/changePassword', data),

	getGoogleAuthUrl: () => `${import.meta.env.VITE_BASE_URL_AUTH}/auth/google`,
};
