import React, {useState, useEffect} from 'react'
import Ticket from '../../../../models/ticket.models'
import { Box, Grid } from '@mui/material'
import CardItem from './CardItem/CardItem'
import { createTicket } from '../../../../helpers/ticket-utilities'

export default function CardView() {
  const [tickets, setTickets] = useState<Ticket[]>([])

  useEffect(() => {
    const newTickets: Ticket[] = [
      createTicket('','','')
    ]
    setTickets(newTickets)
  }, [])

  const cardViewStyle = {
    container: {
      width: '100%',
      margin: '0 auto',
      minHeight: '90vh',
      paddingTop: '20px',
    }
  }
  
  return (
   <Box sx={cardViewStyle.container}>
     <Grid container spacing={2}>
      {
        tickets.map(ticket => (
          <Grid item xs={4}>
            <CardItem data={ticket}/>
          </Grid>
        ))
      }
     </Grid>
   </Box>
  )
}
