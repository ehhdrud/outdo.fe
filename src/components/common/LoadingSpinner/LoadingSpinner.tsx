import { useLoadingStore } from '@/store/loadingStore';

import * as S from './style';

const LoadingSpinner = () => {
	const { isLoading } = useLoadingStore();

	if (!isLoading) return null;

	return (
		<S.Overlay>
			<S.Spinner />
		</S.Overlay>
	);
};

export default LoadingSpinner;
