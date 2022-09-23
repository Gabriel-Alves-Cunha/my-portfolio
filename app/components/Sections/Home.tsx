import { BlueAnchorButton } from "#components/BlueAnchorButton";

import HeroImage from "#assets/heroImage.png";

export function Home() {
	return (
		<div
			className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
			id="Home"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl sm:text-7xl font-bold text-white">
						I&apos;m a Full Stack Developer
					</h2>

					<p className="text-gray-500 py-4 max-w-md">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, ab
						eum fuga praesentium dolores quibusdam. Vel dolorum ratione ducimus,
						culpa nihil maxime provident non reiciendis accusantium voluptatem
						sunt dicta optio.
					</p>

					<BlueAnchorButton title="Projects" arrow />
				</div>

				<div>
					<img
						className="rounded-2xl mx-auto w-2/3 md:w-full"
						alt="My profile"
						src={HeroImage}
					/>
				</div>
			</div>
		</div>
	);
}
