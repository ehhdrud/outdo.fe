import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logoSvg from '@/assets/logo.svg';
import FormButton from '@/components/common/Form/FormButton/FormButton';
import FormInput from '@/components/common/Form/FormInput/FormInput';
import FormInputWithButton from '@/components/common/Form/FormInputWithButton/FormInputWithButton';

import * as S from './FindPassword.style';

const FindPassword = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: '',
		verificationCode: '',
		newPassword: '',
		confirmPassword: '',
	});
	const [emailError, setEmailError] = useState('');
	const [verificationError, setVerificationError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isEmailSent, setIsEmailSent] = useState(false);
	const [isCodeVerified, setIsCodeVerified] = useState(false);
	const [isPasswordReset, setIsPasswordReset] = useState(false);
	const [resendTimer, setResendTimer] = useState(0);

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

		if (name === 'email' && emailError) {
			setEmailError('');
		}
		if (name === 'verificationCode' && verificationError) {
			setVerificationError('');
		}
		if ((name === 'newPassword' || name === 'confirmPassword') && passwordError) {
			setPasswordError('');
		}
	};

	const handleSendResetEmail = async () => {
		if (!formData.email) return;

		setIsLoading(true);
		setEmailError('');

		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));

			if (formData.email === 'notfound@example.com') {
				setEmailError('Email address not found');
				return;
			}

			setIsEmailSent(true);
			setResendTimer(60);
			console.log('Reset code sent to:', formData.email);
		} catch (error) {
			setEmailError('Failed to send reset email. Please try again.');
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
			await new Promise((resolve) => setTimeout(resolve, 500));

			if (formData.verificationCode === '123456') {
				setIsCodeVerified(true);
				console.log('Code verified successfully');
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
		if (!formData.newPassword || !formData.confirmPassword) return;

		if (formData.newPassword !== formData.confirmPassword) {
			setPasswordError('Passwords do not match');
		} else {
			setPasswordError('');
		}
	};

	const handleResetPassword = async (e: React.FormEvent) => {
		e.preventDefault();
		if (emailError || verificationError || passwordError) return;

		if (formData.newPassword !== formData.confirmPassword) {
			setPasswordError('Passwords do not match');
			return;
		}

		if (formData.newPassword.length < 8) {
			setPasswordError('Password must be at least 8 characters');
			return;
		}

		setIsLoading(true);

		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));

			setIsPasswordReset(true);
			console.log('Password reset successfully');
		} catch (error) {
			setPasswordError('Failed to reset password. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	const handleResendCode = () => {
		if (resendTimer > 0) return;
		handleSendResetEmail();
	};

	if (isPasswordReset) {
		return (
			<S.FindPasswordWrapper>
				<S.Logo src={logoSvg} alt="OUTDO" onClick={() => navigate('/')} />
				<S.SuccessContainer>
					<S.SuccessIcon>
						<svg viewBox="0 0 24 24" fill="currentColor">
							<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
						</svg>
					</S.SuccessIcon>
					<S.SuccessText>Your password has been reset successfully.</S.SuccessText>
					<S.SuccessText>You can now sign in with your new password.</S.SuccessText>
					<S.BackLink>
						<S.BackLinkButton onClick={() => navigate('/auth')}>Go to sign in</S.BackLinkButton>
					</S.BackLink>
				</S.SuccessContainer>
			</S.FindPasswordWrapper>
		);
	}

	return (
		<S.FindPasswordWrapper>
			<S.Logo src={logoSvg} alt="OUTDO" onClick={() => navigate('/')} />
			<S.FindPasswordForm onSubmit={handleResetPassword}>
				<FormInputWithButton
					label="Email address"
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
					placeholder="Enter your email"
					error={emailError}
					loading={isLoading && !isEmailSent ? 'Checking email and sending code...' : false}
					buttonText={isCodeVerified ? 'Verified' : resendTimer > 0 ? `${resendTimer}s` : 'Send'}
					onButtonClick={handleSendResetEmail}
					buttonDisabled={!formData.email || isLoading || isCodeVerified || resendTimer > 0}
					disabled={isCodeVerified}
					buttonWidth="58px"
					required
				/>

				{isEmailSent && !isCodeVerified && (
					<div>
						<FormInputWithButton
							label="Verification code"
							type="text"
							id="verificationCode"
							name="verificationCode"
							value={formData.verificationCode}
							onChange={handleInputChange}
							placeholder="Enter 6-digit code"
							error={verificationError}
							buttonText="Verify"
							onButtonClick={handleVerifyCode}
							buttonDisabled={!formData.verificationCode || formData.verificationCode.length !== 6 || isLoading}
							buttonWidth="58px"
							maxLength={6}
							required
						/>
						<S.ResendText>
							Didn&apos;t receive the code?{' '}
							<S.ResendButton type="button" onClick={handleResendCode} disabled={resendTimer > 0}>
								{resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend'}
							</S.ResendButton>
						</S.ResendText>
					</div>
				)}

				{isCodeVerified && (
					<>
						<S.SuccessMessage>✅ Code verified! Now set your new password.</S.SuccessMessage>

						<FormInput
							label="New password"
							type="password"
							id="newPassword"
							name="newPassword"
							value={formData.newPassword}
							onChange={handleInputChange}
							onBlur={handlePasswordBlur}
							placeholder="At least 8 characters"
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
							<FormButton type="submit" disabled={!!emailError || !!verificationError || !!passwordError || !isCodeVerified || isLoading} fullWidth>
								{isLoading ? 'Resetting password...' : 'Reset password'}
							</FormButton>
						</S.ButtonWrapper>
					</>
				)}
			</S.FindPasswordForm>

			<S.BackLink>
				Remember your password? <S.BackLinkButton onClick={() => navigate('/auth')}>Back to sign in</S.BackLinkButton>
			</S.BackLink>
		</S.FindPasswordWrapper>
	);
};

export default FindPassword;
