import type { HTMLAttributes } from "react";

export function P({ text, className = "", ...rest }: Props) {
	return (
		<p
			className={"pb-8 py-6 font-base tracking-wide text-xl " + className}
			{...rest}
		>
			{text}
		</p>
	);
}

interface Props extends HTMLAttributes<HTMLParagraphElement> {
	text: string;
}
