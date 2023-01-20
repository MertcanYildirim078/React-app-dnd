import './App.css';
import React from 'react';
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Charlist from './Pages/Charlist';
import CACP from './Pages/CAC';
import Argus from './Characters/Argus';
import { useEffect } from 'react'
import Weaver from 'weaver-sdk';
import Character from './Mock/Character';

function App() {
  
  useEffect(() => {
    const makeConnection = async () => {
      if (Weaver.instance === undefined) {
          const weaver = new Weaver();
          await weaver.connect('https://demo.weaverplatform.com/');
          await weaver.signInWithUsername('myildirim', '2it2M3m*UGup');
          await weaver.useProject('dnd');
      } else {
          Weaver.getInstance();
      }
    }
    makeConnection();
    return undefined;
  }, [])

  return (
    <div className="App"> <Router><Routes>
      <Route exact path= '/' element= {<Home/>} />
      <Route path='Charlist' element= {<Charlist/>} />
      <Route path='CACP/:id' element= {<CACP/>} />
      <Route path='Charlist/:id' element= {<Character/>} />
    </Routes> </Router>  
    </div>
  );
}

export default App;