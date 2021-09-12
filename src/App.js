import './App.scss'
import React, {useEffect} from 'react';
import {useSelector} from "react-redux";

import {Container} from "reactstrap";

import PreStart from "./components/modules/PreStart";
import Start from "./components/modules/Start";
import Header from "./components/header/Header";
import Island from "./components/island/Island";

import useBodyClass from "./functions/useBodyClass";
import {initGA} from "./functions/tracking";



function App() {
  // ! hier KEINE states abfragen, die alles neu rendern würden!

  const activeModule = useSelector(state => state.personal.module)

  const appliedTheme = useSelector(state => state.personal.theme) || 'theme-auto'
  useBodyClass(appliedTheme)

  useEffect(() => {
    initGA('UA-12630660-4')
    console.log('initGA')
    return () => {
      console.log('initGA - remove')
    };
  }, []);


  return (
    <div className="App">
      <Container fluid>

        <Header activeModule={activeModule}/>
        {activeModule === 'welcome' && <PreStart/>}
        {activeModule === 'start' && <Start/>}
        {activeModule === 'islands' && <Island/>}

{/*
        {island && <Island island={island}/>}
        {!island && ':) create your first island :)'
          // ':( activeIsland missing :('
        }
*/}

      </Container>
    </div>
  );
}

export default App;
