import styled from '@emotion/styled';

export const SectionContainer = styled.div`
	width: 100%;
	padding: 20px;
	background: linear-gradient(135deg, #1a1f2e 0%, #1e2332 100%);
	border: 1px solid #2a3441;
	border-radius: 8px;
	position: relative;
	overflow: hidden;
`;

export const SectionTitle = styled.h3`
	color: #f0f6fc;
	font-size: 16px;
	font-weight: 600;
	margin: 0 0 16px 0;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	letter-spacing: 0.3px;
`;

export const SectionContent = styled.div`
	width: 100%;
	overflow-x: auto;

	&::-webkit-scrollbar {
		height: 6px;
	}

	&::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.03);
		border-radius: 3px;
	}

	&::-webkit-scrollbar-thumb {
		background: #3a4553;
		border-radius: 3px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #4a5563;
	}
`;
