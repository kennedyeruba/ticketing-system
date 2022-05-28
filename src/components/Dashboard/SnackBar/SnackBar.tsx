import React from 'react';
import useTicketingSystemStore from '../../../store/useTicketingSystemStore'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const SnackBar = () => {
    const ticketingSystemStore = useTicketingSystemStore
    const snackBarStatus = ticketingSystemStore(state => state.snackBarStatus)

    const handleClose = () => {
        ticketingSystemStore.getState().toggleSnackBarStatus({...snackBarStatus, visible: false })
    }

    return (
        <Snackbar 
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
            open={snackBarStatus.visible} 
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={snackBarStatus.severity} sx={{ width: '100%' }}>
                { snackBarStatus.message }
            </Alert>
        </Snackbar>
    )
}

export default SnackBar