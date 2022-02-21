import Head from 'next/head';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Quinlan Kildare</title>
				<meta name='description' content='Porfolio Site' />
				<link rel='icon' href='/favicon.svg' />
				<link rel='apple-touch-icon' sizes='180x180' href='%PUBLIC_URL%/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='%PUBLIC_URL%/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='%PUBLIC_URL%/favicon-16x16.png' />
				<link rel='manifest' href='%PUBLIC_URL%/site.webmanifest' />
				<link rel='mask-icon' href='%PUBLIC_URL%/safari-pinned-tab.svg' color='#5bbad5' />
				<meta name='msapplication-TileColor' content='#333333' />
				<meta name='theme-color' content='#333333' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
