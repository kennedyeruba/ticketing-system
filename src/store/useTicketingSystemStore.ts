import { AlertColor } from '@mui/material/Alert/Alert'
import create from 'zustand'
import Ticket from '../models/ticket.model'
import User from '../models/user.model'
import { createTicket } from '../helpers/ticket-utilities'

interface ISnackBar {
    severity?: AlertColor
    message?: string
    visible: boolean
}

interface TicketingSystemState {
    loginStatus?: boolean
    activeUser?: User
    tickets: Ticket[]
    users: User[]
    sideBarAnchor: boolean
    selectedTicket: Ticket
    activePageView: string
    ticketDialogStatus: boolean
    userDialogStatus: boolean
    ticketViewType: string
    snackBarStatus: ISnackBar
    setLoginStatus: (status: boolean) => void
    setActiveUser: (user: User) => void
    toggleTicketDialog: (status: boolean, selectedTicket?: Ticket) => void
    toggleUserDialog: (status: boolean) => void
    toggleSnackBarStatus: (status: ISnackBar) => void
    setDashboardViewType: (_ticketViewType: string) => void
    createNewTicket: (ticket: Ticket) => void
    updateTicket: (modifiedTicket: Ticket) => void
    deleteTicket: (ticketId: string) => void
    retrieveTickets: () => void,
    createNewUser: (user: User) => void
    retrieveUsers: () => void,
    toggleSideBar: (value: boolean) => void
    setActivePageView: (_selectedPageView: string) => void
    deleteUser: (id: string) => void
    signOut: () => void
}

const baseUrl = 'https://alice-ticketing-system-server.herokuapp.com'

let useTicketingSystemStore = create<TicketingSystemState>((set, get) => ({
    loginStatus: false,
    activeUser: {},
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
    setActiveUser: user => set({ activeUser: user }),
    toggleTicketDialog: (status, _selectedTicket) => {
        if(_selectedTicket !== undefined) {
            set({ selectedTicket: _selectedTicket })
        }
        set({ ticketDialogStatus: status })
    },
    toggleUserDialog: status => set({ userDialogStatus: status }),
    toggleSnackBarStatus: status => set({ snackBarStatus: status }),
    setDashboardViewType: _ticketViewType => set({ ticketViewType: _ticketViewType }),
    createNewTicket: async ticket => {
        const response = await fetch(`${baseUrl}/api/v1/tickets`, {
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
    },
    updateTicket: async modifiedTicket => {
        const response = await fetch(`${baseUrl}/api/v1/tickets`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(modifiedTicket)
        })

        if(response.ok) {
            set({ snackBarStatus: { severity: 'success', message: 'Ticket update successfully', visible: true } })
            get().retrieveTickets()
        } else {
            set({ snackBarStatus: { severity: 'error', message: 'Ticket update failed', visible: true } }) 
        }
    },
    deleteTicket: async ticketId => {
        if(window.confirm(`Are you sure you want to delete this ticket?`)) {
            const response = await fetch(`${baseUrl}/api/v1/tickets/${ticketId}`, {
                method: 'DELETE',
            })
            
            if(response.ok) {
            set(state => ({ tickets: state.tickets.filter(ticket => ticket.id != ticketId) })) 
            set({ snackBarStatus: { severity: 'success', message: 'Ticket deleted successfully', visible: true } })
            } else {
                set({ snackBarStatus: { severity: 'error', message: 'Ticket delete failed', visible: true } }) 
            }
        }
    },
    retrieveTickets: async () => {
        const response = await fetch(`${baseUrl}/api/v1/tickets`)
        const tickets = await response.json()
        set({ tickets })
    },
    createNewUser: async user => {
        const response = await fetch(`${baseUrl}/api/v1/users`, {
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
    },
    retrieveUsers: async () => {
        const response = await fetch(`${baseUrl}/api/v1/users`)
        const users = await response.json()
        set({ users })
    },
    toggleSideBar: value => set({ sideBarAnchor: value }),
    setActivePageView: _selectedPageView => set({ activePageView: _selectedPageView }),
    deleteUser: async userId => {
        const selectedUser = get().users.find(user => (user.id as string) === userId) as User
        const tickets = get().tickets.filter(ticket => (ticket.assignee?.id as string) === userId)
        const name = `${selectedUser.firstName} ${selectedUser.lastName}`
        if(window.confirm(`Are you sure you want to delete ${name}?`)) {
            if(tickets.length > 0) {
                alert(`${name} is currently assigned to a ticket. \nUnassign before deleting.`)
            } else if((selectedUser.email as string) === (get().activeUser?.email as string)) {
                alert(`User currently signed\nCan't be deleted`)
            } else {
                const response = await fetch(`${baseUrl}/api/v1/users/${userId}`, {
                    method: 'DELETE',
                })

                if(response.ok) {
                    set(state => ({ users: state.users.filter(user => user.id != userId) }))
                    set({ snackBarStatus: { severity: 'success', message: `${name} deleted successfully`, visible: true } })
                } else {
                    set({ snackBarStatus: { severity: 'error', message: 'User delete failed', visible: true } }) 
                }
            }
        }
    },
    signOut: () => {
        localStorage.clear()
        set({ activeUser: {} })
    }

}))

export default useTicketingSystemStore