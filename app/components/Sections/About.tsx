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

			<P text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, unde veritatis molestquia dolore pariatur et blanditiis, vitae nesciunt ipsa ut error, officiis assumenda dolorum. Quasi sit eaque eius dicta." />

			<br />

			<ul className="grid grid-cols-1 gap-4 md:grid-cols-2 my-8 p-8 w-full rounded-xl bg-secondary text-sm">
				{aboutItems.map(({ label, text, Icon }, index) => (
					<li className="flex items-start gap-x-2" key={index}>
						<div className="flex justify-center items-center">
							<Icon size={24} />
						</div>

						<span className="font-bold">{label}:</span>

						<span className="text-gray-300">{text}</span>
					</li>
				))}
			</ul>

			<ul className="lg:hidden grid grid-cols-1 gap-4 sm:grid-cols-2 my-8 p-8 w-full rounded-xl bg-secondary">
				{contactItems.map(({ label, Icon, href }) => (
					<a
						className="group w-fit"
						rel="noreferrer"
						target="_blank" // Open on a new (blank) tab!
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

			<br />

			<P text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis enim reiciendis debitis  utem amet necessitatibus error corrupti	incidunt soluta ipsam, quas accusamus nam dolorum maiores eligendi sit illum alias explicabo!" />
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
		"aria-label": "Access my Github",
		label: "Github",
		Icon: Github,
	},
	{
		href: "https://www.linkedin.com/in/gabriel-alves-cunha/",
		"aria-label": "Access my LinkedIn",
		label: "Linkedin",
		Icon: Linkedin,
	},
	{
		href: "mailto:gabriel925486@gmail.com",
		"aria-label": "Mail me",
		label: "Email",
		Icon: Mail,
	},
	{
		"aria-label": "Download my Resume",
		href: "/resume.pdf",
		label: "Resume",
		download: true,
		Icon: Person,
	},
];
