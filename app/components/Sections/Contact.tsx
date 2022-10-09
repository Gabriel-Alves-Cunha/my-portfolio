import { BlueAnchorButton } from "#components/BlueAnchorButton";
import { Section } from "#components/Section";
import { Title } from "#components/Title";
import { P } from "#components/P";

export function Contact() {
	return (
		<Section id="Contact">
			<Title title="Contact" />

			<P text="Submit the form below to get in touch with me" />

			<form
				action="https://getform.io/f/40966000-c467-4da1-a3b0-9ee71cad0577"
				className="flex flex-col w-full place-items-center gap-4"
				method="POST"
			>
				<input
					className="p-2 w-full lg:w-1/2 bg-primary border-2 rounded-md text-white focus:outline-none"
					placeholder="Enter your name"
					type="text"
					name="Name"
				/>

				<input
					className="p-2 w-full lg:w-1/2 bg-primary border-2 rounded-md text-white focus:outline-none"
					placeholder="Enter your email"
					type="email"
					name="Email"
				/>

				<textarea
					className="p-2 w-full lg:w-1/2 bg-primary border-2 rounded-md text-white focus:outline-none resize-none"
					placeholder="Enter your message"
					name="Message"
					spellCheck
					rows={10}
				/>

				<BlueAnchorButton
					className="mx-auto self-center mt-8"
					title="Say Hi"
					type="submit"
					email
				/>
			</form>
		</Section>
	);
}
