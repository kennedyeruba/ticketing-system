import React, { useEffect, useState } from 'react'
import { Box, Stack, Button, ToggleButtonGroup, ToggleButton, Dialog, DialogContent, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material'

import AddIcon from '@mui/icons-material/Add';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import useTicketingSystemStore from '../../../store/useTicketingSystemStore';

const DashboardActionBar = () => {
    const ticketingSystemStore = useTicketingSystemStore;
    const dashboardViewType = ticketingSystemStore(state => state.ticketViewType);
    const currentPageView = ticketingSystemStore(state => state.activePageView);
    const [viewType, setViewType] = useState(dashboardViewType);
    const [activePageView, setActivePageView] = useState(() => currentPageView);

    useEffect(() => {
        setActivePageView(currentPageView);
    }, [currentPageView])

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
        ticketingSystemStore.getState().setDashboardViewType(_viewType)
    };

    const addTicketAction = () => {
        useTicketingSystemStore.getState().toggleTicketDialog(true)
    }

    const displayAddButton = () => {
        if(activePageView == 'tickets') {
            return (<Button variant="contained" startIcon={<AddIcon />} onClick={addTicketAction}>Add Ticket</Button>)
        }
        if(activePageView == 'users') {
            return (<Button variant="contained" startIcon={<AddIcon />}>Add User</Button>)
        }
    }

    const displayTicketViewToggler = () => {
        if(activePageView == 'tickets') {
            return (<ToggleButtonGroup
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
            </ToggleButtonGroup>)
        }
    }

    return (
        <Box className={dashboardActionBarStyle.container}>
            <div className={dashboardActionBarStyle.buttonsContainer}>
                <Stack direction="row" spacing={2}>
                    {
                        displayAddButton()
                    }
                </Stack>
                {
                    displayTicketViewToggler()
                }
            </div>
        </Box>
    )
}

export default DashboardActionBar