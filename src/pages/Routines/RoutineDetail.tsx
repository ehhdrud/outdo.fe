import FormButton from '@/components/common/Form/FormButton/FormButton.tsx';

import * as S from './RoutineDetail.style.ts';

const RoutineDetail = () => {
	const example = () => {};

	return (
		<S.RoutineDetailWrapper>
			<div></div>
			<div></div>
			<S.ButtonWrapper>
				<FormButton size="small" type="submit" fullWidth>
					Add workout
				</FormButton>
				<FormButton size="small" variant="secondary" type="submit" fullWidth>
					Cancel routine
				</FormButton>
			</S.ButtonWrapper>
		</S.RoutineDetailWrapper>
	);
};

export default RoutineDetail;
