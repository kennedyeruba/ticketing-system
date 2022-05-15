import React, { useState } from 'react'
import { Box, Button, Dialog, TextField, DialogContent, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import useTicketingSystemStore from '../../../store/useTicketingSystemStore'
import { createTicket } from '../../../helpers/ticket-utilities'

export default function AddTicket() { 
    const ticketingSystemStore = useTicketingSystemStore
    const ticketDialogStatus = ticketingSystemStore(state => state.ticketDialogStatus)

    const [ticketTitle, setTicketTitle] = useState('')
    const [ticketDescription, setTicketDescription] = useState('')
    const [ticketAssignee, setTicketAssignee] = useState('')

    const handleClose = () => {
        ticketingSystemStore.getState().toggleTicketDialog(false)
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTicketTitle(event.target.value as string);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTicketDescription(event.target.value as string);
    };

    const handleAssigneeChange = (event: SelectChangeEvent) => {
        setTicketAssignee(event.target.value as string);
      };

    const handleAddTicket = () => {
        const newTicket = createTicket(ticketTitle, ticketDescription, ticketAssignee)
        ticketingSystemStore.getState().createNewTicket(newTicket)
        ticketingSystemStore.setState({ ticketDialogStatus: false })
        setTicketTitle('')
        setTicketDescription('')
        setTicketAssignee('')
    }

    return (
        <Box>
            {/* Ticket Dialog Begin */}
            <Dialog open={ticketDialogStatus} onClose={handleClose}>
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
                            value={ticketAssignee}
                            onChange={handleAssigneeChange}
                        >
                            <MenuItem value='alice'>Alice</MenuItem>
                            <MenuItem value='seyram'>Seyram</MenuItem>
                            <MenuItem value='john'>John</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" sx={{ width: '100%', mt: 1 }} onClick={handleAddTicket}>ADD TICKET</Button>
                </DialogContent>
            </Dialog>
            {/* Ticket Dialog End */}
        </Box> 
    )
}

