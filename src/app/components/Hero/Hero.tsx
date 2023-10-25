import LinkButton from '@/components/LinkButton';
import StarsBackground from '@/components/StarsBackground';

export default function Hero() {
	return (
		<div className="h-[calc(100dvh-4rem)] dot-body max-w-[100vw] relative">
			<div className="container h-full flex justify-center items-center relative flex-col gap-16 z-20">
				<h1 className="text-5xl font-bold text-white font-sans text-center tracking-wider leading-snug">Hey, I&#39;m Ugo Okoli</h1>
				<h3 className="text-white text-3xl font-semibold font-sans text-center">Mobile || Frontend Developer</h3>
				<LinkButton href={"#projects"} className="mt-4">
					Projects
				</LinkButton>
			</div>
			<StarsBackground />
		</div>
	);
}
