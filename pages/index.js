import Link from 'next/link';
import Head from 'next/head';
import MainLayout from '../components/MainLayout';

export default function Index() {
	return (
		<MainLayout>
			<Head>
				<title>Main page!</title>
			</Head>
			<h1>Hello Next!</h1>
			<p>
				<Link href="/about">
					<a>About!</a>
				</Link>
			</p>
			<p>
				<Link href="/posts">
					<a>Post!</a>
				</Link>
			</p>

			<p>Some text about main page!</p>
		</MainLayout>
	);
}
