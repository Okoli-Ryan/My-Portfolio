import React from "react";

import LinkButton from "@/components/Button";

export default function AboutMe() {
	return (
		<div className="container flex gap-8 flex-col bottom-border py-16" id="about">
			<h2 className="text-3xl ">About Me</h2>
			<p className="leading-8 font-sans">
				I am a highly skilled and results-driven Fullstack Developer with expertise in{" "}
				<span className="bold">React, NextJs, React Native and ASP.NET.</span> With a strong background in web design and mobile development, I have a
				passion for creating exceptional user experiences and delivering innovative solutions. <br />
				Throughout my career, I have successfully designed and developed web and mobile applications for various industries across fintech, ecommerce,
				and crypto-payment platforms. Feel free to checkout my <span className="bold">Resume</span>, or <span className="bold">contact me</span> through
				my links.
			</p>
			<LinkButton className="self-start">Contact</LinkButton>
		</div>
	);
}
