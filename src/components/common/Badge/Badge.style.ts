import styled from '@emotion/styled';

interface BadgeWrapperProps {
	variant: 'primary' | 'secondary';
}

export const BadgeWrapper = styled.span<BadgeWrapperProps>`
	padding: 2px 6px;
	border-radius: 10px;
	font-size: 10px;
	line-height: 1.2;
	white-space: nowrap;

	${({ variant, theme }) =>
		variant === 'primary'
			? `
				background: rgba(47, 129, 247, 0.15);
				color: rgba(47, 129, 247, 0.9);
				border: 1px solid rgba(47, 129, 247, 0.3);
				font-weight: ${theme.fontWeight.weightMedium};
			`
			: `
				background: rgba(255, 255, 255, 0.08);
				color: rgba(255, 255, 255, 0.6);
				border: 1px solid rgba(255, 255, 255, 0.15);
				font-weight: ${theme.fontWeight.weightRegular};
			`}
`;
