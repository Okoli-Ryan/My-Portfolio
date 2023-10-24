import Link, { LinkProps } from "next/link";
import React from "react";

export default function LinkButton({ children, className = "", href = "/", ...props }: LinkProps & React.HTMLAttributes<HTMLAnchorElement>) {
	return (
		<Link
			href={href}
			className={` ${className} !no-underline text-center bg-primary font-bold text-base text-light py-[.6rem] px-[2.4rem] font-mono rounded-md`}
			{...props}>
			{children}
		</Link>
	);
}
