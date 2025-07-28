interface Props {
	iconColor?: string;
	width?: string;
	height?: string;
	onClose?: () => void;
}
const CloseIcon = ({ iconColor = '#868E96', width = '24', height = '24', onClose }: Props) => (
	<svg onClick={onClose} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}>
		<path d="M6.00017 17.9998L18 6" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M6.00017 6.00017L18 18" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

export default CloseIcon;
