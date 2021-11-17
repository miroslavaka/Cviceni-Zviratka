import React from 'react';
import './style.css';

const AnimalDetail = ({ animals, selectedAnimal }) => {
  const selectedAnimalItems = [];
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].nazev == selectedAnimal) {
      selectedAnimalItems.push(animals[i]);
      console.log(selectedAnimalItems);
    }
  }

  return (
    <div className="detail">
      <div className="detail__obsah">
        <div className="detail__hlavicka">
          <img
            className="detail__foto" /*src= {animals&&selectedAnimal.foto} alt="xxx" */
          />
          <div className="detail__titulek">
            <h2 className="detail__nazev">
              <span>{selectedAnimalItems.nazev}</span>
            </h2>
            <div className="detail__latinsky">
              <span> {selectedAnimalItems.latinsky}</span>
            </div>
          </div>
        </div>

        <div className="detail__info">
          <p className="detail__popis">{/* {selectedAnimal.popis} */}</p>

          <div className="detail__udaje">
            <div className="detail__udaj">
              <h3>Domovina</h3>
              <p>{/* {selectedAnimal.domovina} */}</p>
            </div>
            <div className="detail__udaj">
              <h3>Biotop</h3>
              <p>{/* {selectedAnimal.biotop} */}</p>
            </div>
            <div className="detail__udaj">
              <h3>Potrava</h3>
              <p>{/* {selectedAnimal.potrava} */}</p>
            </div>
            <div className="detail__udaj">
              <h3>Velikost</h3>
              <p>{/* {selectedAnimal.velikost} */}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;
