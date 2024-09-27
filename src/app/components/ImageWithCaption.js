import React from 'react';
import PropTypes from 'prop-types';
import '../styles/imageWithCaption.css';

function ImageWithCaption({ imageSrc, altText, caption, source, maxWidth }) {
  return (
    <div className="image-caption-container">
      <img 
        src={imageSrc} 
        alt={altText} 
        className="image-rounded" 
        style={{ maxWidth: maxWidth, width: '100%' }}
      />
      <div className="caption-text">
        <p className="caption-title">{caption}</p>
        <p className="caption-source">FONTE: {source}</p>
      </div>
    </div>
  );
}

ImageWithCaption.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  caption: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  maxWidth: PropTypes.string,
};

ImageWithCaption.defaultProps = {
  altText: 'Image with caption',
  maxWidth: '800px',
};

export default ImageWithCaption;
