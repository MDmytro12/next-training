import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDoucment extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
