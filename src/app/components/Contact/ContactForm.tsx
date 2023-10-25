import React from 'react';

import LinkButton from '@/components/LinkButton';

export default function ContactForm() {
	return (
		<form className="p-6 flex flex-col gap-6 bg-darkGray rounded-md max-w-3xl mx-auto">
			<section className="flex flex-col gap-2">
				<label htmlFor="name" className="text-sm font-sans">
					Name
				</label>
				<input
					id="name"
					name="name"
					className="px-2.5 py-4 text-xs lg:text-base text-dark font-sans rounded-sm bg-white"
					placeholder="Enter Your Name"
				/>
			</section>
			<section className="flex flex-col gap-2">
				<label htmlFor="email" className="text-sm font-sans">
					Email
				</label>
				<input
					id="email"
					name="email"
					type="email"
					className="px-2.5 py-4 text-xs lg:text-base text-dark font-sans rounded-sm bg-white"
					placeholder="Enter Your Email"
				/>
			</section>
			<section className="flex flex-col gap-2">
				<label htmlFor="message" className="text-sm font-sans">
					Message
				</label>
				<textarea
					rows={4}
					id="message"
					name="message"
					className="px-2.5 py-4 text-xs lg:text-base text-dark font-sans rounded-sm bg-white"
					placeholder="Enter Your Message"
				/>
			</section>
			<LinkButton role="button">Submit</LinkButton>
		</form>
	);
}
