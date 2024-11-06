import { Box, Typography, Button } from "@mui/material"
import '../App.css'

export const Calendar = () => {
    return (
        <>
            <Box>
                <Box sx = {{
                    width: '100vw',
                    backgroundColor: 'orange',
                    height: '12vh',
                    wrap: 'nowrap',
                    display: 'flex'
                }}>

                    <Box>
                        <Typography variant="h5" style = {{
                            margin: 'auto',
                            border: '0',
                            display: 'flex',
                            marginLeft: '2vw'
                        }}>
                            <p className="kanit">Synciety</p>
                        </Typography>
                    </Box>
                    
                    <Box sx = {{
                        margin: 'auto',
                        border: '0',
                        marginLeft: '10vw',
                        display: 'flex',
                    }}>
                        <Button variant = "outlined" sx = {{
                            borderRadius: '10px',
                            color: 'black',
                            borderColor: 'black',
                            display: 'flex',
                            margin: 'auto',
                            marginRight: '10px',
                        }}>Today</Button>

                        <Box sx = {{
                            maxWidth: '15px',  
                            marginRight: '5px',
                            display: 'flex',
                            margin: 'auto',
                        }}>
                            <Button sx = {{
                                borderRadius: '10px',
                                color: 'black',
                                borderColor: 'black',
                                minWidth: '10px',
                            }}> {"<"} </Button>
                        </Box>

                        <Box sx = {{
                            maxWidth: '15px',
                            paddingLeft: '1vw',
                            display: 'flex',
                            margin: 'auto',
                        }}>
                            <Button sx = {{
                                borderRadius: '10px',
                                color: 'black',
                                borderColor: 'black',
                                minWidth: '10px',
                            }}> {">"} </Button>
                        </Box>

                        <Box>
                            <Typography variant="h5" style = {{
                                margin: 'auto',
                                border: '0',
                                display: 'flex',
                                marginLeft: '2vw'
                            }}>
                                <p className="exo">INSERT DATE</p>
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx = {{
                        display: 'flex',
                        margin: 'auto',
                    }}>
                        <p>Insert Icons Here</p>
                    </Box>

                </Box>
            </Box>
        </>
    )
}