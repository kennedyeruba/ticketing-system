import { useState } from 'react';
import { 
    List, 
    ListItem, 
    ListItemButton,
    ListItemText, 
    Divider, 
    Box,
    Drawer,
    ListItemAvatar,
    Avatar
} from '@mui/material'
import GroupIcon from '@mui/icons-material/Group';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import useTicketingSystemStore from '../../../store/useTicketingSystemStore';

const SideBar = () => {
    const ticketingSystemStore = useTicketingSystemStore
    const anchor = ticketingSystemStore(state => state.sideBarAnchor)

    const toggleDrawer = (value: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
        ticketingSystemStore.getState().toggleSideBar(value)
    }

    return (
        <div>
            <Drawer
              anchor={'left'}
              open={anchor}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                //   onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => ticketingSystemStore.getState().setActivePageView('tickets')}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: 'rgb(56, 115, 203)', width: 33, height: 33 }}>
                                        <DynamicFeedIcon fontSize="small"/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={'Tickets'} />
                            </ListItemButton>
                        </ListItem>
                        <Divider variant="inset" />
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => ticketingSystemStore.getState().setActivePageView('users')}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: 'rgb(56, 115, 203)', width: 33, height: 33 }}>
                                        <GroupIcon fontSize="small"/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText sx={{ fontSize: '2px' }} primary={'Users'} />
                            </ListItemButton>
                        </ListItem> 
                    </List>
                </Box>
            </Drawer>
        </div>
    )
}

export default SideBar