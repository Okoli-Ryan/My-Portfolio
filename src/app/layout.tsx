import type { Metadata } from "next";
import "./globals.css";
import "./stars.css";

import { Poppins, Raleway } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StarsBackground from "@/components/StarsBackground";

const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["400", "700"] });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway", weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "Ugo Okoli Portfolio",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={` ${poppins.variable} ${raleway.variable} relative`}>
				<Header />
				{children}
				<Footer />
				<StarsBackground />
			</body>
		</html>
	);
}
