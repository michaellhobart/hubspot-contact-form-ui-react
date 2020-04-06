import React, { useState, useEffect } from 'react';
// import './App.css';
import { Button } from 'reactstrap';

import axios from 'axios';


import GlobalContext from './context/GlobalContext'

import TopNav from './components/topnav/TopNav'


function App() {
  // const [ barberList, setBarberList ] = useState([])
  const [ emailsList, setEmailsList ] = useState([])

  useEffect( () => {
    const data = {
      // barbers: 'https://wu580hd8k5.execute-api.us-east-1.amazonaws.com/dev/barbers',
      emails: 'https://t9r31l27md.execute-api.us-east-1.amazonaws.com/dev/contacts/emails'
    }

    Promise.all(
      Object.entries( data )
      .map( data => {
        console.log(data[1])
        return axios
        .get(data[1])
        .catch( e => {
          throw new Error(`Failed GET Req for ${data[0]}`, e);
        })
      })
    )
    .then( results => {
      // setBarberList(results[0].data)
      setEmailsList(results[0].data)
    })
    .catch( err => console.log(err))
  }, [])






  return (
    <GlobalContext.Provider value={{
      emails:emailsList
     }}>
      <div className="App">
        <TopNav />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
