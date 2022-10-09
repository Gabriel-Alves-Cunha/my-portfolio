import { type NavLinkProps, NavLink } from "@remix-run/react";

export const HeaderNavLink = ({ title, to, ...rest }: Props) => (
	<NavLink
		className="relative block h-full font-medium text-white hover:text-underline my-underline"
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
