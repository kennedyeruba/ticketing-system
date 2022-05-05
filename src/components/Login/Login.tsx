import { useState } from 'react'
import { TextField, Box, Paper, Button, InputAdornment, Typography, Stack, IconButton } from '@mui/material'
import { AccountCircle, Lock, VisibilityOff, Visibility } from '@mui/icons-material'

export default function Login(props: { onAuth: () => void }) {
    const [value, setValue] = useState(true)

  return (
    <Box className="w-full h-screen flex justify-center items-center">
        <Paper elevation={5} className="px-5 py-10 w-96">
            <Stack spacing={3}>
                <Typography variant="h4">
                    Ticketing System
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
                <Button onClick={() => props.onAuth()} variant="contained" fullWidth>Login</Button>
            </Stack>
        </Paper>
    </Box>
  )
}
