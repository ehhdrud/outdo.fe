import styled from '@emotion/styled';

export const FindPasswordWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 480px;
	margin: 0 auto;
`;

export const Logo = styled.img`
	height: 40px;
	width: auto;
	margin-bottom: 32px;
	cursor: pointer;
	transition: opacity 0.2s ease;
	-webkit-tap-highlight-color: transparent;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		opacity: 0.6;
	}
`;

export const FindPasswordForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
`;

export const ButtonWrapper = styled.div`
	margin-top: 8px;
`;

export const SuccessMessage = styled.p`
	font-size: 14px;
	color: rgba(63, 185, 80, 0.9);
	margin: 0;
	padding: 12px;
	background: rgba(63, 185, 80, 0.1);
	border: 1px solid rgba(63, 185, 80, 0.2);
	border-radius: 6px;
`;

export const ResendText = styled.p`
	font-size: 12px;
	color: rgba(255, 255, 255, 0.6);
	margin: 8px 0 0 0;
`;

export const ResendButton = styled.button`
	background: none;
	border: none;
	color: #2f81f7;
	font-size: 12px;
	font-weight: 500;
	cursor: pointer;
	transition: color 0.2s ease;
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	&:hover:not(:disabled) {
		color: #1c6cd9;
		text-decoration: underline;
	}

	&:focus {
		outline: none;
		color: #1c6cd9;
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;

export const BackLink = styled.p`
	text-align: center;
	margin: 24px 0 0 0;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.6);
`;

export const BackLinkButton = styled.button`
	background: none;
	border: none;
	color: #2f81f7;
	font-size: 14px;
	font-weight: 500;
	cursor: pointer;
	transition: color 0.2s ease;
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	&:hover {
		color: #1c6cd9;
		text-decoration: underline;
	}

	&:focus {
		outline: none;
		color: #1c6cd9;
	}
`;

export const SuccessContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

export const SuccessIcon = styled.div`
	width: 64px;
	height: 64px;
	border-radius: 50%;
	background: rgba(63, 185, 80, 0.15);
	border: 2px solid rgba(63, 185, 80, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto 24px auto;

	svg {
		width: 32px;
		height: 32px;
		color: rgba(63, 185, 80, 0.9);
	}
`;

export const SuccessTitle = styled.h2`
	font-size: 20px;
	font-weight: 600;
	color: rgba(255, 255, 255, 0.9);
	margin: 0 0 8px 0;
`;

export const SuccessText = styled.p`
	font-size: 14px;
	color: rgba(255, 255, 255, 0.6);
	margin: 4px 0;
	line-height: 1.5;
`;
