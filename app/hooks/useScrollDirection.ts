import { useEffect, useState } from "react";

export function useScrollDirection() {
	const [scrollDirection, setScrollDirection] = useState<Direction>("none");

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const updateScrollDirection = () => {
			const { scrollY } = window;
			const direction = scrollY > lastScrollY ? "down" : "up";

			if (
				direction !== scrollDirection &&
				(scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1)
			)
				setScrollDirection(direction);

			lastScrollY = scrollY > 0 ? scrollY : 0;
		};

		window.addEventListener("scroll", updateScrollDirection); // add event listener

		return () => window.removeEventListener("scroll", updateScrollDirection); // clean up
	}, [scrollDirection]);

	return scrollDirection;
}

type Direction = "down" | "none" | "up";
