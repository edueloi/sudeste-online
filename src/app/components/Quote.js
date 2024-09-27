import React from 'react';
import PropTypes from 'prop-types';
import '../styles/quote.css';

function Quote({ text }) {
  return (
    <div className="quote-container">
      <span className="quote-start">“</span>
      <p className="quote-text">{text}</p>
      <span className="quote-end">”</span>
    </div>
  );
}

Quote.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Quote;
