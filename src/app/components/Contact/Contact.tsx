import React from 'react';

import ContactForm from './ContactForm';

export default function Contact() {
	return (
		<div className="container flex gap-8 flex-col py-16 bottom-border" id="contact">
			<h2 className="text-4xl font-bold text-center font-mono head-underline w-max mx-auto">Contact</h2>
			<p className="leading-8 font-sans text-center max-w-lg w-full mx-auto mb-8 mt-4">
				Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
			</p>
			<div className="mt-8">
				<ContactForm />
			</div>
		</div>
	);
}
