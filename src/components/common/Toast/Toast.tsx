import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

import { useToastStore } from '@/store/toastStore';

import ToastPortal from './ToastPortal';

const Toast = () => {
	const { toast, closeToast } = useToastStore();
	const [countdown, setCountdown] = useState<number | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (!toast) return;
		if (toast.confirmFunc) return;

		let countdownInterval: ReturnType<typeof setInterval> | undefined;
		let timer: ReturnType<typeof setTimeout>;

		if (toast.autoNavUrl && toast.showTime) {
			const seconds = Math.ceil(toast.showTime / 1000);
			setCountdown(seconds);

			countdownInterval = setInterval(() => {
				setCountdown((prev) => {
					if (prev === null || prev <= 1) {
						if (countdownInterval) clearInterval(countdownInterval);
						return null;
					}
					return prev - 1;
				});
			}, 1000);

			timer = setTimeout(() => {
				closeToast();
				navigate(toast.autoNavUrl!);
			}, toast.showTime);
		} else {
			setCountdown(null);

			if (toast.showTime) {
				timer = setTimeout(() => {
					closeToast();
				}, toast.showTime);
			}
		}

		return () => {
			if (timer) clearTimeout(timer);
			if (countdownInterval) clearInterval(countdownInterval);
		};
	}, [toast, closeToast, navigate]);

	if (!toast) return null;

	return (
		<ToastPortal>
			<ToastOverlay haveConfirmBtn={!!toast.confirmFunc || !!toast.cancelButton}>
				<ToastContainer>
					<ToastBox>
						<ToastContent>
							<ToastDesktopTitle>아우라 딜</ToastDesktopTitle>
							<Content>
								{toast.content}
								<br />
								{`${countdown !== null && toast.subContent ? `${countdown}초 후 ` : ''}${toast.subContent ?? ''}`}
							</Content>
						</ToastContent>
					</ToastBox>
					<ToastButtonBox>
						{toast.confirmFunc && (
							<button
								onClick={() => {
									toast.confirmFunc?.();
									closeToast();
								}}
							>
								확인
							</button>
						)}
						{(toast.cancelButton || toast.confirmFunc) && <button onClick={() => closeToast()}>취소</button>}
					</ToastButtonBox>
				</ToastContainer>
			</ToastOverlay>
		</ToastPortal>
	);
};

export default Toast;

const ToastOverlay = styled.div<{ haveConfirmBtn: boolean }>`
	z-index: 9998;
	position: ${(props) => (props.haveConfirmBtn ? 'fixed' : 'relative')};
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

const ToastContainer = styled.div`
	z-index: 9999;
	position: fixed;
	top: 15%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: calc(100vw - 4rem);
	max-width: 44.9rem;
	border-radius: 4px;
	background-color: #292a2d;
	padding: 1.6rem;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const ToastBox = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 1.2em;
	white-space: nowrap;
`;

const ToastDesktopTitle = styled.div``;

const ToastContent = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	color: #e8eaed;
	font-size: ${(props) => props.theme.fontSize.sizeMd};
	line-height: 1.875rem;
	letter-spacing: 2%;
`;

const Content = styled.p`
	white-space: pre-line;
	line-height: 140%;
`;

const ToastButtonBox = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 0.8rem;
	button {
		display: inline-block;
		padding: 12px 24px;
		background-color: rgba(255, 255, 255, 0.1);
		color: white;
		border-radius: 4px;
		border: none;
		text-align: right;
		cursor: pointer;
	}
`;
