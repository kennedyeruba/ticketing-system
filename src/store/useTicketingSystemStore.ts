import create from 'zustand'
import Ticket from '../models/ticket.models'

interface TicketingSystemState {
    tickets: Ticket[]
    sideBarAnchor: boolean
    selectedTicket: object
    activePageView: string
    ticketDialogStatus: boolean
    ticketViewType: string
    toggleTicketDialog: (status: boolean) => void
    setDashboardViewType: (_ticketViewType: string) => void
    createNewTicket: (ticket: Ticket) => void
    retrieveTickets: () => void,
    toggleSideBar: (value: boolean) => void
    setActivePageView: (_selectedPageView: string) => void
}

let useTicketingSystemStore = create<TicketingSystemState>(set => ({
    tickets: [],
    sideBarAnchor: false,
    selectedTicket: {},
    activePageView: 'tickets',
    ticketDialogStatus: false,
    ticketViewType: 'card',
    toggleTicketDialog: (value) => set({ ticketDialogStatus: value }),
    setDashboardViewType: (_ticketViewType) => set({ ticketViewType: _ticketViewType }),
    createNewTicket: async ticket => {
        const response = await fetch('https://localhost:6000/api/v1/tickets', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticket)
        })
        const newTicket = await response.json()
        set(state => ({ tickets: [newTicket, ...state.tickets] }))
    },
    retrieveTickets: async () => {
        const response = await fetch('https://localhost:6000/api/v1/tickets')
        const tickets = await response.json()
        set({ tickets })
    },
    toggleSideBar: (value) => set({ sideBarAnchor: value }),
    setActivePageView: (_selectedPageView) => set({ activePageView: _selectedPageView })
}))

export default useTicketingSystemStore