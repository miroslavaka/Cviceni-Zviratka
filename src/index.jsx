import React, { useState } from 'react';
import { useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {
  const [animal, setAnimal] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState('Slon africký');

  const fetchAnimals = () => {
    fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
      .then((response) => response.json())
      /*  .then((data) =>  setAnimal(data.zvirata)); */
      .then((animal) => setAnimal(animal.zvirata));
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  const chooseAnimal = (selectedAnimal) => {
    setSelectedAnimal(selectedAnimal);
    console.log('selectedAnimal: ' + selectedAnimal);
  };
  return (
    <>
      <h1>Zvířátka v ZOO</h1>
      <div className="container">
        {animal && <AnimalList animals={animal} chooseAnimal={chooseAnimal} />}

        {/*  {selectedAnimal != '' ? (
          <AnimalDetail animals={animal} selectedAnimal={selectedAnimal} />
        ) : null} */}
        <AnimalDetail animals={animal} selectedAnimal={selectedAnimal} />
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
