import React from "react";

export default function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button role="link" className={` ${className} bg-primary font-bold text-base text-light py-[.6rem] px-[2.4rem] font-mono rounded-md`} {...props}>
			{children}
		</button>
	);
}
