import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Section from './Components/Section/Section';
import Footer from './Components/Footer/Footer';

const App = () => {

  const users = [
    {
      name: 'Miguel',
      surname: 'Nunez',
      age: 34,
      id: 1
    },
    {
      name: 'Jose',
      surname: 'Sanchez',
      age: 35,
      id: 2
    },
    { name: 'Santiago',
      surname: 'Fernandez',
      age: 32,
      id: 3
    }
  ]

  return (
    <>
      <Header />
      <Section users={users}/>
      <Footer />
    </>
  );
}

export default App;
