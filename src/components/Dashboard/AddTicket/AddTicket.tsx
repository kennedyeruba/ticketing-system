import React, { useState, useEffect } from 'react'
import { Box, Button, Dialog, TextField, DialogContent, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

interface AddTicketPropType {
    dialogStatus: boolean
  }

export default function AddTicket({ dialogStatus }: AddTicketPropType) {
    const [ticketDialogStatus, setTicketDialogStatus] = useState(false);

    useEffect(() => {
        setTicketDialogStatus(dialogStatus);
        console.log('open dialog')
    }, [dialogStatus])

    const handleClose = () => {
        setTicketDialogStatus(false);
    };

    const addTicketStyle = {
        dialog: {
            width: '400px'
        }
    }

    return (
        <Box>
            {/* Ticket Dialog Begin */}
            <Dialog open={ticketDialogStatus} onClose={handleClose}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Enter Title"
                        fullWidth
                        variant="filled"
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Enter Description"
                        fullWidth
                        multiline
                        rows={4}
                        variant="filled"
                    />
                    <FormControl variant="filled" sx={{ width: '100%', mt: 1 }}>
                        <InputLabel id="demo-simple-select-filled-label">Assignee</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                        >
                            <MenuItem value={0}>Alice</MenuItem>
                            <MenuItem value={0}>Seyram</MenuItem>
                            <MenuItem value={0}>John</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" sx={{ width: '100%', mt: 1 }}>ADD TICKET</Button>
                </DialogContent>
            </Dialog>
            {/* Ticket Dialog End */}
            {/* <Dialog open={ticketOpen} onClose={handleClose} sx={addTicketStyle.dialog}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="filled"
                    />
                </DialogContent>
            </Dialog> */}
        </Box> 
    )
}

