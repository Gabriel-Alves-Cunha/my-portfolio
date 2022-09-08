import { FaBars as Menu, FaTimes as Close } from "react-icons/fa";
import { useState } from "react";

import { HeaderNavLink } from "./HeaderNavLink";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Main function:

export function Header() {
	const [showNav, setShowNav] = useState(false);

	return (
		<header className="flex justify-between items-center w-full h-20 text-white bg-black px-4">
			<span className="text-5xl font-signature">Gabriel</span>

			<nav className="hidden md:flex">
				{navLinks.map(link => (
					<HeaderNavLink key={link.title} {...link} />
				))}
			</nav>

			<div
				className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
				onPointerUp={() => setShowNav(!showNav)}
			>
				{showNav ? <Close size={30} /> : <Menu size={30} />}
			</div>

			{showNav && (
				<nav
					className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 [&_a]:h-fit [&_a]:px-4 [&_a]:py-6 [&_a]:text-4xl"
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
