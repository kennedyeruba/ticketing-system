import { AlertColor } from '@mui/material/Alert/Alert'
import create from 'zustand'
import Ticket from '../models/ticket.model'
import User from '../models/user.model'

interface ISnackBar {
    severity?: AlertColor
    message?: string
    visible: boolean
}

interface TicketingSystemState {
    loginStatus: boolean
    tickets: Ticket[]
    users: User[]
    sideBarAnchor: boolean
    selectedTicket: object
    activePageView: string
    ticketDialogStatus: boolean
    userDialogStatus: boolean
    ticketViewType: string
    snackBarStatus: ISnackBar
    setLoginStatus: (status: boolean) => void
    toggleTicketDialog: (status: boolean) => void
    toggleUserDialog: (status: boolean) => void
    toggleSnackBarStatus: (status: ISnackBar) => void
    setDashboardViewType: (_ticketViewType: string) => void
    createNewTicket: (ticket: Ticket) => void
    createNewUser: (user: User) => void
    retrieveTickets: () => void,
    retrieveUsers: () => void,
    toggleSideBar: (value: boolean) => void
    setActivePageView: (_selectedPageView: string) => void
    deleteUser: (id: string) => void
}

let useTicketingSystemStore = create<TicketingSystemState>(set => ({
    loginStatus: true,
    tickets: [],
    users: [],
    sideBarAnchor: false,
    selectedTicket: {},
    activePageView: 'tickets',
    ticketDialogStatus: false,
    userDialogStatus: false,
    ticketViewType: 'card',
    snackBarStatus: {
        visible: false
    },
    setLoginStatus: status => set({ loginStatus: status }),
    toggleTicketDialog: status => set({ ticketDialogStatus: status }),
    toggleUserDialog: (status) => set({ userDialogStatus: status }),
    toggleSnackBarStatus: (status) => set({ snackBarStatus: status }),
    setDashboardViewType: (_ticketViewType) => set({ ticketViewType: _ticketViewType }),
    createNewTicket: async ticket => {
        const response = await fetch('http://localhost:8095/api/v1/tickets', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticket)
        })
        const newTicket = await response.json()
        set(state => ({ tickets: [newTicket, ...state.tickets] }))
        set({ snackBarStatus: { severity: 'success', message: 'Ticket added successfully', visible: true } })
        console.log('New Ticket created: ', newTicket)
    },
    createNewUser: async user => {
        const response = await fetch('http://localhost:8095/api/v1/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const newUser = await response.json()
        set(state => ({ users: [newUser, ...state.users] }))
        set({ snackBarStatus: { severity: 'success', message: 'User added successfully', visible: true } })
        console.log('New User created: ', newUser)
    },
    retrieveTickets: async () => {
        const response = await fetch('http://localhost:8095/api/v1/tickets')
        const tickets = await response.json()
        set({ tickets })
    },
    retrieveUsers: async () => {
        const response = await fetch('http://localhost:8095/api/v1/users')
        const users = await response.json()
        set({ users })
        console.log('Users retrieved: ', users)
    },
    toggleSideBar: value => set({ sideBarAnchor: value }),
    setActivePageView: _selectedPageView => set({ activePageView: _selectedPageView }),
    deleteUser: id => {
        console.log(id)
    }
}))

export default useTicketingSystemStore