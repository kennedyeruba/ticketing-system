import React, { useState } from 'react';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  const [auth, setAuth] = useState(false)

  const onAuthEvent = () => {
    setAuth(!auth)
  }
  return (
    <BrowserRouter>
      <div className="App">
     {
       auth ? (
        <Login onAuth={onAuthEvent}/>
       ) : (
         <Dashboard />
       )
     }
    </div>
    </BrowserRouter>
  );
}

export default App;
