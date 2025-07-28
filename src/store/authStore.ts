import { create } from 'zustand';

interface AuthState {
	pk: string;
	setPk: (pk: string) => void;
	clearValues: () => void;
}

const getInitialValues = (): { pk: string } => {
	try {
		const authData = localStorage.getItem('auth');
		if (authData) {
			const parsed = JSON.parse(authData);
			return {
				pk: parsed.pk || '',
			};
		}
		return { pk: '' };
	} catch (error) {
		console.error('Failed to parse auth data from localStorage:', error);
		return { pk: '' };
	}
};

export const useAuthStore = create<AuthState>((set) => ({
	...getInitialValues(),

	setPk: (pk) => {
		set((state) => {
			const newState = { ...state, pk };
			localStorage.setItem('auth', JSON.stringify(newState));
			return { pk };
		});
	},

	clearValues: () => {
		const resetState = { pk: '' };
		set(resetState);
		localStorage.removeItem('auth');
	},
}));
