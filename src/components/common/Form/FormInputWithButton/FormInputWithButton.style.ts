import styled from '@emotion/styled';

export const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
`;

export const Label = styled.label`
	font-size: 14px;
	font-weight: 500;
	color: rgba(255, 255, 255, 0.8);
`;

export const InputContainer = styled.div`
	display: flex;
	gap: 8px;
	align-items: stretch;
`;

export const Input = styled.input`
	flex: 1;
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.12);
	border-radius: 6px;
	padding: 12px 16px;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.9);
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

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		background: rgba(255, 255, 255, 0.03);
	}

	&.error {
		border-color: rgba(248, 81, 73, 0.6);
		box-shadow: 0 0 0 2px rgba(248, 81, 73, 0.2);
	}
`;

export const LoadingText = styled.p`
	font-size: 12px;
	color: rgba(255, 255, 255, 0.6);
	margin: 0;
	font-style: italic;
`;

export const ErrorMessage = styled.p`
	font-size: 12px;
	color: rgba(248, 81, 73, 0.9);
	margin: 0;
`;
