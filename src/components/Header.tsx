"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { RESUME_LINK } from "@/constants";

import LinkButton from "./LinkButton";

const NAV_ROUTES = [
	{
		name: "Home",
		href: "#",
	},
	{
		name: "About",
		href: "#about",
	},
	{
		name: "Projects",
		href: "#projects",
	},
	{
		name: "Contact",
		href: "#contact",
	},
	{
		name: "Resume",
		href: RESUME_LINK,
		isButton: true,
	},
];

const drawerClass = {
	open: "translate-y-0",
	closed: "-translate-y-[120%]",
};

export default function Header() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	function toggleDrawer() {
		setIsDrawerOpen(!isDrawerOpen);
	}

	return (
		<header className="bg-dark flex items-center sticky top-0 z-10">
			<div className="w-full">
				<div className="container">
					<div className="flex justify-between items-center h-16 relative z-20 bg-dark">
						<span className="text-light text-lg font-bold !font-sans">UGOCHUKWU OKOLI</span>
						<button className="flex md:hidden" onClick={toggleDrawer}>
							<Image width={24} height={24} alt="Menu button" src="/icons/hamburger menu.svg" />
						</button>
						<ul className="gap-8 hidden md:flex">
							{NAV_ROUTES.map((route) => (
								<li key={route.name}>
									<LinkButton
										variant={route.isButton ? "outline" : "ghost"}
										href={route.href}
										className="no-underline hover:text-purple-500 transition-colors">
										{route.name}
									</LinkButton>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="relative z-0 w-full bg-dark block md:hidden">
					<div className={`bg-dark absolute w-full  duration-300 transition-all z-0 ${isDrawerOpen ? drawerClass.open : drawerClass.closed}`}>
						<ul className={`items-end container right-0 left-0 py-2 pb-4 gap-8 flex flex-col w-full  duration-300 transition-all z-0`}>
							{NAV_ROUTES.map((route) => (
								<li key={route.name} className="text-right">
									<LinkButton
										variant={route.isButton ? "outline" : "ghost"}
										href={route.href}
										className="no-underline font-bold block text-right"
										onClick={toggleDrawer}>
										{route.name}
									</LinkButton>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}
