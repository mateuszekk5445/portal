import React from 'react';

const KartaElementu = ({ tytul, opis }) => {
  return (
    <div className="col"> 
        <div className="card h-100 shadow-lg rounded-3"> 
          <div className="card-body">
            <h5 className="card-title text-success">{tytul}</h5>
            <p className="card-text text-muted">{opis}</p>
          </div>
        </div>
    </div>
  );
};

export default KartaElementu;