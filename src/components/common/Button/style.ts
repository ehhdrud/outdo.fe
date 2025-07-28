import styled from '@emotion/styled';

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.colors.primary400};
	padding: 1rem;
	border: none;
	bottom: 3rem;
	right: 3rem;
	width: 6rem;
	height: 6rem;
	border-radius: 0.4rem;
	background: #0a46a3;
	backdrop-filter: blur(7px);
	cursor: pointer;
`;

export const ButtonBox = styled.div`
	position: fixed;
	right: 3rem;
	bottom: 3rem;
	z-index: 99;
`;
