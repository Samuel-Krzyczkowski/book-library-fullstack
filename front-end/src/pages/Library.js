import "../index.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Book from "../components/Book";
import AddBook from "../components/AddBook";
import EditBook from "../components/EditBook";
import axios from "axios";

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000'
})

function Library() {
  const [books, setBooks] = useState([]);
  const [isChanged, setisChanged] = useState(false);
  
  useEffect(() => {
    api.get('books/').then((response) => {
      setBooks(response.data)
  });
  }, [isChanged]);
  
  
  function updateBook(id, newTitle, newAuthor, newYear, newCover) {
    const updatedBook = books.map((book) => {
      if (id === book.id) {
        api.put('books/'.concat(id), {
          title: newTitle,
          author: newAuthor,
          year: newYear,
          cover: newCover
        })
      }
      return book;
    });
    setBooks(updatedBook);
    setisChanged(!isChanged);
  }


  function newBook(title, author, year, cover) {
    api.post("books/", {
      id: uuidv4(),
      title: title,
      author: author,
      year: year,
      cover: cover,
    })
    .then((response) => {
      console.log(response.data);
      setisChanged(!isChanged);
    });
  }

  function deleteBook(id) {
    const updatedBook = books.map((book) => {
      if (id === book.id) {
        api.delete('books/'.concat(id))
      }
      return book;
    });
    setBooks(updatedBook);
    setisChanged(!isChanged);
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {books.map((book) => {
          const editBook = (
            <EditBook
              id={book.id}
              title={book.title}
              author={book.author}
              year={book.year}
              cover={book.cover}
              updateBook={updateBook}
              deleteBook={deleteBook}
            />
          );

          return (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              year={book.year}
              cover={book.cover}
              editBook={editBook}
            />
          );
        })}
      </div>
      <AddBook newBook={newBook} />
    </div>
  );
}

export default Library;
