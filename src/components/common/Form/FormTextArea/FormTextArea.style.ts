import styled from '@emotion/styled';

export const TextAreaGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
`;

export const TextAreaWrapper = styled.div`
	position: relative;
`;

export const Label = styled.label`
	font-size: 14px;
	font-weight: 500;
	color: rgba(255, 255, 255, 0.8);
`;

export const TextArea = styled.textarea`
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.12);
	border-radius: 6px;
	padding: 12px 16px;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.9);
	font-family: inherit;
	resize: none;
	min-height: 72px;
	height: auto;
	line-height: 1.4;
	overflow: hidden;
	width: 100%;
	box-sizing: border-box;
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

export const CharCount = styled.span`
	position: absolute;
	bottom: 8px;
	right: 12px;
	font-size: 11px;
	color: rgba(255, 255, 255, 0.4);
	pointer-events: none;
	user-select: none;
`;
