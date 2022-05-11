import React, { useEffect } from 'react'
import { Box, Button, Dialog, TextField, DialogContent } from '@mui/material'

interface AddTicketPropType {
    open: boolean
  }

export default function AddTicket({ open }: AddTicketPropType) {
    const [ticketOpen, setTicketOpen] = React.useState(open);

    useEffect(() => {
        setTicketOpen(open);
    }, [open])

    const handleClose = () => {
        setTicketOpen(false);
    };

    const addTicketStyle = {
        dialog: {
            width: '400px'
        }
    }

    return (
        <Box>
            <Dialog open={ticketOpen} onClose={handleClose} sx={addTicketStyle.dialog}>
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
            </Dialog>
        </Box> 
    )
}

