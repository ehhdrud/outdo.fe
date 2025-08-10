export type ColorsTypes = typeof colors;

export const colors = {
	// GitHub-inspired Dark Theme Colors
	background: {
		primary: '#0d1117', // Main background (GitHub's darkest)
		secondary: '#161b22', // Card/container background
		tertiary: '#21262d', // Elevated surfaces
		overlay: '#1c2128', // Dropdown/modal background
		subtle: '#2d333b', // Subtle backgrounds
	},

	surface: {
		primary: '#161b22', // Primary surface color
		secondary: '#21262d', // Secondary surface
		tertiary: '#30363d', // Tertiary surface
		border: '#30363d', // Default border
		borderSubtle: '#21262d', // Subtle borders
	},

	text: {
		primary: '#f0f6fc', // Primary text (high contrast)
		secondary: '#8b949e', // Secondary text (medium contrast)
		muted: '#6e7681', // Muted text (low contrast)
		placeholder: '#6e7681', // Placeholder text
		inverse: '#0d1117', // Inverse text (on light backgrounds)
	},

	accent: {
		primary: '#2f81f7', // Primary accent (GitHub blue)
		hover: '#388bfd', // Accent hover state
		emphasis: '#1f6feb', // Emphasized accent
		muted: '#1f6feb40', // Muted accent with opacity
	},

	semantic: {
		success: '#238636', // Success green
		warning: '#9e6a03', // Warning orange
		danger: '#da3633', // Error red
		info: '#2f81f7', // Info blue
	},

	// Legacy colors for backward compatibility
	primary50: '#E6F6FF',
	primary100: '#BAE3FF',
	primary200: '#2f81f7',
	primary300: '#47A3F3',
	primary400: '#1f6feb',
	red600: '#da3633',
	gray: '#0d1117',
	gray100: '#21262d',
	gray200: '#8b949e',
	grayMid: '#6e7681',
	grayLight: '#8b949e',
	grayDarker: '#f0f6fc',
};
