import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

const header = () => {
  return (
    <div>
      <Typography variant="h4" className="neon-text">何か書く</Typography>
      <Button 
        variant="contained"
        color="primary"
        component = {Link}
        to = '/'
        className="neon-button"
        >Home</Button>
      <Button 
        variant="contained"
        color="secondary"
        component = {Link}
        to = '/about'
        className="neon-button"
        >About</Button>
      <Button 
        variant="contained"
        color="error"
        component = {Link}
        to = '/skill'
        className="neon-button"
        >Skill</Button>
    </div>
  )
}

export default header