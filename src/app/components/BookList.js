import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard'; 
import '../styles/bookList.css'; 

function BookList({ maxBooks }) {
  const [books, setBooks] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=HARRY%20POTTER');
        const booksData = response.data.items.map(item => {
          const { title, authors, imageLinks } = item.volumeInfo;
          return {
            title: title,
            author: authors ? authors[0] : 'Autor desconhecido',
            imageUrl: imageLinks ? imageLinks.thumbnail : 'https://via.placeholder.com/128x195?text=No+Image',
          };
        });
        setBooks(booksData);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar os livros.');
        setLoading(false);
      }
    };

    fetchBooks(); 
  }, []);

  if (loading) return <p>Carregando livros...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="book-list">
      {books.slice(0, maxBooks).map((book, index) => ( 
        <BookCard 
          key={index} 
          title={book.title} 
          author={book.author} 
          imageUrl={book.imageUrl} 
        />
      ))}
    </div>
  );
}

export default BookList;
