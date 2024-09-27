import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';
import '../styles/articleCardList.css';

function ArticleCardList({ articles, defaultLayout, align, cardSize: propCardSize }) {
  const [layout, setLayout] = useState(defaultLayout);
  const [cardSize, setCardSize] = useState(propCardSize || 'large'); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setLayout('vertical');
        if (!propCardSize) setCardSize('small');
      } else {
        setLayout(defaultLayout);
        if (!propCardSize) setCardSize('large');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [defaultLayout, propCardSize]);

  return (
    <div className={`article-card-list ${layout === 'vertical' ? 'vertical-layout-container' : 'horizontal-layout-container'}`}>
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          title={article.title}
          description={article.description}
          date={article.date}
          readingTime={article.readingTime}
          likes={article.likes}
          imageUrl={article.imageUrl}
          align={align}
          cardSize={propCardSize || cardSize}
        />
      ))}
    </div>
  );
}

ArticleCardList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    readingTime: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
  })).isRequired,
  defaultLayout: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right']).isRequired,
  cardSize: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default ArticleCardList;
