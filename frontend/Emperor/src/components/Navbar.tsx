import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();
    const homeLink = () => {
        navigate('/');
      };

      const loginLink = () => {
        navigate('/login');
      };

      const signupLink = () => {
        navigate('/signup');
      };

    // Better way to style
    const typographyStyles = {
      mr: 2,
      flexGrow: 1,
      fontFamily: "Montserrat",
      fontWeight: 700,
      letterSpacing: ".3rem",
      color: "inherit",
      textDecoration: "none",
      fontSize: "1.3rem",
      cursor: "pointer"
    }

    // Two ways to create redirects to links:
    // - using typography
    // - using buttons
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                backgroundColor: '#AA7CD2'
            }}>
                <Toolbar>
                <Typography                     
                    variant="h6" 
                    noWrap
                    component="div" sx={typographyStyles}
                      onClick={homeLink}>
                    Synciety
                </Typography>
                <Button onClick={loginLink} color="inherit">Login</Button>
                <Button onClick={signupLink} color="inherit">Sign Up</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar