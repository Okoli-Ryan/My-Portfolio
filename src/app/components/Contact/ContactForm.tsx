"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import LinkButton from "@/components/LinkButton";

import { sendEmail } from "./utils";

type ButtonState = "success" | "danger" | "default";

const buttonLabel: Record<ButtonState, { label: string; className: string }> = {
	danger: { label: "Error occurred", className: "!bg-red-500 hover:!bg-red-500" },
	default: { label: "Submit", className: "" },
	success: { label: "Success", className: "!bg-green-500 hover:!bg-green-500" },
};

const defaultFormValue = {};

export default function ContactForm() {
	const [formData, setFormData] = useState<Record<string, string>>(defaultFormValue);
	const [isLoading, setIsLoading] = useState(false);
	const [buttonState, setButtonState] = useState<ButtonState>("default");

	function setValue() {
		return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	async function submitForm(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsLoading(true);

		const response = await sendEmail(formData);

		if (!response) {
			setButtonState("danger");
			setIsLoading(false);
			return;
		}

		setButtonState("success");
		setFormData(defaultFormValue);
		setIsLoading(false);
	}

	useEffect(() => {
		if (buttonState !== "default")
			setTimeout(() => {
				setButtonState("default");
			}, 3000);
	}, [buttonState]);

	return (
		<form onSubmit={submitForm} className="p-6 flex flex-col gap-6 bg-darkGray rounded-md max-w-3xl mx-auto">
			<section className="flex flex-col gap-2">
				<label htmlFor="name" className="text-sm font-sans">
					Name
				</label>
				<input
					id="name"
					name="name"
					className="px-2.5 py-4 text-xs lg:text-base text-dark font-sans rounded-sm bg-white"
					placeholder="Enter Your Name"
					onChange={setValue()}
					value={formData.name}
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
					onChange={setValue()}
					value={formData.email}
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
					onChange={setValue()}
					value={formData.message}
				/>
			</section>
			<LinkButton disabled={isLoading} className={buttonLabel[buttonState].className} role="button">
				{buttonLabel[buttonState].label}
			</LinkButton>
		</form>
	);
}
