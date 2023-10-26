import Link from 'next/link';

const buttonVariants = {
	primary: "bg-primary text-light hover:bg-primary/80",
	outline: "bg-transparent border-2 border-primary text-purple-500 hover:text-purple-300",
	ghost: "!no-underline",
};

type LinkButtonProps = NonNullable<typeof Link.defaultProps> &
	Partial<Record<"variant", keyof typeof buttonVariants>> &
	Partial<Record<"newTab", boolean>> &
	Partial<Record<"disabled", boolean>>;

export default function LinkButton({ className = "", href = "/", children, variant = "primary", newTab = false, disabled, role, ...props }: LinkButtonProps) {
	if (role === "button")
		return (
			<button
				disabled={disabled}
				className={`${className} disabled:opacity-50 !no-underline text-center ${buttonVariants[variant]} font-bold transition-all duration-200 text-sm lg:text-base py-[.6rem] px-[2.4rem] font-mono rounded-md`}>
				{children}
			</button>
		);

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
