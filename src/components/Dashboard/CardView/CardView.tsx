import React, {useState, useEffect} from 'react'
import Ticket from '../../../models/ticket.models'
import { Box } from '@mui/material'
import CardItem from './CardItem/CardItem'
import { createNewTicket } from '../../../helpers/ticket-utilities'

export default function CardView() {
  const [tickets, setTickets] = useState<Ticket[]>([])

  useEffect(() => {
    const newTickets: Ticket[] = [
      createNewTicket()
    ]
    setTickets(newTickets)
  }, [])

  const cardViewStyle = {
    container: {
      width: '100%',
      margin: '0 auto',
      minHeight: '90vh'
    }
  }
  
  return (
   <Box sx={cardViewStyle.container}>
    {
      tickets.map(ticket => (
        <CardItem data={ticket}/>
      ))
    }
   </Box>
  )
}
