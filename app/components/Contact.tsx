export function Contact() {
	return (
		<div
			className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
			id="Contact"
		>
			<div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Contact
					</p>

					<p className="py-6">Submit the form below to get in touch with me</p>
				</div>

				<div className="flex justify-center items-center">
					<form
						action="https://getform.io/f/40966000-c467-4da1-a3b0-9ee71cad0577"
						className="flex flex-col w-full md:w-1/2 gap-4"
						method="POST"
					>
						<input
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
							placeholder="Enter your name"
							type="text"
							name="Name"
						/>

						<input
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
							placeholder="Enter your email"
							type="email"
							name="Email"
						/>

						<textarea
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
							placeholder="Enter your message"
							name="Message"
							rows={10}
						></textarea>

						<button
							className="flex items-center rounded-md hover:scale-110 duration-200 text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto"
							type="submit"
						>
							Say hi
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
