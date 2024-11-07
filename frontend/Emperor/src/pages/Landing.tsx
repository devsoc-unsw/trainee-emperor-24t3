import { Box, Button, createTheme, TextField, ThemeProvider, Typography } from "@mui/material"
import Image from "../assets/5047210.png"
import Navbar from "../components/Navbar"

export const Landing = () => {
  const orange = createTheme({
    palette: {
      primary: {
        main: '#F4895F',
        contrastText: 'white',
      },
    },
  })

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
      <Box>
        <TextField size="small" sx={{
          backgroundColor: "white",
          borderRadius: "5px"
        }}
        />
      <ThemeProvider theme={orange}>
        <Button variant="contained" sx={{
          marginLeft: '1rem',
        }}>Subscribe</Button>
      </ThemeProvider>
      </Box>
    </Box>
    </>
  )
}