import { Box, Typography, Button, createTheme, ThemeProvider, TextField } from "@mui/material"


export const LogIn = () => {
    const purple = createTheme({
        palette: {
            primary: {
                main: '#AA7CD2',
                contrastText: 'white',
            },
        },
    })

    return (
        <>
            <Box sx = {{
                minHeight: '100vh',
                backgroundColor: 'white',
                margin: '0',
                padding: '0',
                border: '0',
            }}>
                <Box sx = {{
                    position: 'absolute',
                    top: '0',
                    left: '10px',
                }}>
                    <Typography variant="h5">
                        <p className="kanit">Synciety</p>
                    </Typography>
                </Box>

                <Box sx = {{
                    position: 'absolute',
                    display: 'flex',
                    borderRadius: '10px',
                    border: 2,
                    overflow: 'hidden',
                    width: '40%',
                    height: '450px',
                    margin: '0',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    <Box sx = {{
                        p: 2,
                        backgroundColor: '#EAEBEB',
                        color: 'black',
                        width: '50%',
                    }}>
                        <Typography variant="h5">
                            <p className="kanit">Login</p>   
                        </Typography>
                        <Typography variant="h6">
                            <p className = "exo">Username</p>   
                        </Typography>
                        <TextField variant="outlined"/>
                        <Typography variant="h6">
                            <p className = "exo">Password</p>   
                        </Typography>
                        <ThemeProvider theme = {purple}>
                            <Button variant = "contained" disableElevation sx = {{
                                width: '80%',
                                height: '15%',
                                margin: 'auto',
                                display: 'flex',
                                color: 'black',
                            }}>Sign In</Button>
                        </ThemeProvider>
                    </Box>
                    <Box sx = {{
                        p: 2,
                        backgroundColor: '#AA7CD2',
                        color: 'black',
                        borderLeft: 2,
                        width: '50%',
                        textAlign: 'center',

                    }}>
                        <Typography variant="h3" sx = {{
                            color: 'white'
                        }}>
                            <p>HELLO</p>   
                        </Typography>
                        <Typography variant="subtitle1" sx = {{
                            color: 'white'
                        }}>
                            <p>New User?</p>   
                        </Typography>
                        <Typography variant="h6" sx = {{
                            color: 'white'
                        }}>
                            <p>Sign Up</p>   
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}