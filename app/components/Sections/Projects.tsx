import { Section } from "#components/Section";
import { Title } from "#components/Title";
import { Link } from "@remix-run/react";
import { P } from "#components/P";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Main function:

export function Projects() {
	return (
		<Section id="Projects">
			<Title title="Projects" />

			<P text="Check out some of my work here" />

			<div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{cardsOfProjectsJSX}
			</div>
		</Section>
	);
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Helper function:

function Card({ src, description, demo, code }: CardProps) {
	return (
		<div className="group">
			<div
				className="flex flex-col w-full justify-between overflow-x-hidden overflow-y-auto duration-150 rounded-lg shadow-none h-80 will-change-transform group-hover:shadow-elevation group-hover:translate-x-1 group-hover:-translate-y-2"
				title={description}
			>
				<div
					className="object-none w-full h-full bg-cover rounded-md bg-pan-right"
					style={{ backgroundImage: `url("${src}")` }}
				/>

				<div className="flex items-center justify-center">
					{demo && (
						<Link
							className="flex justify-center w-full px-6 py-3 duration-200 rounded-lg hover:bg-secondary"
							to={demo}
						>
							Demo
						</Link>
					)}

					<Link
						className="flex justify-center w-full px-6 py-3 duration-200 rounded-lg hover:bg-secondary"
						to={code}
					>
						Code
					</Link>
				</div>
			</div>
		</div>
	);
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Constants:

/**
 * 1. muse
//  * 2. super mario
 * 3. ignite lab
 * 4. nlw-e-sports
 * 5. remix-jokes
 * 6. nlw-return
 * 7. design-system
 */

const cardsOfProjects: CardProps[] = [
	{
		description:
			"Muse is the work I'm most proud of, especially because I did it on my own. It's an Electron + React-based app that downloads and plays audio from YouTube. Some of the tech stack used within it are Typescript, Vite, Stitches, RadixUI, FFmpeg, Zustand, Dprint, Koa, NodeJS.",
		demo: "https://github.com/Gabriel-Alves-Cunha/muse/releases",
		code: "https://github.com/Gabriel-Alves-Cunha/muse",
		src: "/projects-screenshots/muse.png",
	},
	// {
	// 	description:
	// 		"Super Mario Bros is a browser replica of one of the most popular games of all time. Made along a course YouTube video from **. On this, it is a replica of the first level of the game, introducing game-making in plain Javascript inside a browser.",
	// 	code: "https://github.com/Gabriel-Alves-Cunha/super-mario-bros",
	// 	src: "/projects-screenshots/super-mario-bros.png",
	// 	demo: "",
	// },
	{
		description:
			"Ignite Lab is a demo one-page website to make an online subscription (to whatever) saving it on an Apollo GraphQl database. It is made using TailwindCSS.",
		code: "https://github.com/Gabriel-Alves-Cunha/Ignite-Lab",
		src: "/projects-screenshots/ignite-lab.png",
		demo: "https://ignite-lab-omega.vercel.app/",
	},
	{
		description:
			"NLW E-Sports is a demo project made along Rocketseat's Next Level Week course, englobing a mobile (React Native), web (React) and a server (Node) version, using Prisma to handle an SQLite database. The tech stack includes Typescript, Axios, Vite, Tailwind, Radix UI, Expo, Express, and Vitest.",
		code: "https://github.com/Gabriel-Alves-Cunha/nlw-e-sports",
		src: "/projects-screenshots/nlw-e-sports-web.png",
		demo: "",
	},
	{
		description:
			"Remix Jokes is a tutorial from the Remix website serving as a comprehensive way to get an overview of the primary APIs available in Remix. It is deployed on Vercel with PostgreSQL on a Supabase database, Tailwind, React, Zustand, Typescript, ESlint.",
		code: "https://github.com/Gabriel-Alves-Cunha/remix-jokes",
		src: "/projects-screenshots/remix-jokes.png",
		demo: "https://remix-jokes-lac.vercel.app/",
	},
	{
		description:
			"NLW Return is a little project made with Rocketseat englobing mobile (React Native), server (Node) and web (React). It is a little button on the bottom right corner that you can use to quickly send feedback on something, optionally sending a screenshot of your browser page. Made using Typescript, Prisma, Axios, Headless UI, Vite, Vitest.",
		code: "https://github.com/Gabriel-Alves-Cunha/nlw-return",
		demo: "https://nlw-return-web-umber.vercel.app/",
		src: "/projects-screenshots/nlw-return.png",
	},
	{
		description:
			"Ignite Lab Design System is a project made with Rocketseat englobing Storybook, Figma, React, Tailwind. With this, I learned how to make simple designs on Figma, port them to React with Tailwind tokens, document them on storybook and deploy this doc on Github Pages.",
		code: "https://github.com/Gabriel-Alves-Cunha/design-system/",
		demo: "https://gabriel-alves-cunha.github.io/design-system/",
		src: "/projects-screenshots/design-system.png",
	},
];

////////////////////////////////////////////////

const cardsOfProjectsJSX = cardsOfProjects.map(card => (
	<Card key={card.src} {...card} />
));

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Types:

type CardProps = Readonly<{
	description: string;
	demo: string;
	code: string;
	src: string;
}>;
