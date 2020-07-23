import React, { memo } from 'react';
import { PropTypes } from 'prop-types';

export const Categories = memo(({ activeCategory, items, onClick }) => {
  return (
    <div>
      <div className='categories'>
        <ul>
          <li
            className={activeCategory === null ? 'active' : ''}
            onClick={() => onClick(null)}
          >
            Все
          </li>
          {items &&
            items.map((name, index) => {
              return (
                <li
                  className={activeCategory === index ? 'active' : ''}
                  onClick={() => onClick(index)}
                  key={`${name}_${index}`}
                >
                  {name}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};
