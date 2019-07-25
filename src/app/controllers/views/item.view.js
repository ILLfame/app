import React from 'react';

import { Link } from 'react-router-dom';

const ItemView = ({ item }) => {
  const { title, description, id } = item;
  return (
    <div>
      <Link
        to={{
          pathname: `/ads/${id}`,
          state: item,
        }}
      >
        <h2>{title}</h2>
      </Link>

      <p>{description}</p>
    </div>
  );
};

export default ItemView;
