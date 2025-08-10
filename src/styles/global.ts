import { css } from '@emotion/react';

import { HEADER_HEIGHT } from '@/constants/layout.constant.ts';

/**
 * Global 적용 스타일
 */
const global = css`
	html {
		font-size: 10px;
		overflow-y: auto;
	}

	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
		font-size: 16px;
		background-color: #0d1117;
		color: #f0f6fc;

		/* Sophisticated background gradient */
		background: linear-gradient(135deg, #0d1117 0%, #1a1e26 15%, #0d1117 40%, #12161f 65%, #0d1117 100%);
		background-attachment: fixed;
		min-height: 100vh;

		/* Subtle pattern overlay */
		&::before {
			content: '';
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image:
				radial-gradient(circle at 25% 25%, rgba(47, 129, 247, 0.02) 0%, transparent 50%),
				radial-gradient(circle at 75% 75%, rgba(56, 139, 253, 0.02) 0%, transparent 50%);
			pointer-events: none;
			z-index: -1;
		}
	}

	main {
		flex: 1;
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
		background-color: rgba(22, 27, 34, 0.95);
		backdrop-filter: blur(10px);
		border: 1px solid #30363d;
		box-shadow:
			0 16px 32px rgba(0, 0, 0, 0.4),
			0 4px 16px rgba(0, 0, 0, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.05);
		height: calc(100dvh - ${HEADER_HEIGHT}px);
		position: relative;

		/* Inner glow effect */
		&::before {
			content: '';
			position: absolute;
			top: -1px;
			left: -1px;
			right: -1px;
			bottom: -1px;
			background: linear-gradient(45deg, rgba(47, 129, 247, 0.1) 0%, transparent 25%, transparent 75%, rgba(56, 139, 253, 0.1) 100%);
			border-radius: 12px;
			z-index: -1;
		}
	}

	input,
	textarea {
		background-color: #21262d;
		border: 1px solid #30363d;
		color: #f0f6fc;
		border-radius: 6px;

		&:focus {
			border-color: #2f81f7;
			box-shadow: 0 0 0 3px rgba(47, 129, 247, 0.1);
			outline: none;
		}

		&[aria-invalid='true'] {
			border-color: #da3633;
			box-shadow: 0 0 0 3px rgba(218, 54, 51, 0.1);
		}

		&::placeholder {
			color: #6e7681;
		}
	}

	.wrapper {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		padding: 0;
	}

	.hidden {
		height: 100vh;
		min-height: 100%;
		overflow: hidden;
		touch-action: none;
	}
`;

export default global;
