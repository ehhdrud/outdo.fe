import { create } from 'zustand';

interface AuthState {
	accessToken: string | null;
	refreshToken: string | null;
	setAccessToken: (token: string) => void;
	setRefreshToken: (token: string) => void;
	getAccessToken: () => string | null;
	getRefreshToken: () => string | null;
	resetToken: () => void;
	isLogin: () => boolean;
}

const getInitialTokens = (): { accessToken: string | null; refreshToken: string | null } => {
	try {
		const tokenData = localStorage.getItem('token');
		return tokenData ? JSON.parse(tokenData) : { accessToken: null, refreshToken: null };
	} catch {
		return { accessToken: null, refreshToken: null };
	}
};

export const useTokenStore = create<AuthState>((set, get) => ({
	...getInitialTokens(),

	setAccessToken: (token: string) => {
		set({ accessToken: token });
		localStorage.setItem('token', JSON.stringify({ ...get(), accessToken: token }));
	},

	setRefreshToken: (token: string) => {
		set({ refreshToken: token });
		localStorage.setItem('token', JSON.stringify({ ...get(), refreshToken: token }));
	},

	getAccessToken: () => get().accessToken,
	getRefreshToken: () => get().refreshToken,

	resetToken: () => {
		set({ accessToken: null, refreshToken: null });
		localStorage.removeItem('token');
	},

	isLogin: () => !!get().accessToken,
}));
