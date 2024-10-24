import Box from '@mui/material/Box';


export const LogIn = () => {

    return (
        <>
            <Box sx = {{
                position: 'absolute',
                top: '0',
                left: '10px',
            }}>
                <p>Synciety</p>
            </Box>

            <Box sx = {{
                display: 'flex',
                borderRadius: '10px',
                overflow: 'hidden',
                width: '70vw',
                height: '500px',
            }}>
                <Box sx = {{
                    p: 2,
                    backgroundColor: '#EAEBEB',
                    color: 'black',
                    width: '50%',
                }}>
                    <p>Login</p>
                    <p>Username</p>
                    <p>Password</p>
                </Box>
                <Box sx = {{
                    p: 2,
                    backgroundColor: '#AA7CD2',
                    color: 'black',
                    borderLeft: 1,
                    width: '50%',
                }}>
                    <p>Hello</p>
                    <p>New User?</p>
                    <p>Sign Up</p>
                </Box>
            </Box>
        </>
    )
}