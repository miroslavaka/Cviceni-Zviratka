import React from 'react';
import './style.css';

const Animal = ({ name, image, latin, chooseAnimal }) => {
  const switchAnimal = () => {
    chooseAnimal(name);
  };

  return (
    <div className="zvire" onClick={switchAnimal}>
      <div className="zvire__foto">
        <img src={image} alt="slon" />
      </div>
      <div className="zvire__popis">
        <div className="zvire__nazev">{name}</div>
        <div className="zvire__latinsky">{latin}</div>
      </div>
    </div>
  );
};

export default Animal;
