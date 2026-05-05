
const { ajouterLivre, getLivres, resetLivres } = require('../index');

describe ('BookList', () => {
    beforeEach(() => {
        resetLivres(); // Réinitialiser la liste des livres avant chaque test
    });
    
    test('ajoute un livre à la liste', () => {
        ajouterLivre('Le Petit Prince');
        expect(getLivres()).toEqual(['Le Petit Prince']);
    });

    test('retourne une liste vide par défaut', () => {
        expect(getLivres()).toEqual([]);
    });

    test('peut ajouter plusieurs livres', () => {
        ajouterLivre('1984');
        ajouterLivre('Le Seigneur des Anneaux');
        expect(getLivres()).toEqual(['1984', 'Le Seigneur des Anneaux']);
    });

    test('ajouter un livre puis reset les livres retourne une liste vide', () => {
        ajouterLivre('Harry Potter');
        resetLivres();
        expect(getLivres()).toEqual([]);
    });
    
    test.each([
  [['Livre A'], ['Livre A']],
  [['Livre B', 'Livre C'], ['Livre B', 'Livre C']],
  [[], []],
  [['Un', 'Deux', 'Trois'], ['Un', 'Deux', 'Trois']]
])('ajout de livres paramétré: %p', (input, expected) => {
  input.forEach(livre => ajouterLivre(livre));
  expect(getLivres()).toEqual(expected);
});
});


