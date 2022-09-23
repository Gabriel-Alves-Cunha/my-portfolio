import javascriptImg from "#assets/javascript.png";
import tailwindImg from "#assets/tailwind.png";
import graphqlImg from "#assets/graphql.png";
import nextJsImg from "#assets/nextjs.png";
import githubImg from "#assets/github.png";
import reactImg from "#assets/react.png";
import htmlImg from "#assets/html.png";
import cssImg from "#assets/css.png";

import { UnderlinedTitle } from "../UnderlinedTitle";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Main function:

export function Experience() {
	return (
		<div
			className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
			id="Experience"
		>
			<div className="flex flex-col justify-center w-full h-full text-white max-w-screen-lg mx-auto p-4">
				<div>
					<UnderlinedTitle title="Experience" />

					<p className="py-6">
						These are some of the technologies I&apos;ve worked with
					</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:p-0">
					{techs.map(tech => (
						<Card key={tech.src} {...tech} />
					))}
				</div>
			</div>
		</div>
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
