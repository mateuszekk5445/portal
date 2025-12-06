import React from 'react';

const Naglowek = ({ tytulPortalu }) => {
  return (
    <header className="py-3 mb-5 border-bottom">
      <h1 className="display-4 text-center text-primary">{tytulPortalu}</h1>
    </header>
  );
};

export default Naglowek;