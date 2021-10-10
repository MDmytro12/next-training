import MainLayout from '../components/MainLayout';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Posts({ posts }) {
	// const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	async function load() {
	// 		let posts = await fetch('http://localhost:4200/posts');
	// 		posts = await posts.json();
	// 		setPosts(posts);
	// 	}

	// 	load();
	// }, []);

	return (
		<MainLayout>
			<Head>
				<title>Posts page!</title>
			</Head>
			<h1>Posts!</h1>
			<ul>
				{posts.map((item, index) => {
					return (
						<Link key={index} href={`/post/${item.id}`}>
							<a>{item.title}</a>
						</Link>
					);
				})}
			</ul>
			<style jsx>
				{`
					h1 {
						text-align: center;
					}
					ul > a {
						width: 100%;
						padding: 20px 50px;
						background-color: orange;

						color: white;
						font-size: 22px;
						margin-right: 30px;
					}
					ul > a:hover {
						background-color: black;
						color: orange;
						font-weight: 700;
					}
				`}
			</style>
		</MainLayout>
	);
}

Posts.getInitialProps = async () => {
	let posts = await fetch('http://localhost:4200/posts');
	posts = await posts.json();

	return {
		posts,
	};
};
