import reactPlugin from '@vitejs/plugin-react';

import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
// import react from '@vitejs/plugin-react-swc';

export default defineConfig({
	plugins: [reactPlugin(), svgr()],
	esbuild: {
		jsxImportSource: '@emotion/react',
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
