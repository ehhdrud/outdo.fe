import axios, { AxiosRequestConfig } from 'axios';
import mem from 'mem';

import { useAuthStore } from '@/store/authStore';
import { useToastStore } from '@/store/toastStore';
import { useTokenStore } from '@/store/tokenStore';

const authApi = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL_AUTH,
	headers: {
		Accept: import.meta.env.VITE_ACCEPT,
	},
});

const mainApi = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		Accept: import.meta.env.VITE_ACCEPT,
	},
});

const requestToken = async (refreshToken: string) => {
	try {
		const response = await authApi.post('/renewalToken', {
			refresh_token: refreshToken,
		});
		const accessToken = response.data?.data?.access_token;
		return accessToken;
	} catch (error) {
		if (axios.isAxiosError(error) && error.code !== 'ERR_NETWORK') {
			const { openToast } = useToastStore();

			openToast({
				icon: 'alert',
				content: '토큰 오류',
				subContent: '보안을 위해 다시 로그인해주세요.',
				showTime: 3000,
			});
			window.location.href = '/';
		}
	}
};

const requestTokenMem = mem(requestToken, { maxAge: 1000 });

mainApi.interceptors.request.use(
	(request) => {
		const tokenStore = useTokenStore.getState();
		const token = tokenStore.getAccessToken();
		request.headers.Authorization = token ? `Bearer ${token}` : null;
		return request;
	},
	(error) => Promise.reject(error)
);

mainApi.interceptors.response.use(
	async (response) => response,
	async (error) => {
		const toastStore = useToastStore.getState();

		if (error.response?.status === 401) {
			const tokenStore = useTokenStore.getState();
			const authStore = useAuthStore.getState();

			try {
				const accessToken = await requestTokenMem(tokenStore.getRefreshToken() ?? '');

				if (accessToken) {
					error.config.headers.Authorization = `Bearer ${accessToken}`;
					return mainApi(error.config);
				} else {
					throw new Error('Token refresh failed');
				}
			} catch (err) {
				toastStore.openToast({
					icon: 'alert',
					content: '로그인 세션이 만료되었습니다.',
					subContent: '보안을 위해 다시 로그인해주세요.',
					showTime: 3000,
				});
				authStore.clearValues();
				tokenStore.resetToken();
				window.location.href = '/auth';
				return Promise.reject(err);
			}
		}

		if (error.code === 'ERR_NETWORK') {
			toastStore.openToast({
				icon: 'alert',
				content: '네트워크 연결 에러입니다.',
				showTime: 3000,
			});
		} else if (error.code === 'ERR_BAD_RESPONSE') {
			toastStore.openToast({
				icon: 'alert',
				content: '서버가 응답하지 않습니다.',
				showTime: 3000,
			});
		} else if (error.code === 'ECONNABORTED') {
			toastStore.openToast({
				icon: 'alert',
				content: '올바르지 않은 요청입니다.',
				showTime: 3000,
			});
		} else if (error.code === 'ERR_BAD_REQUEST') {
			toastStore.openToast({
				icon: 'alert',
				content: '올바르지 않은 요청입니다.',
				showTime: 3000,
			});
		} else {
			alert(error.code);
		}

		return Promise.reject(error);
	}
);

export const api = {
	get: <T>(url: string, params?: any, config?: AxiosRequestConfig) => mainApi.get<T>(url, { params, ...config }),
	post: <T>(url: string, data?: any, config?: AxiosRequestConfig) => mainApi.post<T>(url, data, config),
	put: <T>(url: string, data?: any, config?: AxiosRequestConfig) => mainApi.put<T>(url, data, config),
	patch: <T>(url: string, data?: any, config?: AxiosRequestConfig) => mainApi.patch<T>(url, data, config),
	delete: <T>(url: string, params?: any, config?: AxiosRequestConfig) => mainApi.delete<T>(url, { params, ...config }),
};

export const api_auth = {
	get: <T>(url: string, params?: any, config?: AxiosRequestConfig) => authApi.get<T>(url, { params, ...config }),
	post: <T>(url: string, data?: any, config?: AxiosRequestConfig) => authApi.post<T>(url, data, config),
	put: <T>(url: string, data?: any, config?: AxiosRequestConfig) => authApi.put<T>(url, data, config),
	patch: <T>(url: string, data?: any, config?: AxiosRequestConfig) => authApi.patch<T>(url, data, config),
	delete: <T>(url: string, params?: any, config?: AxiosRequestConfig) => authApi.delete<T>(url, { params, ...config }),
};
