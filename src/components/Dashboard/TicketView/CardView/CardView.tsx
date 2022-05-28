import React, {useState, useEffect} from 'react'
import Ticket from '../../../../models/ticket.model'
import { Box, Grid } from '@mui/material'
import CardItem from './CardItem/CardItem'
import useTicketingSystemStore from '../../../../store/useTicketingSystemStore'

export default function CardView() {
  const ticketingSystemStore = useTicketingSystemStore
  const tickets = ticketingSystemStore(state => state.tickets)
  // const [tickets, setTickets] = useState<Ticket[]>([])

  useEffect(() => {
    ticketingSystemStore.getState().retrieveTickets()
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
          <Grid key={ticket.id} item xs={4}>
            <CardItem data={ticket}/>
          </Grid>
        ))
      }
     </Grid>
   </Box>
  )
}
