import { horseApiURL } from "./auth.js";
import { apiKey } from "./auth.js";

export async function getHorses() {
	try {
		const response = await axios.get(horseApiURL, {
			headers: {
				Authorization: `Bearer ${apiKey}`,
			},
		});
		console.log(response);
	} catch (error) {}
}
