import React from 'react';
import { Link } from 'react-router-dom';
import { Button,AppBar,Typography,Toolbar } from '@mui/material';

const Header = () => {
  return (
    <div>
      <AppBar component = "nav" >
      <Toolbar>
      <Typography variant="h4" className="neon-text">何か書く</Typography>
      <Button 
        variant="outlined"
        color="primary"
        component = {Link}
        to = '/'
        className="neon-button"
        >Home</Button>
      <Button 
        variant="outlined"
        color="primary"
        component = {Link}
        to = '/about'
        className="neon-button"
        >About</Button>
      <Button 
        variant="outlined"
        color="primary"
        component = {Link}
        to = '/skill'
        className="neon-button"
        >Skill</Button>
      </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header