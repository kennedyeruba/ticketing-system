import { useState, useEffect } from "react";
import { 
    Box, 
    Dialog, 
    DialogContent, 
    TextField, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, 
    Button, 
    DialogProps,
    DialogTitle
} from '@mui/material';
import useTicketingSystemStore from '../../../../store/useTicketingSystemStore'
import { createUser } from "../../../../helpers/user-utilities";

const AddUser = () => {
    const ticketingSystemStore = useTicketingSystemStore
    const userDialogStatus = ticketingSystemStore(state => state.userDialogStatus)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('xs');

    useEffect(() => {
        ticketingSystemStore.getState().retrieveUsers()
    }, [])

    const handleClose = () => {
        ticketingSystemStore.getState().toggleUserDialog(false)
    }

    const handleAddUser = () => {
        const newUser = createUser(firstName, lastName, email)
        ticketingSystemStore.getState().createNewUser(newUser)
        ticketingSystemStore.getState().toggleUserDialog(false)
        setFirstName('')
        setLastName('')
        setEmail('')
    }

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value as string);
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value as string);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value as string);
    };

    return (
        <Box>
            <Dialog 
                open={userDialogStatus} 
                onClose={handleClose}
                maxWidth={maxWidth}
            >
                <DialogTitle sx={{ 
                    textAlign: 'center',
                    fontSize: '1.8rem', 
                    fontWeight: '600', 
                    letterSpacing: '-3px'
                }}>Add User</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="First Name"
                        fullWidth
                        variant="filled"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                    <TextField
                        margin="dense"
                        label="Last Name"
                        fullWidth
                        variant="filled"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                    <TextField
                        margin="dense"
                        label="Email"
                        fullWidth
                        variant="filled"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <Button variant="contained" sx={{ width: '100%', mt: 1 }} onClick={handleAddUser}>SAVE</Button>
                </DialogContent>
            </Dialog>
        </Box> 
    )
}

export default AddUser;