import React from 'react';
import Animal from './../Animal';

const AnimalList = ({ animals, chooseAnimal }) => {
  return (
    <div className="zvirata">
      {animals.map((element) => (
        <Animal
          key={element.id}
          name={element.nazev}
          image={element.foto}
          latin={element.nazevLatinsky}
          chooseAnimal={chooseAnimal}
        />
      ))}
    </div>
  );
};

export default AnimalList;
