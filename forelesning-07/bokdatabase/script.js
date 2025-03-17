const apiURL = "https://crudapi.co.uk/api/v1/books";
const apiKey = "ImAqs6teZHIoeMB4C8p9eXoQ4v1Fl6JNjvqgUjCcm_SdAEA_DA";

const bookForm = document.getElementById("book-bookForm");
const bookList = document.getElementById("book-list");

let books = [];

async function uploadBook(book) {
	console.log("Mottatt bok: ", book);
	try {
		books = await axios.post(apiURL, book, {
			headers: { Authorization: `Bearer ${apiKey}` },
		});
	} catch (error) {
		console.error("Kunne ikke laste opp bok: ", error);
	}
}

async function getAllBooks() {
	try {
		const result = await axios.get(apiURL, {
			headers: { Authorization: `Bearer ${apiKey}` },
		});
		return result;
	} catch (error) {
		console.log("Kunne ikke laste bøker.", error);
	}
}

async function editBook(book) {
	try {
		const result = await axios.put(apiURL, book, {
			headers: { Authorization: `Bearer ${apiKey}` },
		});
		console.log("Bok ble endret.");
	} catch (error) {
		console.error("Kunne ikke endre boken.", error);
	}
}

bookForm.addEventListener("submit", async (event) => {
	event.preventDefault();
	const newBook = [
		{
			title: bookForm.elements[0].value,
			author: bookForm.elements[1].value,
		},
	];
	uploadBook(newBook);
});

async function showAllBooks() {
	books = await getAllBooks();

	bookList.innerHTML = books
		.map(
			(book) => `
		<div>${book.title} av ${book.author}</div>
		<button>Rediger bok</button>
		`
		)
		.join("");
}
showAllBooks();
