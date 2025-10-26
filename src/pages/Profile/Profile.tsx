import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormButton from '@/components/common/Form/FormButton/FormButton';
import FormInput from '@/components/common/Form/FormInput/FormInput';
import FormTextArea from '@/components/common/Form/FormTextArea/FormTextArea';
import { mockProfileData } from '@/data/mockProfileData';

import * as S from './Profile.style';

const Profile = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState(mockProfileData);
	const [isLoading, setIsLoading] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleUpdateProfile = async () => {
		setIsLoading(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log('Profile updated:', formData);
		} catch (error) {
			console.error('Failed to update profile:', error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleChangePassword = () => {
		navigate('/profile/change-password');
	};

	return (
		<S.ProfileWrapper>
			<S.ProfileForm>
				<FormInput label="Name" type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" required />

				<FormInput label="Email address" type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} disabled required />

				<FormTextArea
					label="Bio"
					id="bio"
					name="bio"
					value={formData.bio}
					onChange={handleInputChange}
					placeholder="Tell us about yourself"
					rows={3}
					maxLength={100}
					showCharCount={true}
				/>

				<S.ButtonWrapper>
					<FormButton type="button" onClick={handleUpdateProfile} disabled={isLoading} fullWidth>
						Update profile
					</FormButton>
				</S.ButtonWrapper>
			</S.ProfileForm>

			<S.ChangePasswordLink>
				<S.ChangePasswordButton onClick={handleChangePassword}>Change password</S.ChangePasswordButton>
			</S.ChangePasswordLink>
		</S.ProfileWrapper>
	);
};

export default Profile;
