// Importer fire funksjoner
const { add, subtract, capitalize, magicAnswer } = require("./oppgaver");

// 1
test("Funksjonen add skal legge sammen to tall", () => {
	expect(add(5, 10)).toBe(15);
});

// 2
test("Funksjonen subtract skal trekke et tall fra et annet", () => {
	expect(subtract(15, 10)).toBe(5);
});

// 3
test("Funksjonen capitalize skal lage stor bokstav", () => {
	expect(capitalize("hei")).toBe("Hei");
});

// 4
test("Funksjonen magicAnswer skal svare JA! på spørsmål", () => {
	expect(magicAnswer("Er du glad?")).toBe("JA!");
});
