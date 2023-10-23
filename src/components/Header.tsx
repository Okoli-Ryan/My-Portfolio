import Image from "next/image";

export default function Header() {
	return (
		<header className="h-16 bg-dark flex items-center sticky top-0 z-10">
			<div className="container flex justify-between items-center">
				<span className="text-light text-lg font-bold !font-sans">UGOCHUKWU OKOLI</span>
				<span className="flex md:hidden">
					<Image width={24} height={24} alt="Menu button" src="/icons/hamburger menu.svg" />
				</span>
			</div>
		</header>
	);
}
