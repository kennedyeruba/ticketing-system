import { useEffect, useState } from 'react'
import useTicketingSystemStore from '../../store/useTicketingSystemStore'

import { Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material'
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material'

import Navbar from './NavBar/Navbar'
import CardView from './CardView/CardView'
import DashboardActionBar from './DashboardActionBar/DashboardActionBar'
import AddTicket from '../Dashboard/AddTicket/AddTicket'
import ListView from './ListView/ListView'

export default function Dashboard() {
  const ticketingSystemStore = useTicketingSystemStore
  const viewType = ticketingSystemStore(state => state.viewType)

  return (
    <Box className="w-full h-screen">
        <Navbar />
        <div className='w-4/6 mx-auto'>
          <DashboardActionBar />
          <AddTicket />
          {
            viewType == 'card' ? (
              <CardView />
            ) : (
              <ListView />
            )
          }
        </div>
    </Box>
  )
}
