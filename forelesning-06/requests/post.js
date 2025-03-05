const apiUrl = "https://crudapi.co.uk/api/v1/person";

export async function addPerson(data) {
	try {
		const response = await axios.post(apiUrl, data, {
			headers: {
				Authorization: `Bearer -OV_3cetkiQLtU9BP8fdGE_ziuIqzM2tkyvCjwiESCpSRjVYhg`,
			},
		});
		console.log("Ny person er lagt inn: ", response);
	} catch (error) {
		console.log("Klarte ikke å legge inn ny person: ", error);
	}
}
