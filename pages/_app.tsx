import '@styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from '@components/layouts/Main';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	);
}

export default MyApp;
