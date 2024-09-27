import React from 'react';
import { FaRegCalendarAlt, FaClock, FaThumbsUp } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../styles/articleCard.css';

function ArticleCard({ 
  title, 
  description, 
  date, 
  readingTime, 
  likes, 
  imageUrl, 
  align, 
  cardSize 
}) {

  const customStyles = typeof cardSize === 'object' 
    ? { width: cardSize.width, height: cardSize.height }
    : {}; 

  return (
    <div 
      className={`article-card ${align}-align ${typeof cardSize === 'string' ? cardSize + '-size' : ''}`} 
      style={customStyles}
    >
      {imageUrl && <img src={imageUrl} alt={title} className="article-image" />}
      <div className="article-content">
        <h2 className="article-title">{title}</h2>
        <p className="article-description">{description}</p>
        <div className="article-info">
          <div className="info-item">
            <FaRegCalendarAlt className="info-icon" />
            <span>{date}</span>
          </div>
          <div className="info-item">
            <FaClock className="info-icon" />
            <span>{readingTime} MIN LEITURA</span>
          </div>
          <div className="info-item">
            <FaThumbsUp className="info-icon" />
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readingTime: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  cardSize: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.shape({
      width: PropTypes.string,
      height: PropTypes.string,
    })
  ])
};

ArticleCard.defaultProps = {
  align: 'center',
  cardSize: 'medium',
  imageUrl: null, 
};

export default ArticleCard;
