import Box from '@mui/material/Box';


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
                    <p>Synciety</p>
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
                        <p>Login</p>
                        <p>Username</p>
                        <p>Password</p>
                    </Box>
                    <Box sx = {{
                        p: 2,
                        backgroundColor: '#AA7CD2',
                        color: 'black',
                        borderLeft: 2,
                        width: '50%',
                        height: '500px',
                    }}>
                        <p>Hello</p>
                        <p>New User?</p>
                        <p>Sign Up</p>
                    </Box>
                </Box>
            </Box>
        </>
    )
}