import Link from 'next/link';
export default function MainLayout({ children }) {
	return (
		<>
			<nav>
				<Link href="/">
					<a>Main page!</a>
				</Link>
				<Link href="/about">
					<a>About us!</a>
				</Link>
				<Link href="/posts">
					<a>Posts</a>
				</Link>
			</nav>
			<main>{children}</main>
			<style jsx>
				{`
					nav {
						display: flex;
						align-items: center;
						justify-content: space-between;
						background-color: orange;
						margin: 0;
						padding: 40px 100px;
					}

					nav a {
						transition: all linear 0.6s;
						font-weight: 600;
						font-size: 24px;
						text-decoration: none;
						padding: 20px;
						border-radius: 30px;
					}
					nav a:hover {
						background-color: white;
						color: orange;
					}

					main {
						padding: 40px 100px;
						display: flex;
						align-content: center;
						flex: 1;
						flex-direction: column;
						align-text: center;
					}
				`}
			</style>
		</>
	);
}
