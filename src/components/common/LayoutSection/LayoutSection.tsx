import React from 'react';

import * as S from './LayoutSection.style';

interface LayoutSectionProps {
	title?: string;
	children: React.ReactNode;
}

const LayoutSection: React.FC<LayoutSectionProps> = ({ title, children }) => (
	<S.SectionContainer>
		{title && <S.SectionTitle>{title}</S.SectionTitle>}
		<S.SectionContent>{children}</S.SectionContent>
	</S.SectionContainer>
);

export default LayoutSection;
