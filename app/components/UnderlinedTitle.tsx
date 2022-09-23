export function UnderlinedTitle({ title, className = "" }: Props) {
	return (
		<a
			className={
				"block max-w-min underline-slide-in text-4xl font-bold link link-underline link-underline-black" +
				className
			}
			href={`#${title}`}
		>
			{title}
		</a>
	);
}

type Props = { title: string; className?: string };
