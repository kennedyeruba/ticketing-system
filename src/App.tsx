import React, { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import useTicketingSystemStore from './store/useTicketingSystemStore';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  const ticketingSystemStore = useTicketingSystemStore
  const loginStatus = ticketingSystemStore(state => state.loginStatus)

  useEffect(() => {
    console.log('From App')
  }, [loginStatus])

  return (
    <BrowserRouter>
      <div className="App">
     {
       loginStatus ? (
        <Login />
       ) : (
         <Dashboard />
       )
     }
    </div>
    </BrowserRouter>
  );
}

export default App;
