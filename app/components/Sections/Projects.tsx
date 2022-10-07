import { Link } from "@remix-run/react";

import { UnderlinedTitle } from "../UnderlinedTitle";

// import imagesOfProjects from "@assets/portfolio/foo.bar"

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Main function:

export function Portfolio() {
	return (
		<div className="w-full text-white md:h-screen" id="Projects">
			<div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
				<div className="pb-8">
					<UnderlinedTitle title="Projects" />

					<p className="py-6">Check out some of my work here</p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{imagesOfProjects.map(img => (
						<Card key={img.src} {...img} />
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

function Card({ src, alt, demo, code }: CardProps) {
	return (
		<div className="shadow-md shadow-gray-600 rounded-lg">
			<img
				className="rounded-md duration-200 hover:scale-105 aspect"
				src={src}
				alt={alt}
			/>

			<div className="flex items-center justify-center">
				<Link
					className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
					to={demo}
				>
					Demo
				</Link>

				<Link
					className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
					to={code}
				>
					Code
				</Link>
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
 * 
 */

const imagesOfProjects = [{ src: "", alt: "", demo: "", code: "" }];

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Types:

type CardProps = {
	demo: string;
	code: string;
	src: string;
	alt: string;
};
