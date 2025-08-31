import React from 'react';

import FormButton from '@/components/common/Form/FormButton/FormButton';

import * as S from './FormInputWithButton.style';

interface FormInputWithButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
	loading?: boolean | string;
	buttonText: string;
	onButtonClick: () => void;
	buttonDisabled?: boolean;
	buttonWidth?: string;
}

const FormInputWithButton: React.FC<FormInputWithButtonProps> = ({
	label,
	error,
	loading,
	buttonText,
	onButtonClick,
	buttonDisabled,
	buttonWidth,
	...inputProps
}) => (
	<S.InputGroup>
		<S.Label htmlFor={inputProps.id}>{label}</S.Label>
		<S.InputContainer>
			<S.Input {...inputProps} className={error ? 'error' : inputProps.className} />
			<FormButton
				type="button"
				variant="primary"
				size="small"
				onClick={onButtonClick}
				disabled={buttonDisabled}
				fullWidth={false}
				style={buttonWidth ? { width: buttonWidth } : {}}
			>
				{buttonText}
			</FormButton>
		</S.InputContainer>
		{loading && <S.LoadingText>{typeof loading === 'string' ? loading : 'Loading...'}</S.LoadingText>}
		{error && <S.ErrorMessage>{error}</S.ErrorMessage>}
	</S.InputGroup>
);

export default FormInputWithButton;
