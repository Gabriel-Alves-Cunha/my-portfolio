import { SectionSpacer } from "#components/SectionSpacer";
import { SocialLinks } from "#components/SocialLinks";
import { Experience } from "#components/Sections/Experience";
import { Projects } from "#components/Sections/Projects";
import { Contact } from "#components/Sections/Contact";
import { About } from "#components/Sections/About";
import { Home } from "#components/Sections/Home";

export default function Index() {
	return (
		<>
			<Home />

			<SectionSpacer />

			<About />

			<SectionSpacer />

			<Projects />

			<SectionSpacer />

			<Experience />

			<SectionSpacer />

			<Contact />

			<SocialLinks />
		</>
	);
}
