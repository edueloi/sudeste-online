import React from 'react';
import PropTypes from 'prop-types';
import '../styles/list.css';

function List({ items }) {
  const firstColumn = items.slice(0, 6);
  const secondColumn = items.slice(6);

  return (
    <div className="list-container">
      <ul>
        {firstColumn.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {secondColumn.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
