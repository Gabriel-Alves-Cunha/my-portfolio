import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { HiOutlineAcademicCap as Academic } from "react-icons/hi";
import { BsFillPersonLinesFill as Person } from "react-icons/bs";
import { MdCalendarToday as Calendar } from "react-icons/md";
import { HiOutlineMail as Mail } from "react-icons/hi";
import { TbMoonStars as Stars } from "react-icons/tb";
import { BiMapAlt as Map } from "react-icons/bi";
import { FiFlag as Flag } from "react-icons/fi";

import { yearsSince } from "#utils/yearsSince";
import { Section } from "#components/Section";
import { Title } from "#components/Title";
import { P } from "#components/P";

export function About() {
	return (
		<Section id="About">
			<Title title="About" />

			<p className="pb-8 py-6 font-base tracking-wide text-xl">
				I first was introduced to programming in college with the C language. I
				was fascinated by how computers work under the screen, so I began to
				watch tutorials on Java on YouTube. Eventually, I drifted to the{" "}
				<span className="bg-lin">
					<span>JS/HTML/CSS</span>
				</span>{" "}
				universe and was flabbergasted by what you could build relatively easily
				with this trio.
			</p>

			<P text="Skipping to today, I now am very proficient in Typescript and enjoy making things in their entirety, from back to the front end, sometimes on mobile or desktop! I'm super eager to learn about the computer world and can't wait to start my career." />

			<br />

			<ul className="grid w-full grid-cols-1 gap-4 p-8 my-8 text-sm md:grid-cols-2 rounded-xl bg-secondary">
				{aboutItems.map(({ label, text, Icon }, index) => (
					<li className="flex items-start gap-x-2" key={index}>
						<div className="flex items-center justify-center">
							<Icon size={24} />
						</div>

						<span className="font-bold">{label}:</span>

						<span className="text-gray-300">{text}</span>
					</li>
				))}
			</ul>

			<ul className="grid w-full grid-cols-1 gap-4 p-8 my-8 lg:hidden sm:grid-cols-2 rounded-xl bg-secondary">
				{contactItems.map(({ label, Icon, href, title, download = false }) => (
					<a
						className="group w-fit"
						download={download}
						rel="noreferrer"
						target="_blank" // Open on a new (blank) tab!
						title={title}
						href={href}
						key={href}
					>
						<div className="flex flex-row items-center gap-x-2 group-hover:pulsate-fwd">
							<Icon size={24} />

							<span className="text-sm font-bold">{label}</span>
						</div>
					</a>
				))}
			</ul>
		</Section>
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
		title: "Access my Github",
		label: "Github",
		Icon: Github,
	},
	{
		href: "https://www.linkedin.com/in/gabriel-alves-cunha/",
		title: "Access my LinkedIn",
		label: "Linkedin",
		Icon: Linkedin,
	},
	{
		href: "mailto:gabriel925486@gmail.com",
		title: "Mail me",
		label: "Email",
		Icon: Mail,
	},
	{
		title: "Download my Resume",
		href: "/resume.pdf",
		label: "Resume",
		download: true,
		Icon: Person,
	},
];
