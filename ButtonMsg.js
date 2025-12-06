import React from 'react';

const PrzyciskWiadomosc = ({ imieUzytkownika, ustawImieUzytkownika }) => {
  const pokazSie = () => {
    const noweImie = prompt("Jak masz na imię?");
    if (noweImie) {
      localStorage.setItem('userName', noweImie);
      ustawImieUzytkownika(noweImie);
    }
  };

  return (
    <div className="welcome-section">
      {imieUzytkownika ? (
        <p className="lead m-0 text-success fw-bold">Witaj ponownie, **{imieUzytkownika}**!</p>
      ) : (
        <button 
          onClick={pokazSie} 
          className="btn btn-primary shadow-sm"
        >
          Przedstaw się
        </button>
      )}
    </div>
  );
};

export default PrzyciskWiadomosc;