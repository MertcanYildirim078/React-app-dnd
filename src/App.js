import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'
import CharacterList from './Pages/CharacterList';
import CharacterForm from './Pages/CharacterForm';
import Character from './Pages/Character';
import Home from './Pages/Home';
import Weaver from 'weaver-sdk';
import './App.css';

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
    <div className="App">
      <Router>
        <Routes>
          <Route exact path= '/' element= {<Home/>} />
          <Route path='characters' element= {<CharacterList/>} />
          <Route path='characters/:id' element= {<Character/>} />
          <Route path='create-character/:id' element= {<CharacterForm/>} />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;