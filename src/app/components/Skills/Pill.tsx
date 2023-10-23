import React from "react";

export default function Pill({ children }: { children: React.ReactNode }) {
	return <div className="px-4 py-2 bg-[#333333] text-[#fff] rounded-sm text-sm">{children}</div>;
}
