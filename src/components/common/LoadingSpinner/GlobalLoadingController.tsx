import { useEffect } from 'react';

import { useIsFetching, useIsMutating } from '@tanstack/react-query';

import { useLoadingStore } from '@/store/loadingStore';

const GlobalLoadingController = () => {
	const isFetching = useIsFetching();
	const isMutating = useIsMutating();
	const { startLoading, stopLoading } = useLoadingStore();

	useEffect(() => {
		if (isFetching > 0 || isMutating > 0) {
			startLoading();
		} else {
			stopLoading();
		}
	}, [isFetching, isMutating]);

	return null;
};

export default GlobalLoadingController;
