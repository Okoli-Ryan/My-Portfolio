import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const data = req.body;
	try {
		const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_URL as string, {
			body: JSON.stringify(data),
			method: "POST",
			headers: { "Content-Type": "application/json" },
		});
		const result = await response.json();
		res.status(200).json(result);
	} catch (error) {
		res.status(500);
	}
}
