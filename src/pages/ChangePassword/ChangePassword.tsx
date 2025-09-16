import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormButton from '@/components/common/Form/FormButton/FormButton';
import FormInput from '@/components/common/Form/FormInput/FormInput';

import * as S from './ChangePassword.style';

const ChangePassword = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});
	const [errors, setErrors] = useState({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		if (errors[name as keyof typeof errors]) {
			setErrors((prev) => ({
				...prev,
				[name]: '',
			}));
		}
	};

	const validateForm = () => {
		const newErrors = {
			currentPassword: '',
			newPassword: '',
			confirmPassword: '',
		};

		if (!formData.currentPassword) {
			newErrors.currentPassword = 'Current password is required';
		}

		if (!formData.newPassword) {
			newErrors.newPassword = 'New password is required';
		} else if (formData.newPassword.length < 8) {
			newErrors.newPassword = 'Password must be at least 8 characters';
		}

		if (!formData.confirmPassword) {
			newErrors.confirmPassword = 'Please confirm your new password';
		} else if (formData.newPassword !== formData.confirmPassword) {
			newErrors.confirmPassword = 'Passwords do not match';
		}

		setErrors(newErrors);
		return !Object.values(newErrors).some((error) => error !== '');
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsLoading(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			console.log('Password changed successfully:', formData);
			navigate('/profile');
		} catch (error) {
			console.error('Password change failed:', error);
			setErrors((prev) => ({
				...prev,
				currentPassword: 'Current password is incorrect',
			}));
		} finally {
			setIsLoading(false);
		}
	};

	const handleBackToProfile = () => {
		navigate('/profile');
	};

	return (
		<S.ChangePasswordWrapper>
			<S.ChangePasswordForm onSubmit={handleSubmit}>
				<FormInput
					label="Current password"
					type="password"
					id="currentPassword"
					name="currentPassword"
					value={formData.currentPassword}
					onChange={handleInputChange}
					placeholder="Enter your current password"
					error={errors.currentPassword}
					required
				/>

				<FormInput
					label="New password"
					type="password"
					id="newPassword"
					name="newPassword"
					value={formData.newPassword}
					onChange={handleInputChange}
					placeholder="At least 8 characters"
					error={errors.newPassword}
					required
				/>

				<FormInput
					label="Confirm new password"
					type="password"
					id="confirmPassword"
					name="confirmPassword"
					value={formData.confirmPassword}
					onChange={handleInputChange}
					placeholder="Confirm your new password"
					error={errors.confirmPassword}
					required
				/>

				<S.ButtonWrapper>
					<FormButton type="submit" disabled={isLoading} fullWidth loading={isLoading ? 'Changing password...' : false}>
						Change password
					</FormButton>
				</S.ButtonWrapper>
			</S.ChangePasswordForm>

			<S.BackToProfileLink>
				<S.BackToProfileButton onClick={handleBackToProfile}>Back to profile</S.BackToProfileButton>
			</S.BackToProfileLink>
		</S.ChangePasswordWrapper>
	);
};

export default ChangePassword;
