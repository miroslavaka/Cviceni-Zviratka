import React from 'react';
import './style.css';

const AnimalDetail = ({ animals, selectedAnimal }) => {
  //const selectedAnimalItems = [];

  const animal = {
    foto: '',
    nazov: '',
    latinskynazov: '',
    popis: '',
    domovina: '',
    biotop: '',
    potrava: '',
    velkost: '',
  };
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].nazev == selectedAnimal) {
      //selectedAnimalItems.push(animals[i]);
      animal.foto = animals[i].foto;
      animal.nazov = animals[i].nazev;
      animal.latinskynazov = animals[i].nazevLatinsky;
      animal.popis = animals[i].popis;
      animal.domovina = animals[i].domovina;
      animal.biotop = animals[i].biotop;
      animal.potrava = animals[i].potrava;
      animal.velkost = animals[i].velikost;
      console.log(animal);
    }
  }
  return (
    <div className="detail">
      <div className="detail__obsah">
        <div className="detail__hlavicka">
          <img className="detail__foto" src={animal.foto} alt="xxx" />
          <div className="detail__titulek">
            <h2 className="detail__nazev">
              <span>{animal.nazov}</span>
            </h2>
            <div className="detail__latinsky">
              <span>{animal.latinskynazov}</span>
            </div>
          </div>
        </div>

        <div className="detail__info">
          <p className="detail__popis"> {animal.popis}</p>

          <div className="detail__udaje">
            <div className="detail__udaj">
              <h3>Domovina</h3>
              <p> {animal.domovina} </p>
            </div>
            <div className="detail__udaj">
              <h3>Biotop</h3>
              <p>{animal.biotop} </p>
            </div>
            <div className="detail__udaj">
              <h3>Potrava</h3>
              <p> {animal.potrava}</p>
            </div>
            <div className="detail__udaj">
              <h3>Velikost</h3>
              <p>{animal.velkost}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;
