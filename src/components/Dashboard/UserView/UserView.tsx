import { useEffect } from 'react';
import useTicketingSystemStore from '../../../store/useTicketingSystemStore';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    IconButton

} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material'

const UserView = () => {
    const ticketingSystemStore = useTicketingSystemStore;
    const users = ticketingSystemStore(state => state.users);

    useEffect(() => {
        console.log('From User View: ', users);
    }, [users]);

    return (
        <TableContainer component={Paper} sx={{ marginTop: '40px', width: '100%', fontFamily: 'Poppins' }}>
            <Table aria-label="simple table">
                <TableHead sx={{ background: '#1976d2;', fontFamily: 'Poppins' }}>
                    <TableRow>
                        <TableCell  sx={{ color: 'white', fontWeight: '600' }}>First Name</TableCell>
                        <TableCell align="right" sx={{ color: 'white', fontWeight: '600' }}>Last Name</TableCell>
                        <TableCell align="right" sx={{ color: 'white', fontWeight: '600' }}>Email</TableCell>
                        <TableCell>&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{ fontWeight: '600' }}>
                                {user.firstName}
                            </TableCell>
                            <TableCell align="right" sx={{ fontWeight: '600' }}>{user.lastName}</TableCell>
                            <TableCell align="right" sx={{ fontWeight: '600' }}>{user.email}</TableCell>
                            <TableCell align="right">
                                <IconButton color="primary" onClick={() => ticketingSystemStore.getState().deleteUser(user.id as string)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UserView;