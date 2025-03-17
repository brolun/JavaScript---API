import { createNewHorse } from "./requests/POST.js";
import { getHorses } from "./requests/GET.js";
import { addCarrots } from "./requests/POST.js";

const createButton = document.getElementById("create-new-horse-form");
createButton.addEventListener("submit", async function (event) {
	event.preventDefault();
	createNewHorse();
});

getHorses();
addCarrots();
