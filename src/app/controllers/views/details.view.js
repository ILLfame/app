import React from 'react';


export const Details = ({ data = [], id }) => {
  const item = data.find(item => item.id === +id);

  if (!item) {
    return <h2>Not Found</h2>;
  }

  const { title, description, images } = item;

  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      {images.map(({ thumbnail_url, id }) => (
        <img
          key={id}
          alt={title}
          src={thumbnail_url}
        />
      ))}
    </>
  );
};
