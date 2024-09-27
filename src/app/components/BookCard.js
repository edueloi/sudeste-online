import React from 'react';
import PropTypes from 'prop-types';
import '../styles/bookCard.css';

function BookCard({ title, author, imageUrl }) {
  return (
    <div className="book-card">
      <img src={imageUrl} alt={title} className="book-image" />
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default BookCard;
