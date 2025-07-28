import * as S from './style';
const SideButton = () => {
	const scrollToTop = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<S.ButtonBox>
			<S.Button type="button" onClick={scrollToTop}>
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
					<path
						d="M19.6296 21.6496C18.5096 21.6496 17.6096 20.7496 17.6096 19.6296V10.9996C17.6096 7.34961 14.6396 4.38961 10.9996 4.38961C7.35961 4.38961 4.38961 7.35961 4.38961 10.9996V19.6296C4.38961 20.7496 3.48961 21.6496 2.36961 21.6496C1.24961 21.6496 0.349609 20.7496 0.349609 19.6296V10.9996C0.349609 5.12961 5.12961 0.349609 10.9996 0.349609C16.8696 0.349609 21.6496 5.12961 21.6496 10.9996V19.6296C21.6496 20.7496 20.7496 21.6496 19.6296 21.6496Z"
						fill="white"
					/>
				</svg>
			</S.Button>
		</S.ButtonBox>
	);
};

export default SideButton;
