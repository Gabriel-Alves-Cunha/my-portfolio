import { SocialLinks } from "#components/SocialLinks";
import { Experience } from "#components/Experience";
import { Portfolio } from "#components/Projects";
import { Contact } from "#components/Contact";
import { About } from "#components/About";
import { Home } from "#components/Home";

export default function Index() {
	return (
		<>
			<Home />

			<About />

			<Portfolio />

			<Experience />

			<Contact />

			<SocialLinks />
		</>
	);
}
