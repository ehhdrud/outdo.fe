interface Props {
	width?: string;
	height?: string;
}
const UserIcon = ({ width = '25', height = '24' }: Props) => (
	<svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<mask id="mask0_4506_11267" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="2" y="2" width="21" height="20">
			<circle cx="12.5" cy="12" r="9.5" fill="#D9D9D9" stroke="white" />
		</mask>
		<g mask="url(#mask0_4506_11267)">
			<circle cx="12.5" cy="12" r="10" fill="D9D9D9" />
			<circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 16.5 5)" fill="white" />
			<path
				d="M4.67696 18.4013C5.31418 17.3631 6.15664 16.4659 7.15273 15.7646L7.44012 15.5623C10.475 13.4256 14.525 13.4256 17.5599 15.5623L17.8304 15.7527C18.8376 16.4618 19.6895 17.3691 20.3339 18.419C20.4336 18.5814 20.4208 18.7889 20.3019 18.9379L20.183 19.087C16.4445 23.7725 9.40836 24.0212 5.34841 19.6112L4.72913 18.9385C4.59356 18.7913 4.57226 18.5719 4.67696 18.4013Z"
				fill="white"
			/>
		</g>
	</svg>
);

export default UserIcon;
