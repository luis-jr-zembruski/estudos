/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

console.log(`Contém ${booksByCategory.length} categorias de livros`)

booksByCategory.map(category => {
  console.log(`A categoria ${category.category} contem ${category.books.length} livros`)
})

console.log(`A quantidade de autores é : ${authors().length}`)

function authors() {
  let author = [];

  booksByCategory.map(category => {
    category.books.map(book => {
      if (author.indexOf(book.author) == -1) {
        author.push(book.author)
      }
    })
  })

  return author
}


console.log(`Livros do Autor: ${findBooksByAuthor('Augusto Cury').join(", ")}`);

function findBooksByAuthor(author) {
  let books = [];

  booksByCategory.map(category => {
    category.books.map(book => {
      if (book.author == author) {
        books.push(book.title)
      }
    })
  })

  return books
}