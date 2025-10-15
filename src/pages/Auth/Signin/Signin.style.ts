import styled from '@emotion/styled';

export const SigninWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 560px;
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

export const SigninForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
`;

export const ButtonWrapper = styled.div`
	margin-top: 8px;
`;

export const ForgotPasswordLink = styled.div`
	text-align: center;
	margin: 16px 0 0 0;
`;

export const ForgotPasswordButton = styled.button`
	background: none;
	border: none;
	color: #2f81f7;
	font-size: 13px;
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

export const Divider = styled.div`
	display: flex;
	align-items: center;
	margin: 24px 0;
	width: 100%;

	&::before {
		content: '';
		flex: 1;
		height: 1px;
		background: #21262d;
		border-radius: 1px;
	}

	&::after {
		content: '';
		flex: 1;
		height: 1px;
		background: #21262d;
		border-radius: 1px;
	}
`;

export const DividerText = styled.span`
	color: rgba(255, 255, 255, 0.5);
	font-size: 12px;
	font-weight: 500;
	padding: 0 12px;
`;

export const GoogleButtonContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	width: 100%;
`;

export const GoogleIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		width: 20px;
		height: 20px;
	}
`;

export const SignupLink = styled.p`
	text-align: center;
	margin: 24px 0 0 0;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.6);
`;

export const SignupLinkButton = styled.button`
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
