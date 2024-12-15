import { Box, Typography, Button, createTheme, ThemeProvider} from "@mui/material"
import '../App.css'
import { useNavigate } from "react-router-dom"


export const SignUp = () => {
    const navigate = useNavigate();

    const purple = createTheme({
        palette: {
            primary: {
                main: '#AA7CD2',
                contrastText: 'white',
            },
        }
    })

    const loginLink = () => {
        navigate('/login')
    }

    const calendarLink = () => {
        navigate('/Calendar')
    }

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
                    height: '500px',
                    margin: '0',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    <Box sx = {{
                        p: 1,
                        backgroundColor: '#EAEBEB',
                        color: 'black',
                        width: '50%',
                    }}>
                        <Typography variant="h5">
                            <p className="kanit" style = {{
                                marginLeft: '1.5vw',
                            }}>Sign Up</p>   
                        </Typography>
                        <Typography variant="h6">
                            <p className = "exo" style = {{
                                marginLeft: '1.5vw',
                            }}>Username</p>   
                        </Typography>
                        <input type="text" style={{
                            borderRadius: '30px',
                            border: '0',
                            width: '80%',
                            height: '6%',
                            padding: '8px',
                            display: 'flex',
                            margin: 'auto',
                        }}/>
                        <Typography variant="h6">
                            <p className = "exo" style = {{
                                marginLeft: '1.5vw',
                            }}>Password</p>   
                        </Typography>
                        <input type="text" style={{
                            borderRadius: '30px',
                            border: '0',
                            width: '80%',
                            height: '6%',
                            padding: '8px',
                            display: 'flex',
                            margin: 'auto',
                        }}/>
                        <div style = {{
                            margin: '40px'
                        }}></div>
                        <ThemeProvider theme = {purple}>
                            <Button variant = "contained" disableElevation onClick={calendarLink} sx = {{
                                width: '80%',
                                height: '15%',
                                margin: 'auto',
                                display: 'flex',
                                color: 'black',
                                borderRadius: '20px',
                            }}>
                                <p className="exo" style = {{
                                    fontSize: '15px',
                                }}>Create an account</p>
                            </Button>
                        </ThemeProvider>

                        <Box sx = {{
                            marginTop: '20px',
                            display: 'flex',
                        }}>
                            <Button className="yantraLight" style = {{
                                fontSize: '10px',
                                marginTop: 'auto',
                                marginBottom: 'auto',
                                marginLeft: '1vw',
                                marginRight: 'auto',
                                color: '#0788FF'
                            }}>Terms and Conditions</Button>
                        </Box>
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
                            <p className="yantraBold" style = {{
                                fontSize: '50px',
                                letterSpacing: '2px',
                            }}>WELCOME</p>   
                        </Typography>
                        <Typography variant="subtitle1" sx = {{
                            color: 'white'
                        }}>
                            <p className = "yantraLight">Have an account?</p>   
                        </Typography>
                        <Button variant = "outlined" sx = {{
                            color: 'white',
                            borderColor: 'black',
                            borderRadius: '15px',
                            marginTop: '20px',
                        }}
                        onClick={loginLink}>
                            <p className = "yantraLight" style = {{
                            margin: '2px'
                            }}>
                                Log In 
                            </p>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}