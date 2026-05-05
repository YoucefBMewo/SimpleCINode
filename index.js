// Classe pour gérer une liste de livres
class BookList {
	constructor() {
		// Initialiser la liste de livres vide
		this.books = [];
	}

	// Récupérer la liste des livres
	getBooks() {
		return this.books;
	}

	// Afficher la liste des livres
	displayBooks() {
		if (this.books.length === 0) {
			console.log('Aucun livre dans la liste.');
		} else {
			console.log('Liste des livres :');
			this.books.forEach((book, index) => {
				console.log(`${index + 1}. ${book}`);
			});
		}
	}

	// Ajouter un livre
	addBook(book) {
		this.books.push(book);
	}

	// Réinitialiser la liste des livres
	resetBooks() {
		this.books = [];
	}
}

// Fonctions à exporter pour les tests
const bookListInstance = new BookList();

function ajouterLivre(livre) {
	bookListInstance.addBook(livre);
}

function getLivres() {
	return bookListInstance.getBooks();
}

function resetLivres() {
	bookListInstance.resetBooks();
}

module.exports = { ajouterLivre, getLivres, resetLivres };
// myBooks.resetBooks();
// myBooks.displayBooks();
