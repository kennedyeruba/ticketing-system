import create from 'zustand'
import Ticket from '../models/ticket.models'

interface TicketingSystemState {
    tickets: Ticket[]
    selectedTicket: object
    ticketDialogStatus: boolean
    viewType: string
    toggleTicketDialog: (status: boolean) => void
    setDashboardViewType: (_viewType: string) => void
    createNewTicket: (ticket: Ticket) => void
}

let useTicketingSystemStore = create<TicketingSystemState>(set => ({
    tickets: [],
    selectedTicket: {},
    ticketDialogStatus: false,
    viewType: 'card',
    toggleTicketDialog: (status) => set({ ticketDialogStatus: status }),
    setDashboardViewType: (_viewType) => set({ viewType: _viewType }),
    createNewTicket: async ticket => {
        const response = await fetch('https://localhost:6000/api/v1/ticket')
        const newTicket = await response.json()
        set(state => ({ tickets: [newTicket, ...state.tickets] }))
    }
}))

export default useTicketingSystemStore