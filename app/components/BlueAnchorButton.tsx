import type { AnchorHTMLAttributes } from "react";

import { MdOutlineKeyboardArrowRight as ArrowRight } from "react-icons/md";

export function BlueAnchorButton({
	className = "",
	arrow = false,
	title,
	...rest
}: Props) {
	return (
		<a
			className={
				"group flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-black w-fit px-6 py-3 my-2" +
				className
			}
			href={`#${title}`}
			{...rest}
		>
			{title}

			{arrow && (
				<span className="group-hover:rotate-90 duration-300 ml-2">
					<ArrowRight size={25} />
				</span>
			)}
		</a>
	);
}

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	className?: string;
	arrow?: boolean;
	title: string;
}
