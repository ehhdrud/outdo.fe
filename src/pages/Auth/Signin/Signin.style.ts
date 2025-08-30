import styled from '@emotion/styled';

export const SigninWrapper = styled.div`
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

export const SigninForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
`;

export const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
`;

export const Label = styled.label`
	font-size: 14px;
	font-weight: 500;
	color: rgba(255, 255, 255, 0.8);
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const Input = styled.input`
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.12);
	border-radius: 6px;
	padding: 12px 16px;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.9);
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	transition: all 0.2s ease;
	-webkit-tap-highlight-color: transparent;

	&::placeholder {
		color: rgba(255, 255, 255, 0.4);
	}

	&:focus {
		outline: none;
		border-color: rgba(47, 129, 247, 0.6);
		box-shadow: 0 0 0 2px rgba(47, 129, 247, 0.2);
		background: rgba(255, 255, 255, 0.08);
	}

	&:hover {
		border-color: rgba(255, 255, 255, 0.18);
	}
`;

export const SigninButton = styled.button`
	background: #2f81f7;
	border: 1px solid #2f81f7;
	border-radius: 6px;
	color: #ffffff;
	font-size: 14px;
	font-weight: 600;
	padding: 12px 16px;
	cursor: pointer;
	transition: all 0.2s ease;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	margin-top: 8px;
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	&:hover {
		background: #1c6cd9;
		border-color: #1c6cd9;
		transform: translateY(-1px);
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(47, 129, 247, 0.4);
	}

	@media (hover: hover) {
		&:active {
			transform: translateY(0) scale(0.98);
		}
	}

	@media (hover: none) {
		&:active {
			transform: none;
			background: #1c6cd9;
		}
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
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const GoogleButton = styled.button`
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.12);
	border-radius: 6px;
	color: rgba(255, 255, 255, 0.9);
	font-size: 14px;
	font-weight: 500;
	padding: 12px 16px;
	cursor: pointer;
	transition: all 0.2s ease;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	width: 100%;
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	&:hover {
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.18);
		transform: translateY(-1px);
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(47, 129, 247, 0.4);
	}

	@media (hover: hover) {
		&:active {
			transform: translateY(0) scale(0.98);
		}
	}

	@media (hover: none) {
		&:active {
			transform: none;
			background: rgba(255, 255, 255, 0.03);
		}
	}
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
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

export const SignupLinkButton = styled.button`
	background: none;
	border: none;
	color: #2f81f7;
	font-size: 14px;
	font-weight: 500;
	cursor: pointer;
	transition: color 0.2s ease;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
