import * as S from './Badge.style';

interface BadgeProps {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary';
	'aria-label'?: string;
}

const Badge = ({ children, variant = 'primary', 'aria-label': ariaLabel }: BadgeProps) => (
	<S.BadgeWrapper variant={variant} aria-label={ariaLabel}>
		{children}
	</S.BadgeWrapper>
);

export default Badge;
