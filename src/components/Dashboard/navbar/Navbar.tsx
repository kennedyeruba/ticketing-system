import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Divider } from '@mui/material'
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material'
import useTicketingSystemStore from '../../../store/useTicketingSystemStore';

export default function Navbar() {
    const ticketingSystemStore = useTicketingSystemStore

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const signOut = () => {
        ticketingSystemStore.getState().setLoginStatus(false)
        console.log('sign out')
    }

  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => ticketingSystemStore.getState().toggleSideBar(true)}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Alice &amp; Co
            </Typography>
            <div>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>John Doe</MenuItem>
                    <Divider />
                    <MenuItem onClick={signOut}>Sign Out</MenuItem>
                </Menu>
            </div>
        </Toolbar>
    </AppBar>
  )
}
