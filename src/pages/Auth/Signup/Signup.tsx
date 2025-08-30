import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logoSvg from '@/assets/logo.svg';

import * as S from './Signup.style';

const Signup = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		verificationCode: '',
	});
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [verificationError, setVerificationError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isEmailSent, setIsEmailSent] = useState(false);
	const [isEmailVerified, setIsEmailVerified] = useState(false);
	const [resendTimer, setResendTimer] = useState(0);

	// 재전송 타이머 효과
	useEffect(() => {
		if (resendTimer > 0) {
			const timer = setTimeout(() => {
				setResendTimer(resendTimer - 1);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, [resendTimer]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		// Clear errors when user starts typing
		if (name === 'email' && emailError) {
			setEmailError('');
		}
		if ((name === 'password' || name === 'confirmPassword') && passwordError) {
			setPasswordError('');
		}
		if (name === 'verificationCode' && verificationError) {
			setVerificationError('');
		}
	};

	const handleSendVerificationCode = async () => {
		if (!formData.email) return;

		setIsLoading(true);
		setEmailError('');

		try {
			// TODO: Implement email duplicate check and send verification code
			// Simulated API call
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Simulate duplicate check
			if (formData.email === 'test@example.com') {
				setEmailError('You are already an OUTDO member!');
				return;
			}

			setIsEmailSent(true);
			setResendTimer(60); // 60초 타이머 시작
			console.log('Verification code sent to:', formData.email);
		} catch (error) {
			setEmailError('Failed to send verification code. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	const handleVerifyCode = async () => {
		if (!formData.verificationCode || formData.verificationCode.length !== 6) {
			setVerificationError('Please enter a 6-digit verification code');
			return;
		}

		setIsLoading(true);
		setVerificationError('');

		try {
			// TODO: Implement verification code check
			// Simulated API call
			await new Promise((resolve) => setTimeout(resolve, 500));

			// Simulate verification (123456 is correct code)
			if (formData.verificationCode === '123456') {
				setIsEmailVerified(true);
				console.log('Email verified successfully');
			} else {
				setVerificationError('Invalid verification code');
			}
		} catch (error) {
			setVerificationError('Verification failed. Please try again.');
		} finally {
			setIsLoading(false);
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

	const handleEmailSignup = (e: React.FormEvent) => {
		e.preventDefault();
		if (emailError || passwordError || verificationError) return;

		// 이메일 인증 확인
		if (!isEmailVerified) {
			setVerificationError('Please complete email verification');
			return;
		}

		// Final validation
		if (formData.password !== formData.confirmPassword) {
			setPasswordError('Passwords do not match');
			return;
		}

		if (formData.password.length < 8) {
			setPasswordError('Password must be at least 8 characters');
			return;
		}

		// TODO: Implement email/password signup
		console.log('Email signup:', formData);
	};

	const handleGoogleSignup = () => {
		// TODO: Implement Google OAuth
		console.log('Google signup clicked');
	};

	return (
		<S.SignupWrapper>
			<S.Logo src={logoSvg} alt="OUTDO" onClick={() => navigate('/')} />

			<S.SignupForm onSubmit={handleEmailSignup}>
				<S.InputGroup>
					<S.Label htmlFor="name">Name</S.Label>
					<S.Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" required />
				</S.InputGroup>

				<S.InputGroup>
					<S.Label htmlFor="email">Email address</S.Label>
					<S.EmailInputContainer>
						<S.Input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							placeholder="Enter your email"
							className={emailError ? 'error' : ''}
							disabled={isEmailVerified}
							required
						/>
						<S.SendButton type="button" onClick={handleSendVerificationCode} disabled={!formData.email || isLoading || isEmailVerified || resendTimer > 0}>
							{isEmailVerified ? 'Verified' : resendTimer > 0 ? `${resendTimer}s` : 'Send'}
						</S.SendButton>
					</S.EmailInputContainer>
					{isLoading && <S.LoadingText>Sending verification code...</S.LoadingText>}
					{emailError && (
						<S.ErrorMessage>
							{emailError}
							<S.ErrorAction onClick={() => navigate('/auth')}>Sign in</S.ErrorAction>
						</S.ErrorMessage>
					)}
				</S.InputGroup>

				{isEmailSent && !isEmailVerified && (
					<S.InputGroup>
						<S.Label htmlFor="verificationCode">Verification code</S.Label>
						<S.VerificationInputContainer>
							<S.Input
								type="text"
								id="verificationCode"
								name="verificationCode"
								value={formData.verificationCode}
								onChange={handleInputChange}
								placeholder="Enter 6-digit code"
								className={verificationError ? 'error' : ''}
								maxLength={6}
								required
							/>
							<S.VerifyButton
								type="button"
								onClick={handleVerifyCode}
								disabled={!formData.verificationCode || formData.verificationCode.length !== 6 || isLoading}
							>
								Verify
							</S.VerifyButton>
						</S.VerificationInputContainer>
						{verificationError && <S.ErrorMessage>{verificationError}</S.ErrorMessage>}
					</S.InputGroup>
				)}

				{isEmailVerified && <S.SuccessMessage>✅ Email verification completed</S.SuccessMessage>}

				<S.InputGroup>
					<S.Label htmlFor="password">Password</S.Label>
					<S.Input
						type="password"
						id="password"
						name="password"
						value={formData.password}
						onChange={handleInputChange}
						onBlur={handlePasswordBlur}
						placeholder="At least 8 characters"
						className={passwordError ? 'error' : ''}
						required
					/>
				</S.InputGroup>

				<S.InputGroup>
					<S.Label htmlFor="confirmPassword">Confirm password</S.Label>
					<S.Input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={handleInputChange}
						onBlur={handlePasswordBlur}
						placeholder="Confirm password"
						className={passwordError ? 'error' : ''}
						required
					/>
					{passwordError && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}
				</S.InputGroup>

				<S.SignupButton type="submit" disabled={!!emailError || !!passwordError || !!verificationError || !isEmailVerified || isLoading}>
					Create account
				</S.SignupButton>
			</S.SignupForm>

			<S.Divider>
				<S.DividerText>or</S.DividerText>
			</S.Divider>

			<S.GoogleButton onClick={handleGoogleSignup} type="button">
				<S.GoogleIcon>
					<svg viewBox="0 0 24 24" width="20" height="20">
						<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
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
			</S.GoogleButton>

			<S.SigninLink>
				Already have an account? <S.SigninLinkButton onClick={() => navigate('/auth')}>Sign in</S.SigninLinkButton>
			</S.SigninLink>
		</S.SignupWrapper>
	);
};

export default Signup;
