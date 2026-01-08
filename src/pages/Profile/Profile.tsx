import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { userService } from '@/api/user';
import FormButton from '@/components/common/Form/FormButton/FormButton';
import FormInput from '@/components/common/Form/FormInput/FormInput';
import FormTextArea from '@/components/common/Form/FormTextArea/FormTextArea';
import { useToastStore } from '@/store/toastStore';
import { User } from '@/types/api';

import * as S from './Profile.style';

const Profile = () => {
	const navigate = useNavigate();
	const { openToast } = useToastStore();
	const [formData, setFormData] = useState<Pick<User, 'name' | 'email' | 'bio'>>({
		name: '',
		email: '',
		bio: '',
	});
	const [isLoading, setIsLoading] = useState(true);
	const [isSaving, setIsSaving] = useState(false);

	useEffect(() => {
		const fetchProfile = async () => {
			setIsLoading(true);
			try {
				const response = await userService.getProfile();
				if (response.data.success) {
					const { name, email, bio } = response.data.data;
					setFormData({
						name,
						email,
						bio: bio || '',
					});
				}
			} catch (error) {
				console.error('Failed to fetch profile:', error);
				openToast({
					icon: 'alert',
					content: 'Failed to load profile',
					showTime: 3000,
				});
			} finally {
				setIsLoading(false);
			}
		};

		fetchProfile();
	}, [openToast]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleUpdateProfile = async () => {
		setIsSaving(true);
		try {
			const response = await userService.updateProfile({
				name: formData.name,
				bio: formData.bio || undefined,
			});
			if (response.data.success) {
				openToast({
					icon: 'check',
					content: 'Profile updated successfully',
					showTime: 2000,
				});
			}
		} catch (error) {
			console.error('Failed to update profile:', error);
			openToast({
				icon: 'alert',
				content: 'Failed to update profile',
				showTime: 3000,
			});
		} finally {
			setIsSaving(false);
		}
	};

	const handleChangePassword = () => {
		navigate('/profile/change-password');
	};

	if (isLoading) {
		return (
			<S.ProfileWrapper>
				<S.LoadingText>Loading profile...</S.LoadingText>
			</S.ProfileWrapper>
		);
	}

	return (
		<S.ProfileWrapper>
			<S.ProfileForm>
				<FormInput label="Name" type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" required />

				<FormInput label="Email address" type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} disabled required />

				<FormTextArea
					label="Bio"
					id="bio"
					name="bio"
					value={formData.bio || ''}
					onChange={handleInputChange}
					placeholder="Tell us about yourself"
					rows={3}
					maxLength={100}
					showCharCount={true}
				/>

				<S.ButtonWrapper>
					<FormButton type="button" onClick={handleUpdateProfile} disabled={isSaving} fullWidth loading={isSaving ? 'Updating...' : false}>
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
