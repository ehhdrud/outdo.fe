interface Props {
	iconColor?: string;
	width?: string;
	height?: string;
}
const LineIcon = ({ iconColor = '#DEE2E6', width = '2', height = '12' }: Props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 2 12" fill="none">
		<path d="M1 0V12" stroke={iconColor} />
	</svg>
);

export default LineIcon;
