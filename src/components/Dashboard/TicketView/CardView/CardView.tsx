import React, {useState, useEffect} from 'react'
import Ticket from '../../../../models/ticket.model'
import { Box, Grid } from '@mui/material'
import CardItem from './CardItem/CardItem'
import useTicketingSystemStore from '../../../../store/useTicketingSystemStore'
import { display } from '@mui/system'

export default function CardView() {
  const ticketingSystemStore = useTicketingSystemStore
  const tickets = ticketingSystemStore(state => state.tickets)
  // const [tickets, setTickets] = useState<Ticket[]>([])

  useEffect(() => {
    ticketingSystemStore.getState().retrieveTickets()
  }, [])
  
  return (
   <div className="card-view-container">
     {
        tickets.map(ticket => (
          <CardItem key={ticket.id} data={ticket}/>
        ))
      }
   </div>
  )
}
