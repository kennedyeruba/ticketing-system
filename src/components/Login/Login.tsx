import { useState } from 'react'
import { TextField, Box, Paper, Button, InputAdornment, Typography, Stack, IconButton } from '@mui/material'
import { AccountCircle, Lock, VisibilityOff, Visibility } from '@mui/icons-material'
import useTicketingSystemStore from '../../store/useTicketingSystemStore';

export default function Login() {
    const ticketingSystemStore = useTicketingSystemStore;
    const [value, setValue] = useState(true)

    const signIn = () => {
        ticketingSystemStore.getState().setLoginStatus(true)
    }

  return (
    <Box className="w-full h-screen flex justify-center items-center login-container">
        <Paper elevation={5} className="px-5 py-10 w-96 login-form">
            <Stack spacing={3}>
                <Typography variant="h4">
                    Alice &amp; co Ticketing System
                </Typography>
                <TextField
                    className="mb-5"
                    required
                    fullWidth
                    id="filled-required"
                    label="Username"
                    variant="filled"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    required
                    fullWidth
                    id="filled-password-input"
                    label="Password"
                    type={value ? "password" : "text"}
                    variant="filled"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setValue(!value)}
                                    edge="end"
                                >
                                    {value ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}     
                />
                <Button onClick={signIn} variant="contained" fullWidth>Login</Button>
            </Stack>
        </Paper>
    </Box>
  )
}
