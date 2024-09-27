import React from 'react';
import PropTypes from 'prop-types';
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaThumbsUp } from 'react-icons/fa';
import '../styles/tagsAndShare.css'; 

function TagsAndShare({ tags, likes }) {
  return (
    <div className="tags-share-container">
      <div className="tags-container">
        <span className="tags-label">TAGS:</span>
        {tags.map((tag, index) => (
          <span key={index} className="tag-item">
            {tag}
          </span>
        ))}
      </div>

      <div className="share-icons">
      <FaWhatsapp className="share-icon" />
        <FaFacebook className="share-icon" />
        <FaTwitter className="share-icon" />
        <FaLinkedin className="share-icon" />
        <FaEnvelope className="share-icon" />
      </div>

      <div className="likes-button">
        <FaThumbsUp className="like-icon" />
        <span>{likes}</span>
      </div>
    </div>
  );
}

TagsAndShare.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  likes: PropTypes.number.isRequired,
};

export default TagsAndShare;
