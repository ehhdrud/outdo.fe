import styled from '@emotion/styled';
export const ModalShareContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 20;
`;

export const ModalShareBox = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	gap: 2.6rem;
	padding: 2rem;
	max-height: 80vh;
	overflow-y: auto;
	background-color: #fff;

	width: min(50rem, calc(100% - 4rem));
`;

export const ModalShareContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;
export const ModalShareHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 2rem;
	.title {
		font-size: ${(props) => props.theme.fontSize.sizeXl};
		font-weight: ${(props) => props.theme.fontWeight.weightSemi};
		color: #212529;
		line-height: 130%;
	}
`;
export const CloseButton = styled.button`
	background-color: #fff;
	border: none;
	cursor: pointer;
`;
