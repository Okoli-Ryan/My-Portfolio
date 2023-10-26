import Link from 'next/link';
import React from 'react';

import LinkButton from '@/components/LinkButton';
import { RESUME_LINK } from '@/constants';

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
						<span className="bold">React, NextJs, React Native and ASP.NET.</span> With a strong background in{" "}
						<span className="bold">web and mobile development</span>, I have a passion for creating exceptional user experiences and delivering
						innovative solutions. <br />
						Throughout my career, I have successfully designed and developed web and mobile applications for various industries across{" "}
						<span className="bold">fintech, ecommerce, and crypto-payment</span> platforms. Feel free to checkout my{" "}
						<LinkButton variant="ghost" newTab href={RESUME_LINK} className="!underline bold">
							Resume
						</LinkButton>
						, or{" "}
						<LinkButton variant="ghost" href="#contact" className="!underline bold">
							contact me
						</LinkButton>{" "}
						through my links.
					</p>
				</div>
				<Skills />
			</div>
		</div>
	);
}
