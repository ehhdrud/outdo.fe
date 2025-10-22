import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(4px);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	padding: 20px;
`;

export const ModalContent = styled.div`
	background: linear-gradient(135deg, #1a1f2e 0%, #1e2332 100%);
	border: 1px solid #2a3441;
	border-radius: 12px;
	width: 100%;
	max-width: 400px;
	max-height: 80vh;
	overflow: hidden;
	box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
`;

export const ModalHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 20px 0 20px;
`;

export const ModalTitle = styled.h3`
	font-size: 18px;
	font-weight: 600;
	color: white;
	margin: 0;
`;

export const CloseButton = styled.button`
	background: transparent;
	border: none;
	color: rgba(255, 255, 255, 0.6);
	font-size: 24px;
	cursor: pointer;
	padding: 4px;
	border-radius: 4px;
	transition: all 0.2s ease;
	line-height: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;

	&:hover {
		background: rgba(255, 255, 255, 0.1);
		color: white;
	}
`;

export const ModalBody = styled.div`
	padding: 20px;
`;

export const ModalFooter = styled.div`
	display: flex;
	gap: 12px;
	padding: 0 20px 20px 20px;
`;
