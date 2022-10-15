import { Section } from "#components/Section";
import { Title } from "#components/Title";
import { P } from "#components/P";

import javascriptLogo from "#assets/javascript.svg";
import typescriptLogo from "#assets/typescript.svg";
import tailwindLogo from "#assets/tailwind.svg";
import electronLogo from "#assets/electron.svg";
import githubLogo from "#assets/github.svg";
import reactLogo from "#assets/react.svg";
import htmlLogo from "#assets/html.svg";
import nodeLogo from "#assets/node.svg";
import cssLogo from "#assets/css.svg";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Main function:

export function Experience() {
	return (
		<Section id="Experience">
			<Title title="Experience" />

			<P text="These are some of the technologies I've worked with" />

			<div className="grid w-full grid-cols-1 gap-8 px-12 py-8 text-center md:grid-cols-3 sm:p-0">
				{techs.map(tech => (
					<Card key={tech.src} {...tech} />
				))}
			</div>
		</Section>
	);
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Helper function:

function Card({ src, alt, title, style }: CardProps) {
	return (
		<div
			className={`flex flex-col justify-between will-change-transform shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}
		>
			<img className="w-20 h-20 mx-auto" src={src} alt={alt} />

			<p className="mt-4">{title}</p>
		</div>
	);
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Constants:

const techs: readonly CardProps[] = [
	{
		src: javascriptLogo,
		alt: "Javascript's logo",
		title: "Javascript",
		style: "shadow-[#f7e018]",
	},
	{
		src: tailwindLogo,
		alt: "Tailwind's logo",
		title: "TailwindCSS",
		style: "shadow-[#06b6d4]",
	},
	{
		src: electronLogo,
		alt: "Electron's logo",
		title: "Electron",
		style: "shadow-[#2dd0ed]",
	},
	{
		src: typescriptLogo,
		alt: "Typescript's logo",
		title: "Typescript",
		style: "shadow-[#007acc]",
	},
	{
		src: githubLogo,
		alt: "Github's logo",
		title: "Github",
		style: "shadow-white",
	},
	{
		src: reactLogo,
		alt: "React's logo",
		title: "React",
		style: "shadow-[#61dafb]",
	},
	{
		src: nodeLogo,
		alt: "NodeJS's logo",
		title: "NodeJS",
		style: "shadow-[#64b548]",
	},
	{
		src: htmlLogo,
		alt: "HTML5's logo",
		title: "HTML5",
		style: "shadow-[#e34f26]",
	},
	{ src: cssLogo, alt: "CSS's logo", title: "CSS", style: "shadow-[#1b73ba]" },
];

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Types:

type CardProps = Readonly<{
	style: string;
	title: string;
	src: string;
	alt: string;
}>;
