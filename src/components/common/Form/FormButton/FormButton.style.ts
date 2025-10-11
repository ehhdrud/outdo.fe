import styled from '@emotion/styled';

interface ButtonProps {
	variant: 'primary' | 'secondary' | 'outline';
	size: 'small' | 'medium' | 'large';
	fullWidth: boolean;
}

const getVariantStyles = (variant: string) => {
	switch (variant) {
		case 'primary':
			return `
				background: #2f81f7;
				border: 1px solid #2f81f7;
				color: #ffffff;

				&:hover:not(:disabled) {
					background: #1c6cd9;
					border-color: #1c6cd9;
					transform: translateY(-1px);
				}

				@media (hover: none) {
					&:active:not(:disabled) {
						transform: none;
						background: #1c6cd9;
					}
				}
			`;
		case 'secondary':
			return `
				background: rgba(255, 255, 255, 0.08);
				border: 1px solid rgba(255, 255, 255, 0.12);
				color: rgba(255, 255, 255, 0.9);

				&:hover:not(:disabled) {
					background: rgba(255, 255, 255, 0.12);
					border-color: rgba(255, 255, 255, 0.18);
					transform: translateY(-1px);
				}

				@media (hover: none) {
					&:active:not(:disabled) {
						transform: none;
						background: rgba(255, 255, 255, 0.05);
					}
				}
			`;
		case 'outline':
			return `
				background: rgba(255, 255, 255, 0.05);
				border: 1px solid rgba(255, 255, 255, 0.12);
				color: rgba(255, 255, 255, 0.9);

				&:hover:not(:disabled) {
					background: rgba(255, 255, 255, 0.08);
					border-color: rgba(255, 255, 255, 0.18);
					transform: translateY(-1px);
				}

				@media (hover: none) {
					&:active:not(:disabled) {
						transform: none;
						background: rgba(255, 255, 255, 0.03);
					}
				}
			`;
		default:
			return '';
	}
};

const getSizeStyles = (size: string) => {
	switch (size) {
		case 'small':
			return `
				font-size: 13px;
				font-weight: 500;
				padding: 8px 12px;
			`;
		case 'medium':
			return `
				font-size: 14px;
				font-weight: 600;
				padding: 12px 16px;
			`;
		case 'large':
			return `
				font-size: 16px;
				font-weight: 600;
				padding: 14px 20px;
			`;
		default:
			return '';
	}
};

export const Button = styled.button<ButtonProps>`
	${({ variant }) => getVariantStyles(variant)}
	${({ size }) => getSizeStyles(size)}
	border-radius: 6px;
	cursor: pointer;
	transition: all 0.2s ease;
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	white-space: nowrap;
	${({ fullWidth }) => fullWidth && 'width: 100%;'}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(47, 129, 247, 0.4);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		transform: none;
	}
`;
