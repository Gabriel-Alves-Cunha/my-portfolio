import { useEffect, useState } from "react";

export function useScrollDirection() {
	const [scrollDirection, setScrollDirection] = useState<Direction>(0);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const updateScrollDirection = () => {
			const { scrollY } = window;
			const direction = scrollY > lastScrollY ? -1 : 1;

			if (
				direction !== scrollDirection &&
				(scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
			)
				setScrollDirection(direction);

			lastScrollY = scrollY > 0 ? scrollY : 0;
		};

		window.addEventListener("scroll", updateScrollDirection); // add event listener

		return () => window.removeEventListener("scroll", updateScrollDirection); // clean up
	}, [scrollDirection]);

	return scrollDirection;
}

type Direction = -1 | 0 | 1;