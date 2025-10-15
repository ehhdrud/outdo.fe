import styled from '@emotion/styled';

export const ChangePasswordWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 560px;
	margin: 0 auto;
`;

export const ChangePasswordForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
`;

export const ButtonWrapper = styled.div`
	margin-top: 8px;
`;

export const BackToProfileLink = styled.div`
	text-align: center;
	margin: 24px 0 0 0;
`;

export const BackToProfileButton = styled.button`
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
