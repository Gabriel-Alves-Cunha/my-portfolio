import type { MetaFunction, LinksFunction } from "@remix-run/node";

import {
	ScrollRestoration,
	LiveReload,
	useCatch,
	Scripts,
	Outlet,
	Links,
	Meta,
} from "@remix-run/react";

import { Header } from "#components/Header";

import styles from "./tailwind.css";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Links, Meta and actions:

export const meta: MetaFunction = () => {
	const imgAlt = // limited to 420 chars.
		"Heading saying: 'Hi, there! I'm a Full-Stack Developer', under it: 'Passionate programmer seeking an entry-level full-stack developer position in a reputed company where I can use my educational background to develop my skills. Knowledgeable in user interface, testing, and debugging processes, highly proﬁcient in ReactJS, Javascript, Typescript, NodeJS. I am very eager to start my career and learn among others'.";
	const description =
		"This is the Portfolio of Gabriel Alves Cunha, a Full Stack Developer.";
	const title = "Gabriel's Portfolio";

	return {
		viewport: "width=device-width,initial-scale=1",
		keywords: "web,dev,programming,developer",
		"twitter:card": "summary_large_image",
		"twitter:image": "/twitter:card.png",
		"twitter:description": description,
		// "twitter:creator": "@remix_run",
		"twitter:image:alt": imgAlt,
		"twitter:title": title,
		// "twitter:site": "@remix_run",
		charset: "utf-8",
		description,
		title,
	};
};

////////////////////////////////////////////////

export const links: LinksFunction = () => [
	{
		href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&family=Nunito+Sans:wght@400;700&display=swap",
		rel: "stylesheet",
	},
	{
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
		rel: "preconnect",
	},
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{ rel: "stylesheet", href: styles },
];

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

function Document({ children, title = "Gabriel's Portfolio" }: DocumentProps) {
	return (
		<html lang="en">
			<head>
				<Meta />

				<Links />

				<title>{title}</title>
			</head>

			<body>
				{children}

				<ScrollRestoration />

				<Scripts />

				<LiveReload />
			</body>
		</html>
	);
}

////////////////////////////////////////////////

export default function App() {
	return (
		<Document>
			<Header />

			<main className="min-h-full">
				<Outlet />
			</main>
		</Document>
	);
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Error handlers:

export function ErrorBoundary({ error }: { error: Error }) {
	console.error(error);

	return (
		<Document title="Uh-oh!">
			<div className="error-container">
				<h1>App Error</h1>

				<pre>{error.message}</pre>
			</div>
		</Document>
	);
}

////////////////////////////////////////////////

export function CatchBoundary() {
	const caught = useCatch();

	return (
		<Document title={`${caught.status} ${caught.statusText}`}>
			<div className="error-container">
				<h1>
					{caught.status} {caught.statusText}
				</h1>
			</div>
		</Document>
	);
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Types:

type DocumentProps = Readonly<{ children: React.ReactNode; title?: string }>;
