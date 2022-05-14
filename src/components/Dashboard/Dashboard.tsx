import React from 'react'
import { Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material'
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material'

import Navbar from './NavBar/Navbar'
import CardView from './CardView/CardView'
import DashboardActionBar from './DashboardActionBar/DashboardActionBar'
import AddTicket from '../Dashboard/AddTicket/AddTicket'
import ListView from './ListView/ListView'

export default function Dashboard() {

  return (
    <Box className="w-full h-screen">
        <Navbar />
        <div className='w-4/6 mx-auto'>
          <DashboardActionBar />
          {/* <CardView /> */}
          <ListView />
        </div>
    </Box>
  )
}
