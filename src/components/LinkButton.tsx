import Link from 'next/link';

const buttonVariants = {
	primary: "bg-primary text-light hover:bg-primary/80",
	outline: "bg-transparent border-2 border-primary text-purple-500 hover:text-purple-500/80",
	ghost: "!no-underline",
};

type LinkButtonProps = NonNullable<typeof Link.defaultProps> & Partial<Record<"variant", keyof typeof buttonVariants>> & Partial<Record<"newTab", boolean>>;

export default function LinkButton({ className = "", href = "/", children, variant = "primary", newTab = false, ...props }: LinkButtonProps) {
	return (
		<Link
			href={href}
			target={newTab ? "_blank" : undefined}
			rel={newTab ? "noopener noreferrer" : undefined}
			className={
				variant === "ghost"
					? `${className}`
					: `${className} !no-underline text-center ${buttonVariants[variant]} font-bold transition-all duration-200 text-sm lg:text-base py-[.6rem] px-[2.4rem] font-mono rounded-md`
			}
			{...props}>
			{children}
		</Link>
	);
}
