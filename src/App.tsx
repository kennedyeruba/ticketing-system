import React, { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import useTicketingSystemStore from './store/useTicketingSystemStore';
import SnackBar from './components/Dashboard/SnackBar/SnackBar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import User from './models/user.model';

function App() {
  const ticketingSystemStore = useTicketingSystemStore
  const loginStatus = ticketingSystemStore(state => state.loginStatus)
  const activeUser = ticketingSystemStore(state => state.activeUser)

  useEffect(() => {
    const activeUser = localStorage.getItem('active-user') as User
    ticketingSystemStore.getState().setActiveUser(activeUser)
  }, [])

  return (
    <Router>
      <SnackBar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
