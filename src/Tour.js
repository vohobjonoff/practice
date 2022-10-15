/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';

const Tour = ({ name,image, info, price, }) => {
  

  return (
    <main>
      <article className='single-tour'>
      <img src={image}  />
      <h2>{name}</h2>
      <p>${price}</p>
        <p>{info}</p>
        </article>
    </main>
  )
};

export default Tour;
