import '@emotion/react';

import { ColorsTypes } from '@/styles/color';
import { FontSizeTypes, FontWeightTypes } from '@/styles/font';

declare module '@emotion/react' {
	export interface Theme {
		colors: ColorsTypes;
		fontWeight: FontWeightTypes;
		fontSize: FontSizeTypes;
		scale: ScaleTypes;
	}
}
