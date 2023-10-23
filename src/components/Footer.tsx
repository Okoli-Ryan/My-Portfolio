import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<>
			<div className="container flex flex-col bottom-border py-8">
				<h2 className="text-3xl font-bold">Social</h2>
				<div className="flex gap-4 mt-6 items-center">
					{Socials.map((social) => (
						<Image src={social.path} key={social.name} alt={social.name} width={20} height={20} />
					))}
				</div>
				<div className="mt-8">
					<h4 className="text-light text-base font-bold !font-sans">UGOCHUKWU OKOLI</h4>
					<p className="leading-6 font-sans text-sm my-4">
						A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
					</p>
				</div>
			</div>
			<div className="py-8 text-center text-light text-xs">
				Made by <Link href="/">Ugochukwu Okoli</Link>
			</div>
		</>
	);
}

const Socials = [
	{ name: "email", path: "/icons/email.svg" },
	{ name: "github", path: "/icons/github.svg" },
	{ name: "linkedin", path: "/icons/linkedin.svg" },
];
