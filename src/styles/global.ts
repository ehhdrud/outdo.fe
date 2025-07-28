import { css } from '@emotion/react';

/**
 * Global 적용 스타일
 */
const global = css`
	html {
		font-size: 10px;
		overflow-y: scroll;
	}

	body {
		font-family: Pretendard, sans-serif;
		font-size: 16px;
	}
	main {
		flex: 1;
	}
	input,
	textarea {
		&[aria-invalid='true'] {
			border: 1px solid #dc2626;
		}
	}
	.wrapper {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}
	.hidden {
		height: 100vh;
		min-height: 100%;
		overflow: hidden;
		touch-action: none;
	}
`;

export default global;
