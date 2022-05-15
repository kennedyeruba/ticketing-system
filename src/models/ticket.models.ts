import User from './user.model'
import { TicketStatus } from '../helpers/ticket-utilities'

type Ticket = {
    id?: string
    creationDate?: string
    title: string
    description: string
    assignee: User
    status: TicketStatus
}

export default Ticket