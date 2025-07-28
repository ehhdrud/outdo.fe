// components/common/LoadingSpinner/style.ts
import styled from '@emotion/styled';

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(255, 255, 255, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
`;

export const Spinner = styled.div`
	width: 48px;
	height: 48px;
	border: 6px solid #f3f3f3;
	border-top: 6px solid #3498db;
	border-radius: 50%;
	animation: spin 0.8s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
