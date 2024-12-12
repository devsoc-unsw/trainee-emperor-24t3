import { Box, Typography, Button } from "@mui/material"
import '../App.css'
import '../components/CalendarGrid'
import CalendarGrid from "../components/CalendarGrid"
// import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Calendar = () => {
    return (
        <>
            <Box>
                <Box sx = {{
                    width: '100vw',
                    height: '12vh',
                    wrap: 'nowrap',
                    display: 'flex',
                    margin: '0',
                    padding: '0',
                    backgroundColor: 'white'
                }}>

                    <Box>
                        <Typography variant="h5" style = {{
                            margin: 'auto',
                            border: '0',
                            display: 'flex',
                            marginLeft: '4.5vw'
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
                            textTransform: 'none',
                            boxShadow: '2',
                        }}><p className="exo" style = {{margin: '0'}}>Today</p></Button>

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

                <Box sx = {{
                    height: '88vh',
                    width: '15vw',
                    position: 'absolute',
                    backgroundColor: 'white',
                }}>
                    <Box sx = {{
                        width: '15vw',
                        height: '100%',
                        display: 'inline',
                    }}>
                        <Popup trigger=
                            {<Button sx = {{
                                width: '70%',
                                height: '5%',
                                display: 'flex',
                                margin: 'auto',
                                marginTop: '10px',                            borderRadius: '7px',
                                border: '3px',
                                backgroundColor: 'white',
                                marginBottom: '15px',
                                textTransform: 'none',
                                boxShadow: '2',
                            }}>
                                <img src='../src/assets/plus.png' alt="Plus sign" style = {{
                                    width: '10%',
                                    paddingRight: '15px',
                                }}></img>
                                <p className = 'exo' style = {{
                                    marginRight: '0',
                                    color: 'black',
                                }}>
                                    Create
                                </p>
                            </Button>}
                            position="right center">
                            <div>
                                <input type="event" id="event" placeholder="New Event Title" style={{
                                    borderRadius: '30px',
                                    border: '0',
                                    width: '80%',
                                    height: '6%',
                                    padding: '8px',
                                    display: 'flex',
                                    margin: 'auto',
                                }}/>
                                <input type="event-desc" id="event-desc" style={{
                                    borderRadius: '30px',
                                    border: '0',
                                    width: '80%',
                                    height: '6%',
                                    padding: '8px',
                                    display: 'flex',
                                    margin: 'auto',
                                }}/>
                                <input type="link" id="link" style={{
                                    borderRadius: '30px',
                                    border: '0',
                                    width: '80%',
                                    height: '6%',
                                    padding: '8px',
                                    display: 'flex',
                                    margin: 'auto',
                                }}/>
                            </div>
                            <button>Save</button>
                        </Popup>
                        
                        <Box sx = {{display: 'inline', marginLeft: '10%'}}>
                            <Button sx = {{
                                backgroundColor: 'white',
                                color: 'black',
                                textTransform: 'none',
                                width: '30%',
                                height: '5%',
                                boxShadow: '2',
                            }}>
                                <img src='../src/assets/plus.png' alt="Plus sign" style = {{
                                    width: '20%',
                                    paddingRight: '15px',
                                }}></img>
                                <p className="exo">Add</p>
                            </Button>
                        </Box>
                        <Box sx = {{display: 'inline', marginLeft: '15%'}}>
                            <Button sx = {{
                                backgroundColor: 'white',
                                color: 'black',
                                textTransform: 'none',
                                width: '35%',
                                height: '5%',
                                boxShadow: '3',
                            }}>
                                <img src='../src/assets/minus.png' alt="Plus sign" style = {{
                                    width: '20%',
                                    paddingRight: '5px',
                                }}></img>
                                <p className="exo">Remove</p>
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box sx = {{
                    height: '88vh',
                    width: '85vw',
                    position: 'absolute',
                    backgroundColor: 'white',
                    display: 'inline',
                    marginLeft: '15vw',
                }}>
                    <CalendarGrid />
                </Box>
            </Box>
        </>
    )
}