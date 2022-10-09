import type { HTMLAttributes } from "react";

export function Section({ children, className = "", ...rest }: Props) {
	return (
		<section
			className={
				"flex flex-col justify-start w-full h-full max-w-screen-lg p-4 mx-auto pt-6 text-white " +
				className
			}
			{...rest}
		>
			{children}
		</section>
	);
}

interface Props extends HTMLAttributes<HTMLDivElement> {
	readonly children: React.ReactNode;
}
