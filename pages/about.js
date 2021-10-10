import Head from 'next/head';
import MainLayout from '../components/MainLayout';

export default function Page() {
	return (
		<MainLayout>
			<Head>
				<title>About us!</title>
				<meta charSet="utf-8" />
			</Head>
			<h1>Page!</h1>
			<p>Writing data!</p>
		</MainLayout>
	);
}
