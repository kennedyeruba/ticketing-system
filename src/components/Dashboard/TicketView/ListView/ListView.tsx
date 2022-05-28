import { useEffect } from 'react'
import ListItem from './ListItem/ListItem'
import useTicketingSystemStore from '../../../../store/useTicketingSystemStore'

export default function ListView() {
  const ticketingSystemStore = useTicketingSystemStore
  const tickets = ticketingSystemStore(state => state.tickets)

  useEffect(() => {
    ticketingSystemStore.getState().retrieveTickets()
  }, [])

  return (
    <div>
      {
        tickets.map(ticket => (
          <ListItem key={ticket.id} data={ticket}/>
        ))
      }
    </div>
  )
}
