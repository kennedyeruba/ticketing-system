import { useState, useEffect } from 'react'
import { TextField, Box, Paper, Button, InputAdornment, Typography, Stack, IconButton } from '@mui/material'
import { AccountCircle, Lock, VisibilityOff, Visibility } from '@mui/icons-material'
import useTicketingSystemStore from '../../store/useTicketingSystemStore';
import User from '../../models/user.model';
import { useNavigate } from 'react-router';

export default function Login() {
    const ticketingSystemStore = useTicketingSystemStore;
    const [passwordVisible, setPasswordVisible] = useState(true)
    const users = ticketingSystemStore(state => state.users)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        ticketingSystemStore.getState().retrieveUsers()
    }, [])

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const signIn = () => {
        const user = users.find(user => user.email == email) as User
        if(email !== '' && password !== '') {
            if(email === user?.email && password === `${user?.email}$$$`) {
                localStorage.setItem('active-user', JSON.stringify(user))
                navigate('/dashboard')
            } else {
                ticketingSystemStore.getState().toggleSnackBarStatus({
                    severity: 'error',
                    message: 'Invalid email or password',
                    visible: true 
                })
            }
        } else {
            alert('Fill all fields before submitting')
        }
    }

  return (
    <Box className="w-full h-screen flex justify-center items-center login-container">
        <Paper elevation={5} className="px-5 py-10 w-96 login-form">
            <Stack spacing={3}>
                <Typography variant="h4" align="center">
                    Alice&nbsp;&nbsp;&amp;&nbsp;Co Ticketing System
                </Typography>
                <TextField
                    className="mb-5"
                    required
                    fullWidth
                    id="filled-required"
                    label="Email"
                    variant="filled"
                    value={email}
                    onChange={handleEmailChange}
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
                    type={passwordVisible ? "password" : "text"}
                    variant="filled"
                    value={password}
                    onChange={handlePasswordChange}
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
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                    edge="end"
                                >
                                    {passwordVisible ? <Visibility /> : <VisibilityOff />}
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
