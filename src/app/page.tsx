import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
	return (
		<div className="relative w-full">
			<Hero />
			<AboutMe />
			<Skills />
			<Contact />
		</div>
	);
}
