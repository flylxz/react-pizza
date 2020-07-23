import React from 'react';
import ContentLoader from 'react-content-loader';

export const PizzaLoadingBlock = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={457}
    viewBox='0 0 320 520'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='130' cy='130' r='130' />
    <rect x='0' y='280' rx='6' ry='6' width='280' height='25' />
    <rect x='0' y='320' rx='6' ry='6' width='280' height='82' />
    <rect x='0' y='420' rx='6' ry='6' width='90' height='26' />
    <rect x='125' y='410' rx='30' ry='30' width='150' height='45' />
  </ContentLoader>
);
