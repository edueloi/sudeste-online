import React from "react";
import PropTypes from "prop-types";
import { FaClock, FaRegCalendarAlt } from "react-icons/fa";
import "../styles/articleInfo.css";

function ArticleInfo({ category, readingTime, date, categoryLink, categoryColor, categoryHoverColor }) {
  return (
    <div className="article-info-container">
      <span className="article-category">
        <span className="category-label">CATEGORIA: </span>
        <a href={categoryLink || "#"} style={{ color: categoryColor }}>
          {category}
        </a>
      </span>

      <div className="article-details">
        <div className="detail-item">
          <FaClock className="icon" />
          <span>{readingTime} MIN LEITURA</span>
        </div>

        <div className="detail-item">
          <FaRegCalendarAlt className="icon" />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}

ArticleInfo.propTypes = {
  category: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  categoryLink: PropTypes.string,
  categoryColor: PropTypes.string,
  categoryHoverColor: PropTypes.string,
};

ArticleInfo.defaultProps = {
  categoryColor: "#007BFF",  
  categoryHoverColor: "#0056b3", 
};

export default ArticleInfo;
