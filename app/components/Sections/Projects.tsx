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

			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
				{cardsOfProjects.map(card => (
					<Card key={card.src} {...card} />
				))}
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
				className="flex flex-col justify-between h-80 overflow-y-auto overflow-x-hidden rounded-lg will-change-transform shadow-none group-hover:shadow-elevation group-hover:translate-x-1 group-hover:-translate-y-2 duration-150"
				title={description}
			>
				<div
					className="h-full w-full rounded-md object-none bg-cover bg-pan-right"
					style={{ backgroundImage: `url("${src}")` }}
				/>

				<div className="flex items-center justify-center">
					{demo && (
						<Link
							className="flex justify-center w-full px-6 py-3 rounded-lg duration-200 hover:bg-secondary"
							to={demo}
						>
							Demo
						</Link>
					)}

					<Link
						className="flex justify-center w-full px-6 py-3 rounded-lg duration-200 hover:bg-secondary"
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
 * muse
 * super mario
 * ignite lab
 * this website
 */

const cardsOfProjects: CardProps[] = [
	{
		src: "/projects-screenshots/muse.png",
		description:
			"Muse is the work I'm most proud of, especially because is I did it on my own. It's an Electron + React based app that downloads and plays audio from YouTube. Some of the tech stack used within it are: Typescript, Vite, Stitches, RadixUI, ffmpeg, Zustand, Dprint, Koa, NodeJS.",
		demo: "",
		code: "",
	},
	{
		src: "/projects-screenshots/super-mario-bros.png",
		description:
			"Super Mario Bros is a browser replica of one of the most popular games of all time. Made along a course YouTube video from **. On this, it is replicated the first level of the game, introducing game-making in plain Javascript inside a browser.",
		demo: "",
		code: "",
	},
	{
		src: "/projects-screenshots/ignite-lab.png",
		description:
			"Ignite Lab is a demo one-page website to make an online subscription (to whatever) saving it on an Apollo GraphQl database. It is made using TailwindCSS.",
		demo: "",
		code: "",
	},
	{
		src: "/projects-screenshots/",
		description:
			"This website!! It is made using Remix, TailwindCSS, React, Zustand, Typescript, ESlint.",
		demo: "",
		code: "",
	},
];

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Types:

type CardProps = {
	description: string;
	demo: string;
	code: string;
	src: string;
};
