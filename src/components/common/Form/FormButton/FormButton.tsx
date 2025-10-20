import React from 'react';

import * as S from './FormButton.style';

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
	size?: 'thin' | 'small' | 'medium' | 'large';
	fullWidth?: boolean;
	children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({ variant = 'primary', size = 'medium', fullWidth = false, children, ...buttonProps }) => (
	<S.Button variant={variant} size={size} fullWidth={fullWidth} {...buttonProps}>
		{children}
	</S.Button>
);

export default FormButton;
