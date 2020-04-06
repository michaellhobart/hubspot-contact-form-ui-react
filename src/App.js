import React, { useState, useEffect } from 'react';

import axios from 'axios';

import GlobalContext from './context/GlobalContext'

import TopNav from './components/topnav/TopNav'
import MainContent from './components/maincontent/MainContent'


function App() {
  // const [ barberList, setBarberList ] = useState([])







  return (
    <GlobalContext.Provider value={{

     }}>
      <div className="App">
        <TopNav />
        <MainContent />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
