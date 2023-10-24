import Link from "next/link";

const buttonVariants = {
	primary: "bg-primary text-light",
	outline: "bg-transparent border-2 border-primary text-purple-500",
};

type LinkButtonProps = NonNullable<typeof Link.defaultProps> & Partial<Record<"variant", keyof typeof buttonVariants>> & Partial<Record<"newRoute", boolean>>;

export default function LinkButton({ className = "", href = "/", children, variant = "primary", newRoute = false, ...props }: LinkButtonProps) {
	return (
		<Link
			href={href}
			target={newRoute ? "_blank" : undefined}
			rel={newRoute ? "noopener noreferrer" : undefined}
			className={` ${className} !no-underline text-center ${buttonVariants[variant]} font-bold text-base py-[.6rem] px-[2.4rem] font-mono rounded-md`}
			{...props}>
			{children}
		</Link>
	);
}
