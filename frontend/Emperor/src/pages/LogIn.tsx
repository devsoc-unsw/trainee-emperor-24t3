import { Box, Typography } from "@mui/material"


export const LogIn = () => {

    return (
        <>
            <Box sx = {{
                minHeight: '100vh',
                backgroundColor: 'white',
            }}>
                <Box sx = {{
                    position: 'absolute',
                    top: '0',
                    left: '10px',
                }}>
                    <Typography variant="h5">
                        <p>Synciety</p>
                    </Typography>
                </Box>

                <Box sx = {{
                    position: 'absolute',
                    display: 'flex',
                    borderRadius: '10px',
                    border: 2,
                    overflow: 'hidden',
                    width: '50%',
                    height: '500px',
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
                        height: '500px',
                    }}>
                        <Typography variant="h5">
                            <p>Login</p>   
                        </Typography>
                        <Typography variant="h6">
                            <p>Username</p>   
                        </Typography>
                        <Typography variant="h6">
                            <p>Password</p>   
                        </Typography>
                    </Box>
                    <Box sx = {{
                        p: 2,
                        backgroundColor: '#AA7CD2',
                        color: 'black',
                        borderLeft: 2,
                        width: '50%',
                        height: '500px',
                        textAlign: 'center',

                    }}>
                        <Typography variant="h3" sx = {{
                            color: 'white'
                        }}>
                            <p>Hello</p>   
                        </Typography>
                        <Typography variant="subtitle1">
                            <p>New User?</p>   
                        </Typography>
                        <Typography variant="h6">
                            <p>Sign Up</p>   
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}