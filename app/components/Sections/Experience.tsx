import { Section } from "#components/Section";
import { Title } from "#components/Title";
import { P } from "#components/P";

import javascriptImg from "#assets/javascript.png";
import tailwindImg from "#assets/tailwind.png";
import graphqlImg from "#assets/graphql.png";
import nextJsImg from "#assets/nextjs.png";
import githubImg from "#assets/github.png";
import reactImg from "#assets/react.png";
import htmlImg from "#assets/html.png";
import cssImg from "#assets/css.png";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Main function:

export function Experience() {
	return (
		<Section id="Experience">
			<Title title="Experience" />

			<P text="These are some of the technologies I've worked with" />

			<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:p-0">
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
			className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}
		>
			<img className="w-20 mx-auto" src={src} alt={alt} />

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
		src: javascriptImg,
		alt: "Javascript's logo",
		title: "Javascript",
		style: "shadow-yellow-500",
	},
	{
		src: tailwindImg,
		alt: "Tailwind's logo",
		title: "Tailwind",
		style: "shadow-sky-400",
	},
	{
		src: graphqlImg,
		alt: "Graphql's logo",
		title: "Graphql",
		style: "shadow-pink-400",
	},
	{
		src: nextJsImg,
		alt: "NextJS's logo",
		title: "NextJS",
		style: "shadow-white",
	},
	{
		src: githubImg,
		alt: "Github's logo",
		title: "Github",
		style: "shadow-gray-400",
	},
	{
		src: reactImg,
		alt: "React's logo",
		title: "React",
		style: "shadow-blue-600",
	},
	{
		src: htmlImg,
		alt: "HTML's logo",
		title: "HTML",
		style: "shadow-orange-500",
	},
	{ src: cssImg, alt: "CSS's logo", title: "CSS", style: "shadow-blue-500" },
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
