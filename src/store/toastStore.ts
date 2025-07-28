import { create } from 'zustand';

export type ToastType = {
	icon?: 'alert' | 'confirm' | string; // 아이콘(alert, confirm, 직접 지정 가능)
	content: string; // 보여줄 문구
	subContent?: string; // 보여줄 서브 문구
	showTime?: number; // 몇 밀리초동안 보일지 설정
	cancelButton?: boolean; // 취소 버튼 여부
	confirmFunc?: () => void; // 확인 버튼 노출 및 클릭 시 후속 동작
	autoNavUrl?: string; // 자동 라우팅 // showTime, subContent와 함께 사용 시 subContent 앞에 showTime 카운트 노출 // 이 경우 subContent에는 이동할 페이지 기입
};

type ToastStore = {
	toast: ToastType | null;
	openToast: (payload: ToastType) => void;
	closeToast: () => void;
	closeAll: () => void;
};

export const useToastStore = create<ToastStore>((set) => ({
	toast: null,
	openToast: (payload) => set({ toast: payload }),
	closeToast: () => set({ toast: null }),
	closeAll: () => set({ toast: null }),
}));
