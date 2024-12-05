import { Box, Button, createTheme, TextField, ThemeProvider, Typography } from "@mui/material"
import Image from "../assets/5047210.png"
import Navbar from "../components/Navbar"
import { useState } from "react";

export const Landing = () => {
  const orange = createTheme({
    palette: {
      primary: {
        main: '#F4895F',
        contrastText: 'white',
      },
    },
  });

  const [textInput, setTextInput] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  // Technically we can just use the text input
  // const [email, setEmail] = useState("");

  return (
    <>
    <Navbar/>
    <Box
      sx={{
          backgroundColor: '#AA7CD2',
          minHeight: '100vh'
      }}
    >
      <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginX: '1rem'
      }}>
        <Box>
            <Typography variant="h2" sx={{
                color: 'white',
                marginBottom: '1rem',
            }}>
                <b>ORGANISE LIFE</b>
            </Typography>
            <Typography variant="h2" sx={{
                color: 'white',
                marginBottom: '2rem',
            }}>
                <b>WITH SYNCIETY</b>
            </Typography>
            <Typography variant="subtitle1" sx={{
                color: 'white'
            }}>
                Live in a <b>society</b> where you can stay <b>synced</b> with
                each other.
            </Typography>
        </Box>
        <Box>
            <img src={Image} alt="connection image" style={{
                width: '15rem',
                height: '15rem',
            }}/>
        </Box>
      </Box>
      {emailSubmitted ? 
        <Box> 
          <Typography>
            Thanks for subscribing to our mailing list
          </Typography>
        </Box>
        : <Box>
        <TextField 
          size="small" 
          onChange={(event) => {
            // Keep track of text input
            setTextInput(event.target.value);
          }}
          sx={{
          backgroundColor: "white",
          borderRadius: "5px"
        }}
        />
      <ThemeProvider theme={orange}>
        <Button 
        variant="contained" 
        onClick={async () => {
          // Send to backend:
          // Consider making this a helper
          const options = {
            method: "POST",
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              email: textInput,
            }),
          }

          const response = await fetch(`http://localhost:5000/subscribe`, options);
          const data = await response.json();
          if (data.error) {
            console.log(data.error)
          }
          setEmailSubmitted(true);
        }}
        sx={{
          marginLeft: '1rem',
        }}>Subscribe</Button>
      </ThemeProvider>
      </Box>}
    </Box>
    </>
  )
}