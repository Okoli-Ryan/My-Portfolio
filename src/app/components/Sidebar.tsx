import Image from "next/image";
import React from "react";

import LinkButton from "@/components/LinkButton";
import { SOCIALS } from "@/constants";

export default function Sidebar() {
	return (
		<ul className="fixed hidden md:flex flex-col top-[50%] left-0 -translate-y-[50%] bg-primary rounded-r-md gap-6 p-2 z-10">
			{SOCIALS.map((social) => (
				<li key={social.name}>
					<LinkButton variant="ghost" href={social.link} className="!no-underline cursor-pointer hover:bg-purple-200" newTab>
						<Image src={social.path} alt={social.name} width={28} height={28} />
					</LinkButton>
				</li>
			))}
		</ul>
	);
}
