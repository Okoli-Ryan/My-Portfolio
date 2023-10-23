import React from "react";

import ContactForm from "./ContactForm";

export default function Contact() {
	return (
		<div className="container flex gap-8 flex-col py-8 bottom-border">
			<h2 className="text-3xl ">Contact</h2>
			<p className="leading-8 font-sans">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
			<div className="mt-8">
				<ContactForm />
			</div>
		</div>
	);
}
