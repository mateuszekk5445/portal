import React, { useState, useEffect } from 'react';
import Header from './Header';
import Card from './Card';
import ButtonMsg from './ButtonMsg';
import './App.css';

const danePlywackie = [
  { tytul: "Kraul", opis: "Najszybszy i najpopularniejszy styl, wymaga koordynacji rąk i nóg." },
  { tytul: "Styl Klasyczny (Żabka)", opis: "Styl wolniejszy, ale efektywny na długie dystanse, łatwy do nauki." },
  { tytul: "Styl Grzbietowy", opis: "Pływanie na plecach, ułatwia oddychanie i redukuje napięcie szyi." },
  { tytul: "Styl Motylkowy", opis: "Najtrudniejszy technicznie, ale najbardziej widowiskowy, znany jako Delfin." },
  { tytul: "Nawrót Koziołkowy", opis: "Dynamiczny obrót pod wodą używany do zmiany kierunku w stylu dowolnym." },
  { tytul: "Deska do Pływania", opis: "Narzędzie treningowe do koncentracji na pracy nóg." },
  { tytul: "Basen 25m", opis: "Standardowa długość basenu używana w zawodach krótkiego toru." },
  { tytul: "Płetwy Treningowe", opis: "Wspomagają rozwój siły nóg i poprawiają elastyczność stawu skokowego." },
  { tytul: "Pływanie Open Water", opis: "Pływanie na otwartych akwenach, wymaga umiejętności nawigacji." },
  { tytul: "Praca Nóg Kraulem", opis: "Utrzymywanie równowagi i minimalne generowanie oporu." },
  { tytul: "Skok Startowy", opis: "Element kluczowy w wyścigach, musi być dynamiczny i niski." },
  { tytul: "Trening HIIT", opis: "Krótkie, intensywne interwały na basenie dla poprawy wydolności." },
];

const mottoDnia = [
  "Woda to jedyne miejsce, w którym mogę latać.", 
  "Pływanie to 90% techniki i 10% siły.", 
  "Najważniejsza jest regularność, a nie prędkość.",
  "Chlor to Twój nowy zapach.",
];

const StronaGlowna = () => {
  const [szukanaFraza, ustawSzukanaFraza] = useState('');
  const [przefiltrowaneElementy, ustawPrzefiltrowaneElementy] = useState(danePlywackie);
  const [imieUzytkownika, ustawImieUzytkownika] = useState('');
  const [dzienneMotto, ustawDzienneMotto] = useState('');

  useEffect(() => {
    const zapisaneImie = localStorage.getItem('userName');
    if (zapisaneImie) {
      ustawImieUzytkownika(zapisaneImie);
    }
    
    const losowyIndex = Math.floor(Math.random() * mottoDnia.length);
    ustawDzienneMotto(mottoDnia[losowyIndex]);
    
    const losowyKolor = Math.floor(Math.random() * 0x888888 + 0xAAAAAA).toString(16);
    document.body.style.backgroundColor = `#${losowyKolor}`;

  }, []);

  const zmienSzukanie = (zdarzenie) => {
    const fraza = zdarzenie.target.value.toLowerCase();
    ustawSzukanaFraza(fraza);

    const nowaPrzefiltrowanaLista = danePlywackie.filter(element =>
      element.tytul.toLowerCase().includes(fraza)
    );
    ustawPrzefiltrowaneElementy(nowaPrzefiltrowanaLista);
  };

  return (
    <div className="container my-5">
      <Header tytulPortalu="Portal o Pływaniu i Technice Wodnej" /> 
      
      <div className="d-flex justify-content-center mb-4">
        <ButtonMsg imieUzytkownika={imieUzytkownika} ustawImieUzytkownika={ustawImieUzytkownika} />
      </div>
      
      <p className="fun-fact alert alert-info p-3 text-center mb-4">Motto dnia: **{dzienneMotto}**</p>
      
      <section className="main-content">
        <div className="mb-4 shadow-sm rounded">
            <input
              type="text"
              className="form-control"
              placeholder="Szukaj stylu lub pojęcia..." 
              value={szukanaFraza}
              onChange={zmienSzukanie}
            />
        </div>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {przefiltrowaneElementy.length > 0 ? (
            przefiltrowaneElementy.map(element => (
              <Card key={element.tytul} tytul={element.tytul} opis={element.opis} />
            ))
          ) : (
            <p className="alert alert-warning">Brak wyników dla hasła: **{szukanaFraza}**</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default StronaGlowna;