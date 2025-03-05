import { addPerson } from "./requests/post.js";

const addBtn = document.getElementById("add-btn");

addBtn.onclick = createPerson;

function createPerson() {
	const inputName = document.getElementById("input-name").value;
	const inputAge = document.getElementById("input-age").value;
	const inputLocation = document.getElementById("input-location").value;

	const newPerson = [
		{
			name: inputName,
			age: inputAge,
			location: inputLocation,
		},
	];

	addPerson(newPerson);
}
