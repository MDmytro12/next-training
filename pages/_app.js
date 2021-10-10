import '../styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<style jsx global>
				{`
					font-family: 'Robobto';
				`}
			</style>
		</>
	);
}
