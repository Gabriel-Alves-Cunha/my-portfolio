import { BlueAnchorButton } from "#components/BlueAnchorButton";

import { Section } from "#components/Section";

import HeroImage from "#assets/heroImage.png";

export function Home() {
	return (
		<Section id="Home" className="md:flex-row">
			<div className="flex flex-col justify-start md:w-full">
				<h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
					I&apos;m a Full Stack Developer
				</h2>

				<p className="text-gray-500 py-4 max-w-md">
					Passionate programmer seeking an entry level web developer position in
					a reputed company where I can use my educational background to develop
					my skills. Knowledgeable in user interface, testing, and debugging
					processes, highly proﬁcient in ReactJS, Javascript, Typescript,
					NodeJS. With top-notch coding skills, I am very eager to start my
					career.
				</p>

				<BlueAnchorButton title="Projects" arrow />
			</div>

			<div className="mt-9 md:ml-9 h-fit">
				<img
					className="rounded-2xl sm:mx-auto w-2/3 md:w-full"
					alt="My profile"
					src={HeroImage}
				/>
			</div>
		</Section>
	);
}
