import styled from '@emotion/styled';

import { colors } from '@/styles/color';

export const ProfileWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 560px;
	margin: 0 auto;
`;

export const ProfileForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
`;

export const ButtonWrapper = styled.div`
	margin-top: 8px;
`;

export const ChangePasswordLink = styled.div`
	text-align: center;
	margin: 24px 0 0 0;
`;

export const ChangePasswordButton = styled.button`
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

export const LoadingText = styled.p`
	font-size: 14px;
	color: ${colors.text.muted};
	text-align: center;
	padding: 48px 0;
`;
