import React from 'react';
import PropTypes from 'prop-types';
import '../styles/titleWithSubtitle.css';

function TitleWithSubtitle({ title, subtitle, align }) {
  const containerStyle = {
    '--align': align,
  };

  return (
    <div className="title-subtitle-container" style={containerStyle}>
      {title && <h1 className="title">{title}</h1>}
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
}

TitleWithSubtitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']), 
};

TitleWithSubtitle.defaultProps = {
  align: 'left',
};

export default TitleWithSubtitle;
