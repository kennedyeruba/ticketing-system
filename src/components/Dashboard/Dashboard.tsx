import React from 'react'
import { Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material'
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material'

import Navbar from './navbar/Navbar'
import CardView from './CardView/CardView'
import DashboardActionBar from './DashboardActionBar/DashboardActionBar'

export default function Dashboard() {

  return (
    <Box className="w-full h-screen">
        <Navbar />
        <div className='w-4/6 mx-auto'>
          <DashboardActionBar />
          <CardView />
        </div>
    </Box>
  )
}
