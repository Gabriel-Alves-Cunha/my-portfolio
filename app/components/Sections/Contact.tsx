import { BlueAnchorButton } from "#components/BlueAnchorButton";
import { UnderlinedTitle } from "#components/UnderlinedTitle";

export function Contact() {
	return (
		<div className="w-full h-screen p-4 text-white" id="Contact">
			<div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
				<div className="pb-8">
					<UnderlinedTitle title="Contact" />

					<p className="py-6">Submit the form below to get in touch with me</p>
				</div>

				<div className="flex justify-center items-center">
					<form
						action="https://getform.io/f/40966000-c467-4da1-a3b0-9ee71cad0577"
						className="flex flex-col w-full md:w-1/2 gap-4"
						method="POST"
					>
						<input
							className="p-2 bg-primary border-2 rounded-md text-white focus:outline-none"
							placeholder="Enter your name"
							type="text"
							name="Name"
						/>

						<input
							className="p-2 bg-primary border-2 rounded-md text-white focus:outline-none"
							placeholder="Enter your email"
							type="email"
							name="Email"
						/>

						<textarea
							className="p-2 bg-primary border-2 rounded-md text-white focus:outline-none resize-none"
							placeholder="Enter your message"
							name="Message"
							spellCheck
							rows={10}
						/>

						<BlueAnchorButton
							className="mx-auto self-center mt-8"
							title="Say Hi"
							type="submit"
						/>
					</form>
				</div>
			</div>
		</div>
	);
}
