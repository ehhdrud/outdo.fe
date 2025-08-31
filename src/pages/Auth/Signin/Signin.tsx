import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logoSvg from '@/assets/logo.svg';
import FormButton from '@/components/common/Form/FormButton/FormButton';
import FormInput from '@/components/common/Form/FormInput/FormInput';

import * as S from './Signin.style';

const Signin = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleEmailSignin = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Email signin:', formData);
	};

	const handleGoogleSignin = () => {
		console.log('Google signin clicked');
	};

	return (
		<S.SigninWrapper>
			<S.Logo src={logoSvg} alt="OUTDO" onClick={() => navigate('/')} />

			<S.SigninForm onSubmit={handleEmailSignin}>
				<FormInput
					label="Email address"
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
					placeholder="Enter your email"
					required
				/>

				<FormInput
					label="Password"
					type="password"
					id="password"
					name="password"
					value={formData.password}
					onChange={handleInputChange}
					placeholder="Enter your password"
					required
				/>

				<S.ButtonWrapper>
					<FormButton type="submit" fullWidth>
						Sign in
					</FormButton>
				</S.ButtonWrapper>
			</S.SigninForm>

			<S.ForgotPasswordLink>
				<S.ForgotPasswordButton onClick={() => navigate('/auth/find-pw')}>Forgot password?</S.ForgotPasswordButton>
			</S.ForgotPasswordLink>

			<S.Divider>
				<S.DividerText>or</S.DividerText>
			</S.Divider>

			<FormButton variant="outline" onClick={handleGoogleSignin} type="button" fullWidth>
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

			<S.SignupLink>
				Don&apos;t have an account? <S.SignupLinkButton onClick={() => navigate('/auth/sign-up')}>Create account</S.SignupLinkButton>
			</S.SignupLink>
		</S.SigninWrapper>
	);
};

export default Signin;
