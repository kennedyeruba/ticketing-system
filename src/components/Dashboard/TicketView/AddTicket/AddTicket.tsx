import { useEffect, useState } from 'react'
import { 
    Box, 
    Button, 
    Dialog, 
    TextField, 
    DialogContent, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, 
    SelectChangeEvent,
    DialogTitle
} from '@mui/material'
import useTicketingSystemStore from '../../../../store/useTicketingSystemStore'
import { createTicket } from '../../../../helpers/ticket-utilities'
import User from '../../../../models/user.model'

export default function AddTicket() { 
    const ticketingSystemStore = useTicketingSystemStore
    const ticketDialogStatus = ticketingSystemStore(state => state.ticketDialogStatus)
    const users = ticketingSystemStore(state => state.users)
    const selectedTicket = ticketingSystemStore(state => state.selectedTicket)

    const [ticketTitle, setTicketTitle] = useState('')
    const [ticketDescription, setTicketDescription] = useState('')
    const [ticketAssigneeId, setTicketAssigneeId] = useState('')
    const [ buttonText, setButtonText ] = useState('')
    const [activeTicket, setActiveTicket] = useState({})

    useEffect(() => {
        ticketingSystemStore.getState().retrieveUsers()
        setButtonText('SAVE')
    }, [])

    useEffect(() => {
        if(selectedTicket.title !== undefined) {
            const { title, description,  assignee } = selectedTicket
            setTicketTitle(title as string)
            setTicketDescription(description as string)
            setTicketAssigneeId(assignee?.id as string)
            setButtonText('UPDATE')
        }
    }, [selectedTicket])

    const handleClose = () => {
        ticketingSystemStore.getState().toggleTicketDialog(false)
        setTicketTitle('')
        setTicketDescription('')
        setTicketAssigneeId('')
        setButtonText('SAVE')
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTicketTitle(event.target.value as string);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTicketDescription(event.target.value as string);
    };

    const handleAssigneeChange = (event: SelectChangeEvent) => {
        setTicketAssigneeId(event.target.value as string);
    };

    const handleBtnClick = () => {
        switch(buttonText) {
            case 'SAVE':
                if(ticketTitle !== "" && ticketDescription !== "" && ticketAssigneeId !== "") {
                    const ticketAssignee = users.find(user => user.id == ticketAssigneeId)
                    const newTicket = createTicket(ticketTitle, ticketDescription, ticketAssignee)
                    ticketingSystemStore.getState().createNewTicket(newTicket)
                    ticketingSystemStore.getState().toggleTicketDialog(false)
                    setTicketTitle('')
                    setTicketDescription('')
                    setTicketAssigneeId('')
                } else {
                    alert('Fill all fields before submitting')
                }
                break;
            case 'UPDATE':
                if(ticketTitle !== "" && ticketDescription !== "" && ticketAssigneeId !== "") {
                    const user = users.find(user => (user.id as string) === ticketAssigneeId)
                    const modifiedTicket = { ...selectedTicket, title: ticketTitle, description: ticketDescription, assignee: user as User }
                    ticketingSystemStore.getState().updateTicket(modifiedTicket)
                    ticketingSystemStore.getState().toggleTicketDialog(false)
                    setTicketTitle('')
                    setTicketDescription('')
                    setTicketAssigneeId('')
                    setButtonText('SAVE')
                } else {
                    alert('Fill all fields before submitting')
                }
        }
    }

    const displayMenuItems = () => {
        const assignees = users.map(user => (
            <MenuItem key={user.id} value={`${user.id}`}>{`${user.firstName} ${user.lastName}`}</MenuItem>
        ))
        return assignees
    }

    return (
        <Box>
            <Dialog 
                open={ticketDialogStatus} 
                onClose={handleClose}
                maxWidth={'xs'}
            >
                <DialogTitle sx={{ 
                    textAlign: 'center', 
                    fontSize: '2rem', 
                    fontWeight: '600', 
                    letterSpacing: '-3px'
                }}>Add Ticket</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Enter Title"
                        fullWidth
                        variant="filled"
                        value={ticketTitle}
                        onChange={handleTitleChange}
                    />
                    <TextField
                        margin="dense"
                        label="Enter Description"
                        fullWidth
                        multiline
                        rows={4}
                        variant="filled"
                        value={ticketDescription}
                        onChange={handleDescriptionChange}
                    />
                    <FormControl variant="filled" sx={{ width: '100%', mt: 1 }}>
                        <InputLabel id="demo-simple-select-filled-label">Assignee</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            value={ticketAssigneeId}
                            onChange={handleAssigneeChange}
                        >
                            {
                                displayMenuItems()
                            }
                        </Select>
                    </FormControl>
                    <Button variant="contained" sx={{ width: '100%', mt: 1 }} onClick={handleBtnClick}>
                        { buttonText }
                    </Button>
                </DialogContent>
            </Dialog>
        </Box> 
    )
}

