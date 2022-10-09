import type { HTMLAttributes } from "react";

export function Title({ title, className = "", ...rest }: Props) {
	return (
		<h1
			className={
				"relative block max-w-min mb-8 text-4xl font-bold my-underline " +
				className
			}
			{...rest}
		>
			{title}
		</h1>
	);
}

interface Props extends HTMLAttributes<HTMLParagraphElement> {
	readonly title: string;
}
