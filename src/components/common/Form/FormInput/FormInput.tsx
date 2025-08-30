import React from 'react';

import * as S from './FormInput.style';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
	loading?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ label, error, loading, ...inputProps }) => (
	<S.InputGroup>
		<S.Label htmlFor={inputProps.id}>{label}</S.Label>
		<S.Input {...inputProps} className={error ? 'error' : inputProps.className} />
		{loading && <S.LoadingText>{typeof loading === 'boolean' ? 'Loading...' : loading}</S.LoadingText>}
		{error && <S.ErrorMessage>{error}</S.ErrorMessage>}
	</S.InputGroup>
);

export default FormInput;
