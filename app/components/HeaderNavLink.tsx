import { type NavLinkProps, NavLink } from "@remix-run/react";

export const HeaderNavLink = ({ title, to, ...rest }: Props) => (
	<NavLink
		className="relative block h-full max-w-max mx-auto font-medium text-white hover:text-underline my-underline"
		title={"Go to " + title}
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
