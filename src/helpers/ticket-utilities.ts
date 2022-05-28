import Ticket from "../models/ticket.model"
import User from "../models/user.model"

export function createTicket(
  title: string, 
  description: string, 
  assignee?: User
): Ticket {
  return {
    id: '',
    creationDate: '',
    title,
    description,
    assignee,
    status: TicketStatus.OPEN
  }
}

export enum TicketStatus{
  OPEN = "OPEN", 
  CLOSED = "CLOSED", 
  BLOCKED = "BLOCKED"
} 