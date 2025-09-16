import React from 'react';

import * as S from './FormTextArea.style';

interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label: string;
	error?: string;
	loading?: boolean;
	showCharCount?: boolean;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({ label, error, loading, showCharCount, ...textareaProps }) => {
	const currentLength = textareaProps.value?.toString().length || 0;
	const maxLength = textareaProps.maxLength || 0;

	const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
		const textarea = e.currentTarget;
		textarea.style.height = 'auto';
		textarea.style.height = Math.max(textarea.scrollHeight, 72) + 'px';

		if (textareaProps.onInput) {
			textareaProps.onInput(e);
		}
	};

	return (
		<S.TextAreaGroup>
			<S.Label htmlFor={textareaProps.id}>{label}</S.Label>
			<S.TextAreaWrapper>
				<S.TextArea {...textareaProps} className={error ? 'error' : textareaProps.className} onInput={handleInput} />
				{showCharCount && maxLength > 0 && (
					<S.CharCount>
						{currentLength}/{maxLength}
					</S.CharCount>
				)}
			</S.TextAreaWrapper>
			{loading && <S.LoadingText>{typeof loading === 'boolean' ? 'Loading...' : loading}</S.LoadingText>}
			{error && <S.ErrorMessage>{error}</S.ErrorMessage>}
		</S.TextAreaGroup>
	);
};

export default FormTextArea;
