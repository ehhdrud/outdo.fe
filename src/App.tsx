import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GlobalLoadingController from '@/components/common/LoadingSpinner/GlobalLoadingController';
import LoadingSpinner from '@/components/common/LoadingSpinner/LoadingSpinner';
import Router from '@/router/Router';
import global from '@/styles/global';
import reset from '@/styles/reset';
import theme from '@/styles/theme';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true,
			retry: false,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<div className="wrapper">
					<Global styles={[reset, global]} />
					<Router />
					<GlobalLoadingController />
					<LoadingSpinner />
				</div>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
