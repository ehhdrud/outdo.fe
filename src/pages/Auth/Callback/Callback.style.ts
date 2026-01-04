import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spin = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

export const CallbackWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 560px;
	margin: 0 auto;
	min-height: 300px;
`;

export const Logo = styled.img`
	height: 40px;
	width: auto;
	margin-bottom: 32px;
`;

export const LoadingText = styled.p`
	color: rgba(255, 255, 255, 0.7);
	font-size: 16px;
	margin-bottom: 24px;
`;

export const Spinner = styled.div`
	width: 32px;
	height: 32px;
	border: 3px solid rgba(255, 255, 255, 0.1);
	border-top-color: #2f81f7;
	border-radius: 50%;
	animation: ${spin} 0.8s linear infinite;
`;
