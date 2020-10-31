import React from 'react';
import './App.css';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

import MyHeader from "./components/Header";
import MyFooter from "./components/Footer";
import MyProfil from "./components/Profil";
import MyMain from "./components/Main";
import MySkills from "./components/Skills";
import MyEducation from "./components/Education";
import MyExperiences from "./components/Experiences";
import MyHr from "./components/Hr";
import MyFormulaire from "./components/Formulaire";


function App() {
  return (

  <Grommet theme={hpe}>
    <MyHeader/>
      <MyProfil/>
        <MySkills/>
        <MyMain/>
        <MyEducation/>
        <MyHr/>
        <MyExperiences/>
        <MyFormulaire/>
      <MyFooter/>
  </Grommet>
   
  );
}

export default App;
