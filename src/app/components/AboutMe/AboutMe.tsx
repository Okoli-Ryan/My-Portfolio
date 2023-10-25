import React from 'react';

import LinkButton from '@/components/LinkButton';

import Skills from '../Skills';

export default function AboutMe() {
	return (
		<div className="container flex gap-8 flex-col bottom-border py-16" id="about">
			<h2 className="text-4xl font-bold text-center font-mono head-underline w-max mx-auto">About Me</h2>
			<p className="leading-8 font-sans text-center max-w-lg w-full mx-auto mb-8 mt-4">
				Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
				<div className="flex flex-col gap-8">
					<h3 className="text-white text-xl font-bold text-center lg:text-left">Get To Know me!</h3>
					<p className="leading-8 font-sans">
						I am a highly skilled and results-driven Fullstack Developer with expertise in{" "}
						<span className="bold">React, NextJs, React Native and ASP.NET.</span> With a strong background in web design and mobile development, I
						have a passion for creating exceptional user experiences and delivering innovative solutions. <br />
						Throughout my career, I have successfully designed and developed web and mobile applications for various industries across fintech,
						ecommerce, and crypto-payment platforms. Feel free to checkout my <span className="bold">Resume</span>, or{" "}
						<span className="bold">contact me</span> through my links.
					</p>
					<LinkButton className="self-start">Contact</LinkButton>
				</div>
				<Skills />
			</div>
		</div>
	);
}
