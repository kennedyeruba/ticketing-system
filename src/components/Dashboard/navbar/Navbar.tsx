import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Divider, Button } from '@mui/material'
import { AccountCircle, Menu as MenuIcon } from '@mui/icons-material'
import useTicketingSystemStore from '../../../store/useTicketingSystemStore';
import { useNavigate } from 'react-router';
import User from '../../../models/user.model';

export default function Navbar() {
    const ticketingSystemStore = useTicketingSystemStore
    const [activeUser, setActiveUser] = useState<User>({})
    const navigate = useNavigate()

    useEffect(() => {
        const data = localStorage.getItem('active-user')
        const user = JSON.parse(data as string) as User
        setActiveUser(user)
    }, [])

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const signOut = () => {
        navigate('/login')
        ticketingSystemStore.getState().signOut()
    }

  return (
    <AppBar position="fixed">
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
                    <MenuItem onClick={handleClose}>
                        {
                            `${activeUser.firstName} ${activeUser.lastName}`
                        }
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={signOut}>
                        <Button sx={{ margin: "auto" }} variant="contained">Sign Out</Button>
                    </MenuItem>
                </Menu>
            </div>
        </Toolbar>
    </AppBar>
  )
}
