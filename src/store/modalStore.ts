import { create } from 'zustand';

type ModalState = {
	message: string;
	buttonText?: string;
	isOpen: boolean;
	type?: string;
	payement?: string;
	onConfirm?: () => void;
	showModal: (message: string, type?: string, buttonText?: string, onConfirm?: () => void) => void;
	clickModal: () => void;
	closeModal: () => void;
};

export const useModalStore = create<ModalState>((set, get) => ({
	message: '',
	buttonText: '로그인 하러가기',
	type: '',
	payement: '',
	isOpen: false,
	onConfirm: undefined,
	showModal: (message, type, buttonText = '', onConfirm) => set({ message, type, buttonText, isOpen: true, onConfirm }),
	clickModal: () => {
		const { onConfirm } = get();

		if (onConfirm) {
			onConfirm();
		}

		set({ isOpen: false });
	},
	closeModal: () => set({ isOpen: false, onConfirm: undefined }), // Clear the callback when closing
}));
