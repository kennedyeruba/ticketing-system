import { useEffect, useState } from 'react';
import useTicketingSystemStore from '../../store/useTicketingSystemStore';

import { Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material';

import Navbar from './NavBar/Navbar'
import DashboardActionBar from './DashboardActionBar/DashboardActionBar';
import AddTicket from './TicketView/AddTicket/AddTicket';
import SideBar from './SideBar/SideBar';
import TicketView from './TicketView/TicketView';
import UserView from './UserView/UserView';
import AddUser from './UserView/AddUser/AddUser';
import SnackBar from './SnackBar/SnackBar';

export default function Dashboard() {
  const ticketingSystemStore = useTicketingSystemStore;
  const activePageView = ticketingSystemStore(state => state.activePageView);
  const [activeView, setActiveView] = useState(activePageView);

  useEffect(() => {
    setActiveView(activePageView);
  }, [activePageView])

  const displayPage = () => {
    if(activeView == 'tickets') {
        return (<TicketView />)
    }

    if(activeView == 'users') {
      return (<UserView />)
    }
  }

  return (
    <Box className="w-full h-screen dashboard-container">
        <Navbar />
        <div className='w-4/6 mx-auto'>
          <DashboardActionBar />
          <SnackBar />
          <AddTicket />
          <AddUser />
          <SideBar />
          {
            displayPage()
          }
        </div>
    </Box>
  )
}
