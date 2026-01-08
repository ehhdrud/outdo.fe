import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { authService } from '@/api/auth';
import logoSvg from '@/assets/logo.svg';
import FormButton from '@/components/common/Form/FormButton/FormButton';
import FormInput from '@/components/common/Form/FormInput/FormInput';
import { useToastStore } from '@/store/toastStore';
import { useTokenStore } from '@/store/tokenStore';

import * as S from './Signup.style';

const Signup = () => {
	const navigate = useNavigate();
	const { setAccessToken, setRefreshToken } = useTokenStore();
	const { openToast } = useToastStore();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		if (name === 'email' && emailError) {
			setEmailError('');
		}
		if ((name === 'password' || name === 'confirmPassword') && passwordError) {
			setPasswordError('');
		}
	};

	const handlePasswordBlur = () => {
		if (!formData.password || !formData.confirmPassword) return;

		if (formData.password !== formData.confirmPassword) {
			setPasswordError('Passwords do not match');
		} else {
			setPasswordError('');
		}
	};

	const handleEmailSignup = async (e: React.FormEvent) => {
		e.preventDefault();
		if (emailError || passwordError) return;

		if (formData.password !== formData.confirmPassword) {
			setPasswordError('Passwords do not match');
			return;
		}

		if (formData.password.length < 6) {
			setPasswordError('Password must be at least 6 characters');
			return;
		}

		setIsLoading(true);

		try {
			const response = await authService.signup({
				email: formData.email,
				password: formData.password,
				name: formData.name,
			});

			if (response.data.success) {
				setAccessToken(response.data.data.access_token);
				setRefreshToken(response.data.data.refresh_token);
				openToast({
					icon: 'check',
					content: 'Account created successfully',
					showTime: 2000,
				});
				navigate('/');
			}
		} catch (err) {
			setEmailError('Email already exists or signup failed');
			openToast({
				icon: 'alert',
				content: 'Signup failed',
				subContent: 'Please try again',
				showTime: 3000,
			});
		} finally {
			setIsLoading(false);
		}
	};

	const handleGoogleSignup = () => {
		window.location.href = authService.getGoogleAuthUrl();
	};

	return (
		<S.SignupWrapper>
			<S.Logo src={logoSvg} alt="OUTDO" onClick={() => navigate('/')} />

			<S.SignupForm onSubmit={handleEmailSignup}>
				<FormInput label="Name" type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" required />

				<FormInput
					label="Email address"
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
					placeholder="Enter your email"
					error={emailError}
					required
				/>

				<FormInput
					label="Password"
					type="password"
					id="password"
					name="password"
					value={formData.password}
					onChange={handleInputChange}
					onBlur={handlePasswordBlur}
					placeholder="At least 6 characters"
					error={passwordError}
					required
				/>

				<FormInput
					label="Confirm password"
					type="password"
					id="confirmPassword"
					name="confirmPassword"
					value={formData.confirmPassword}
					onChange={handleInputChange}
					onBlur={handlePasswordBlur}
					placeholder="Confirm password"
					error={passwordError}
					required
				/>

				<S.ButtonWrapper>
					<FormButton type="submit" disabled={!!emailError || !!passwordError || isLoading} fullWidth loading={isLoading ? 'Creating account...' : false}>
						Create account
					</FormButton>
				</S.ButtonWrapper>
			</S.SignupForm>

			<S.Divider>
				<S.DividerText>or</S.DividerText>
			</S.Divider>

			<FormButton variant="outline" onClick={handleGoogleSignup} type="button" fullWidth>
				<S.GoogleButtonContent>
					<S.GoogleIcon>
						<svg viewBox="0 0 24 24" width="20" height="20">
							<path
								fill="#4285F4"
								d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
							/>
							<path
								fill="#34A853"
								d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
							/>
							<path
								fill="#FBBC05"
								d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
							/>
							<path
								fill="#EA4335"
								d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
							/>
						</svg>
					</S.GoogleIcon>
					Continue with Google
				</S.GoogleButtonContent>
			</FormButton>

			<S.SigninLink>
				Already have an account? <S.SigninLinkButton onClick={() => navigate('/auth')}>Sign in</S.SigninLinkButton>
			</S.SigninLink>
		</S.SignupWrapper>
	);
};

export default Signup;
