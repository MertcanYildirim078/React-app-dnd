import './App.css';
import React from 'react';
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Charlist from './Pages/Charlist';
import CACP from './Pages/CAC';
import Argus from './Characters/Argus';

function App() {
  return (
    <div className="App"> <Router><Routes>
      <Route exact path= '/' element= {<Home/>} />
      <Route path='Charlist' element= {<Charlist/>} />
      <Route path='CACP' element= {<CACP/>} />
      <Route path='Charlist/Argus' element= {<Argus/>} />
    </Routes> </Router>
     
      
    </div>
  );
}

export default App;