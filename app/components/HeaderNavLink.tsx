import { type NavLinkProps, NavLink } from "@remix-run/react";

export const HeaderNavLink = ({ title, to, ...rest }: Props) => (
	<NavLink
		className="flex items-center justify-cente px-4 h-full font-medium text-gray-500 hover:text-white duration-150"
		aria-label={title}
		title={title}
		to={to}
		{...rest}
	>
		{title}
	</NavLink>
);

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Types:

interface Props extends NavLinkProps {
	readonly title: string;
	readonly to: string;
}
