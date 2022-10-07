import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { HiOutlineAcademicCap as Academic } from "react-icons/hi";
import { BsFillPersonLinesFill as Person } from "react-icons/bs";
import { BsCalendar4 as Calendar } from "react-icons/bs";
import { HiOutlineMail as Mail } from "react-icons/hi";
import { WiStars as Stars } from "react-icons/wi";
import { BiMapAlt as Map } from "react-icons/bi";
import { BsFlag as Flag } from "react-icons/bs";

import { UnderlinedTitle } from "../UnderlinedTitle";
import { yearsSince } from "#utils/yearsSince";

export function About() {
	return (
		<div className="w-full pt-6 min-h-screen text-white" id="About">
			<div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
				<div className="mb-8">
					<UnderlinedTitle title="About" />
				</div>

				<p className="text-xl mt-10">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
					unde veritatis molestias quia dolore pariatur et blanditiis, vitae
					nesciunt ipsa ut error, officiis assumenda dolorum. Quasi sit eaque
					eius dicta.
				</p>

				<br />

				<ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 my-8 p-8 w-full rounded-xl bg-secondary">
					{aboutItems.map(({ label, text, Icon }, index) => (
						<li className="col-span-1 flex items-start gap-x-2" key={index}>
							<Icon className="h-5 w-5 text-white" size={24} />

							<span className="text-sm font-bold text-white">{label}:</span>

							<span className=" text-sm text-gray-300">{text}</span>
						</li>
					))}
				</ul>

				<ul className="lg:hidden grid grid-cols-1 gap-4 sm:grid-cols-2 my-8 p-8 w-full rounded-xl bg-secondary">
					{contactItems.map(({ label, Icon, href }) => (
						<a
							className="col-span-1 flex items-center gap-x-2"
							rel="noreferrer"
							target="_blank" // Open on a new (blank) tab!
							href={href}
							key={href}
						>
							{Icon}

							<span className="text-sm font-bold text-white">{label}</span>
						</a>
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
	{ label: "Nationality", text: "Brazilian", Icon: Flag },
	{
		text: yearsSince(new Date("2000-08-02"), new Date()),
		Icon: Calendar,
		label: "Age",
	},
	{
		text: "Volleyball, Animes",
		label: "Interests",
		Icon: Stars,
	},
	{
		text: "Federal University of Vale do São Francisco",
		label: "Study",
		Icon: Academic,
	},
	// {
	// 	label: "Employment",
	// 	text: "Instant Domains, inc.",
	// 	Icon: OfficeBuildingIcon,
	// },
];

const contactItems = [
	{
		href: "https://github.com/Gabriel-Alves-Cunha/",
		"aria-label": "Access my Github",
		Icon: <Github size={24} />,
		label: "Github",
	},
	{
		href: "https://www.linkedin.com/in/gabriel-alves-cunha/",
		"aria-label": "Access my LinkedIn",
		Icon: <Linkedin size={24} />,
		label: "Linkedin",
	},
	{
		href: "mailto:gabriel925486@gmail.com",
		Icon: <Mail size={24} />,
		"aria-label": "Mail me",
		label: "Email",
	},
	{
		"aria-label": "Download my Resume",
		Icon: <Person size={24} />,
		href: "/resume.pdf",
		label: "Resume",
		download: true,
	},
];
