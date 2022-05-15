import React, { useState } from 'react'
import { Box, Stack, Button, ToggleButtonGroup, ToggleButton, Dialog, DialogContent, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material'

import AddIcon from '@mui/icons-material/Add';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AddTicket from '../AddTicket/AddTicket'

interface DashboardActionBarProps {
    onTicketDialogChange: Function
    onViewTypeChange: Function
}

const DashboardActionBar = (props: DashboardActionBarProps) => {
    const [viewType, setViewType] = useState('card')
    const [open, setOpen] = useState(() => false);

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    const dashboardActionBarStyle = {
        container: 'border-b-2 h-16 border-gray-200 pt-4 pb-2.5',
        buttonsContainer: 'h-full flex justify-between w-full',
        togglersContainer: {
            width: '100px',
            height: '50px',
        },
    }

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        _viewType: string,
    ) => {
        setViewType(_viewType);
        props.onViewTypeChange(_viewType)
    };

    const addTicketAction = () => {
        setOpen(true);
        props.onTicketDialogChange()
    }

    return (
        <Box className={dashboardActionBarStyle.container}>
            <div className={dashboardActionBarStyle.buttonsContainer}>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" startIcon={<AddIcon />}>
                        Add User
                    </Button>
                    <Button variant="contained" startIcon={<AddIcon />} onClick={addTicketAction}>
                        Add Ticket
                    </Button>
                </Stack>
                <ToggleButtonGroup
                    color="primary"
                    value={viewType}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="card">
                        <ViewModuleIcon />
                    </ToggleButton>
                    <ToggleButton value="list">
                        <ViewListIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div style={dashboardActionBarStyle.togglersContainer}>

            </div>
        </Box>
    )
}

export default DashboardActionBar