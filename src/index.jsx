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
      .then((data) => /* console.log(data.zvirata) */ setAnimal(data.zvirata));
    // console.log('animal:' + animal);
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  const chooseAnimal = (selectedAnimal) => {
    setSelectedAnimal(selectedAnimal);
    console.log('selectedAnimal: ' + selectedAnimal);
    console.log(animal);
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
