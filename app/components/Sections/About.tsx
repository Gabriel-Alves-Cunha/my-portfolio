import { HiOutlineAcademicCap as Academic } from "react-icons/hi";
import { BsCalendar4 as Calendar } from "react-icons/bs";
import { WiStars as Stars } from "react-icons/wi";
import { BiMapAlt as Map } from "react-icons/bi";
import { BsFlag as Flag } from "react-icons/bs";

import { UnderlinedTitle } from "../UnderlinedTitle";

export function About() {
	return (
		<div
			className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
			id="About"
		>
			<div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
				<div className="pb-8">
					<UnderlinedTitle title="About" />
				</div>

				<p className="text-xl mt-10">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
					unde veritatis molestias quia dolore pariatur et blanditiis, vitae
					nesciunt ipsa ut error, officiis assumenda dolorum. Quasi sit eaque
					eius dicta.
				</p>

				<br />

				<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-8 p-8 w-full bg-[#1d1f20]">
					{aboutItems.map(({ label, text, Icon }, index) => (
						<li className="col-span-1 flex  items-start gap-x-2" key={index}>
							<Icon className="h-5 w-5 text-white" size={24} />

							<span className="text-sm font-bold text-white">{label}:</span>

							<span className=" text-sm text-gray-300">{text}</span>
						</li>
					))}
				</ul>

				<br />

				<p className="text-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
					enim reiciendis debitis autem amet necessitatibus error corrupti
					incidunt soluta ipsam, quas accusamus nam dolorum maiores eligendi sit
					illum alias explicabo!
				</p>
			</div>
		</div>
	);
}

const aboutItems = [
	{ label: "Location", text: "Pernambuco, Brazil", Icon: Map },
	{ label: "Age", text: "22", Icon: Calendar },
	{ label: "Nationality", text: "Brazilian", Icon: Flag },
	{
		label: "Interests",
		text: "Volleyball, Animes",
		Icon: Stars,
	},
	{
		label: "Study",
		text: "Federal University of Vale do São Francisco",
		Icon: Academic,
	},
	// {
	// 	label: "Employment",
	// 	text: "Instant Domains, inc.",
	// 	Icon: OfficeBuildingIcon,
	// },
];
