import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { BsFillPersonLinesFill as Person } from "react-icons/bs";
import { IoMailOutline as Email } from "react-icons/io5";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Main function:

export function SocialLinks() {
	return (
		<ul className="hidden lg:flex flex-col top-[35%] left-0 fixed">
			{contactLinks.map(link => (
				<li
					className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-secondary hover:rounded-md duration-200 hover:ml-[-10px] first:rounded-tr-md last:rounded-br-md"
					key={link.href}
				>
					<a
						className="flex justify-between items-center h-full w-full text-white"
						aria-label={link.title}
						rel="noreferrer"
						target="_blank" // Open on a new (blank) tab!
						{...link}
					>
						{link.children}
					</a>
				</li>
			))}
		</ul>
	);
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Constants:

const size = 30;
export const contactLinks = [
	{
		href: "https://www.linkedin.com/in/gabriel-alves-cunha/",
		title: "Access my LinkedIn",
		children: (
			<>
				LinkedIn <Linkedin size={size} />
			</>
		),
	},
	{
		href: "https://github.com/Gabriel-Alves-Cunha/",
		title: "Access my Github",
		children: (
			<>
				Github <Github size={size} />
			</>
		),
	},
	{
		href: "mailto:gabriel925486@gmail.com",
		title: "Mail me",
		children: (
			<>
				Mail <Email size={size} />
			</>
		),
	},
	{
		title: "Download my Resume",
		href: "/resume.pdf",
		download: true,
		children: (
			<>
				Resume <Person size={size} />
			</>
		),
	},
];
