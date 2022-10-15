import { BlueAnchorButton } from "#components/BlueAnchorButton";

import { Section } from "#components/Section";

import HeroImage from "#assets/my-avatar.svg";

export function Home() {
	return (
		<Section id="Home" className="md:flex-row">
			<div className="flex flex-col justify-start md:w-full">
				<h2 className="text-4xl font-bold text-white md:text-5xl lg:text-7xl">
					Hi, there! I&apos;m a Full-Stack Web Developer
				</h2>

				<p className="max-w-md py-4 leading-6 text-gray-500">
					Passionate programmer seeking an entry-level full-stack developer
					position in a reputed company where I can use my educational
					background to develop my skills. Knowledgeable in user interface,
					testing, and debugging processes, highly proﬁcient in ReactJS,
					Javascript, Typescript, NodeJS. I am very eager to start my career and
					learn among others.
				</p>

				<BlueAnchorButton title="Projects" arrow />
			</div>

			<div className="mt-9 md:ml-9 h-fit">
				<img
					className="rounded-2xl sm:mx-auto w-2/3 md:w-full border-2 border-underline"
					alt="My profile"
					src={HeroImage}
				/>
			</div>
		</Section>
	);
}
