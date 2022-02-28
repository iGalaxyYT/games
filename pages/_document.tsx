import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		const description = "William Hayr's library of video games, catalogued";

		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Krona+One&family=Roboto:wght@400;700&display=swap"
						rel="stylesheet"
					/>

					<meta property="og:title" content="games" />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://games.igalaxy.dev" />
					<meta property="twitter:url" content="https://games.igalaxy.dev" />

					<meta name="description" content={description} />
					<meta property="og:description" content={description} />
					<meta property="twitter:description" content={description} />
					<meta
						name="keywords"
						content="iGalaxy, William, William Hayr, software engineer, game designer, games, video games"
					/>
					<meta name="author" content="William Hayr" />

					<meta name="theme-color" content="#010409" />

					<link
						rel="icon"
						type="image/png"
						href="https://cdn.igalaxy.dev/iGalaxy_new_large.png"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
