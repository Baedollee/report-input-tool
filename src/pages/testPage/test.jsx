import React from 'react';

const test = () => {
  const address = {
    city: 'seoul',
    state: 'SY',
    zipcode: '20222',
  };
  const { city, state } = address;

  console.log(city + ', ' + state);

  return <div>test</div>;
};

export default test;
