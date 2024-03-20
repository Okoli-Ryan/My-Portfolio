import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function Home() {
	return (
		<div className="relative w-full z-[5] overflow-x-hidden">
			<Hero />
			<AboutMe />
			<Projects />
			{/* <Contact /> */}
		</div>
	);
}
