const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionaria',
                author: 'T. Harv Eker',
            },
            {
                title: 'O homem mais rico da Babilonia',
                author: 'George S. Clason',
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter',
            }
        ],
    },
    {
        category: 'Inteligencia Emocional',
        books: [
            {
                title: 'Você é insubistituivel',
                author: 'Algusto Cury',
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Algusto Cury',
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey',
            }
        ],
    }
]

function countCategories() {
    const totalCategories = booksByCategory.length
    console.log('Total de categorias: ', totalCategories)
    for (let category of booksByCategory) {
    console.log(`Total de livros da categoria ${category.category}: ${category.books.length}`)
    }
}

function countAuthors() {
    let authors = []
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log('Total de autores: ', authors.length)
}

function authorBooks(name) {
    let books = []
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === name) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros de ${name}: ${books.join(', ')}`)
}

countCategories()
countAuthors()
authorBooks('Algusto Cury')