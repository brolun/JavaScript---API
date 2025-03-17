import { horseApiURL } from "./auth.js";
import { carrotApiURL } from "./auth.js";
import { apiKey } from "./auth.js";

export async function addCarrots() {
	try {
		const response = await axios.post(carrotApiUrl, [{ carrots: 10 }], {
			headers: {
				Authorization: `Bearer ${apiKey}`,
			},
		});
		console.log("Lagt til gulerøtter", response);
	} catch (error) {
		console.log("Error med å legge inn gulerøtter", error);
	}
}

export async function createNewHorse() {
	const name = document.getElementById("name").value;
	const age = document.getElementById("age").value;

	try {
		const response = await axios.post(
			horseApiURL,
			[
				{
					name: name,
					age: age,
					carrotsEaten: 0,
				},
			],
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
				},
			}
		);
		console.log("Du har lagt til en hest!", response);
	} catch (error) {
		console.log("Du fikk ikke lagt til en hest", error);
	}
}
