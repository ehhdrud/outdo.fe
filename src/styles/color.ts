export type ColorsTypes = typeof colors;

export const colors = {
	// GitHub 영감 다크 테마 색상
	background: {
		primary: '#0d1117', // 메인 배경 (GitHub 최어두운 색)
		secondary: '#161b22', // 카드/컨테이너 배경
		muted: '#21262d', // 상승된 표면
		overlay: '#1c2128', // 드롭다운/모달 배경
		subtle: '#2d333b', // 은은한 배경
	},

	surface: {
		primary: '#161b22', // 기본 표면 색상
		secondary: '#21262d', // 보조 표면
		muted: '#30363d', // 3차 표면
		border: '#30363d', // 기본 테두리
		borderSubtle: '#21262d', // 은은한 테두리
	},

	text: {
		primary: '#f0f6fc', // 기본 텍스트 (고대비)
		secondary: '#8b949e', // 보조 텍스트 (중간 대비)
		muted: '#6e7681', // 소거된 텍스트 (낮은 대비)
		placeholder: '#6e7681', // 플레이스홀더 텍스트
		inverse: '#0d1117', // 역전 텍스트 (밝은 배경용)
	},

	accent: {
		primary: '#2f81f7', // 기본 액센트 (GitHub 파란색)
		hover: '#388bfd', // 액센트 호버 상태
		muted: '#1f6feb60', // 불투명도가 있는 소거된 액센트
		emphasis: '#1f6feb', // 강조된 액센트
	},

	semantic: {
		success: '#238636', // 성공 녹색
		warning: '#9e6a03', // 경고 주황색
		danger: '#da3633', // 오류 빨간색
		info: '#2f81f7', // 정보 파란색
	},

	// 하위 호환성을 위한 레거시 색상
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
	white: '#f0f6fc',
};
