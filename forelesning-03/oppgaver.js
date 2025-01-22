//1
function add(a, b) {
	return a + b;
}

//2
function subtract(a, b) {
	return a - b;
}

//3
function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

//4
function magicAnswer(question) {
	if (typeof question !== "string") {
		return "Spørsmålet må være en tekst!";
	}
	return "JA!";
}

// Eksporter fire funksjoner
module.exports = { add, subtract, capitalize, magicAnswer };
