import LinkButton from "@/components/Button";

export default function Hero() {
	return (
		<div className="h-[calc(100dvh-4rem)] dot-body">
			<div className="container h-full flex justify-center items-center relative flex-col gap-4">
				<h1 className="text-4xl font-bold text-white font-sans text-center">Hey, I&#39;m Ugo Okoli</h1>
				<h3 className="text-white text-xl font-semibold font-sans text-center">Mobile || Frontend Developer</h3>
				<LinkButton href={"#projects"} className="mt-4">
					Projects
				</LinkButton>
			</div>
		</div>
	);
}
