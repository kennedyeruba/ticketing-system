import { useState } from 'react'
import { Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material'
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material'

import Navbar from './NavBar/Navbar'
import CardView from './CardView/CardView'
import DashboardActionBar from './DashboardActionBar/DashboardActionBar'
import AddTicket from '../Dashboard/AddTicket/AddTicket'
import ListView from './ListView/ListView'

export default function Dashboard() {

  const [ticketDialogStatus, setTicketDialogStatus] = useState(false)
  const [viewType, setViewType] = useState(() => 'card')

  const onTicketDialogChange = () => {
    setTicketDialogStatus(true)
  }

  const onViewTypeChange = (_viewType: string) => {
    setViewType(_viewType)
  }

  return (
    <Box className="w-full h-screen">
        <Navbar />
        <div className='w-4/6 mx-auto'>
          <DashboardActionBar onTicketDialogChange={onTicketDialogChange} onViewTypeChange={onViewTypeChange}/>
          <AddTicket dialogStatus={ticketDialogStatus}/>
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
