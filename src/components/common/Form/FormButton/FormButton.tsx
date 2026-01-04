import React from 'react';

import * as S from './FormButton.style';

export interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
	size?: 'thin' | 'small' | 'medium' | 'large';
	fullWidth?: boolean;
	loading?: boolean | string;
	children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({
	variant = 'primary',
	size = 'medium',
	fullWidth = false,
	loading = false,
	children,
	disabled,
	...buttonProps
}) => (
	<S.Button variant={variant} size={size} fullWidth={fullWidth} disabled={disabled || !!loading} {...buttonProps}>
		{loading ? (typeof loading === 'string' ? loading : 'Loading...') : children}
	</S.Button>
);

export default FormButton;
