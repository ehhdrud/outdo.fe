interface Props {
	iconColor?: string;
	width?: string;
	height?: string;
	onClick?: () => void;
}
const MenuIcon = ({ iconColor = 'white', width = '24', height = '24', onClick }: Props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" onClick={onClick} style={{ cursor: 'pointer' }}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3.20001 4.99995C3.20001 4.55812 3.55818 4.19995 4.00001 4.19995H20C20.4418 4.19995 20.8 4.55812 20.8 4.99995C20.8 5.44178 20.4418 5.79995 20 5.79995H4.00001C3.55818 5.79995 3.20001 5.44178 3.20001 4.99995Z"
			fill={iconColor}
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3.20001 12C3.20001 11.5581 3.55818 11.2 4.00001 11.2L20 11.2C20.4418 11.2 20.8 11.5581 20.8 12C20.8 12.4418 20.4418 12.8 20 12.8L4.00001 12.8C3.55818 12.8 3.20001 12.4418 3.20001 12Z"
			fill={iconColor}
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3.20001 19C3.20001 18.5581 3.55818 18.2 4.00001 18.2L20 18.2C20.4418 18.2 20.8 18.5581 20.8 19C20.8 19.4418 20.4418 19.8 20 19.8L4.00001 19.8C3.55818 19.8 3.20001 19.4418 3.20001 19Z"
			fill={iconColor}
		/>
	</svg>
);

export default MenuIcon;
