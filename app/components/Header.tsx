import { FaBars as Menu, FaTimes as Close } from "react-icons/fa";
import { useState } from "react";

import { useScrollDirection } from "#hooks/useScrollDirection";
import { HeaderNavLink } from "./HeaderNavLink";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Main function:

export function Header() {
	const [showNav, setShowNav] = useState(false);
	const scrollDirection = useScrollDirection();

	return (
		<header
			className={`sticky ${
				scrollDirection === "down" ? "-top-16" : "top-0"
			} flex justify-between items-center w-full h-16 text-white bg-primary px-10 transition-all duration-300 z-10`}
		>
			<span className="text-2xl lg:text-4xl font-signature">
				Gabriel Alves Cunha
			</span>

			<nav className="hidden gap-9 md:flex">
				{navLinks.map(link => (
					<HeaderNavLink key={link.title} {...link} />
				))}
			</nav>

			<div
				className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
				onClick={() => setShowNav(!showNav)}
			>
				{showNav ? <Close size={30} /> : <Menu size={30} />}
			</div>

			{showNav && (
				<nav
					className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-primary text-gray-500 [&_a]:h-fit [&_a]:px-4 [&_a]:py-6 [&_a]:text-4xl"
					role="dialog"
				>
					{navLinks.map(link => (
						<HeaderNavLink
							onClick={() => setShowNav(false)}
							key={link.title}
							{...link}
						/>
					))}
				</nav>
			)}
		</header>
	);
}

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Constants:

const navLinks = [
	{ title: "Home", to: "#Home" },
	{ title: "About", to: "#About" },
	{ title: "Projects", to: "#Projects" },
	{ title: "Experience", to: "#Experience" },
	{ title: "Contact", to: "#Contact" },
];
