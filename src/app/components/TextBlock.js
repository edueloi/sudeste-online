import React from 'react';
import PropTypes from 'prop-types';
import '../styles/textBlock.css';

function TextBlock({ content }) {
  return (
    <div className="text-block">
      <p>{content}</p>
    </div>
  );
}

TextBlock.propTypes = {
  content: PropTypes.string.isRequired,
};

export default TextBlock;
