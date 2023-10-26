export async function sendEmail(body: Record<string, any>) {
	try {
		await fetch(process.env.NEXT_PUBLIC_CONTACT_URL as string, {
			body: JSON.stringify(body),
			method: "POST",
			headers: { "Content-Type": "application/json" },
		});

		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
}
