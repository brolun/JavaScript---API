const { sum, allCaps } = require("./learning");

test("sums number1 and number2 together", () => {
	expect(sum(2, 2)).toBe(4);
});

test("makes text all caps", () => {
	expect(allCaps("hei på deg")).toBe("HEI PÅ DEG");
});
