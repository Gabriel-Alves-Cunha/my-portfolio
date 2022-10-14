import type { HTMLAttributes } from "react";

export function Section({ children, className = "", ...rest }: Props) {
	return (
		<section
			className={
				"flex flex-col justify-start w-full h-full max-w-screen-lg mx-auto text-white " +
				className
			}
			{...rest}
		>
			{children}
		</section>
	);
}

type Props = HTMLAttributes<HTMLDivElement>;
