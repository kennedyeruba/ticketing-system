import Ticket from "../models/ticket.models"

export function createTicket(title: string, description: string, assigneeName: string): Ticket {
    return {
        id: '',
        creationDate: '',
        title,
        description,
        assignee: {
          id: '',
          firstName: assigneeName,
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