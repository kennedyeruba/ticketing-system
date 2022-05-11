import Ticket from "../models/ticket.models"

export function createNewTicket(): Ticket {
    return {
        id: '',
        creationDate: '',
        title: '',
        description: '',
        assignee: {
          id: '',
          firstName: '',
          lastName: '',
          email: ''
        },
        status: TicketStatus.OPEN
    }
}

export enum TicketStatus{
  OPEN = "OPEN", 
  CLOSED = "CLOSED", 
  BLOCKED = "BLOCKED"
} 