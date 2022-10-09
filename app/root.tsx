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
	const description = "Read awesome news in the developer space!";
	const title = "Gabriel's Portfolio";

	return {
		// "twitter:image": "https://remix-jokes.lol/social.png",
		viewport: "width=device-width,initial-scale=1",
		keywords: "Hacker,News,Computer,Developer",
		// "twitter:card": "summary_large_image",
		"twitter:description": description,
		// "twitter:creator": "@remix_run",
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

function Document({ children, title = "My Portfolio" }: DocumentProps) {
	return (
		<html lang="en">
			<head>
				<title>{title}</title>

				<Links />

				<Meta />
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
