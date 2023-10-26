import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { SOCIALS } from "@/constants";

import LinkButton from './LinkButton';

export default function Footer() {
	return (
		<>
			<div className="container grid grid-cols-3 lg:flex-row-reverse bottom-border py-16 gap-8 lg:gap-16">
				<div className="flex flex-col col-span-3 lg:col-span-1 lg:order-2">
					<h2 className="text-3xl font-bold">Social</h2>
					<div className="flex gap-4 mt-6 items-center">
						{SOCIALS.map((social) => (
							<LinkButton variant="ghost" key={social.name} href={social.link} className="!no-underline" newTab>
								<Image src={social.path} alt={social.name} width={20} height={20} />
							</LinkButton>
						))}
					</div>
				</div>
				<div className="col-span-3 lg:col-span-2 lg:order-1">
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
