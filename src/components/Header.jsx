import React from 'react';
import { Link } from 'react-router-dom';
import { Button,AppBar,Typography,Toolbar,Box } from '@mui/material';

const Header = () => {
  return (
    <div>
      <AppBar component = "nav" position='sticky' >
      <Toolbar>
      <Typography variant="h4" className="neon-text" sx={{ flexGrow: 1 }}>何か書く</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }} >
        <Button 
          variant="outlined"
          color="primary"
          component = {Link}
          to = '/'
          className="neon-button"
          sx={{ mx: 1 }}
          >Home</Button>
        <Button 
          variant="outlined"
          color="primary"
          component = {Link}
          to = '/about'
          className="neon-button"
          sx={{ mx: 1 }}
          >About</Button>
        <Button 
          variant="outlined"
          color="primary"
          component = {Link}
          to = '/skill'
          className="neon-button"
          sx={{ mx: 1 }}
          >Skill</Button>
        </Box>
      </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header