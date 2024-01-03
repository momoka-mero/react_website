import React from 'react'
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const Skill = () => {
  return (
    <Box style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '64px', flexWrap:'wrap'}}>
      <Card style={{width:'25%',margin:'0 2.5%' }}>
        <CardMedia
          component="img"
          height="140"
          image="hoge.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Python
          </Typography>
          <Typography variant="body2" color="primary">
            hoge
          </Typography>
        </CardContent>
      </Card>

      <Card style={{width:'25%',margin:'0 2.5%' }}>
        <CardMedia
          component="img"
          height="140"
          image="hoge.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="primary">
            hoge
          </Typography>
        </CardContent>
      </Card>

      <Card style={{width:'25%',margin:'0 2.5%' }}>
        <CardMedia
          component="img"
          height="140"
          image="hoge.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Machine Learning
          </Typography>
          <Typography variant="body2" color="primary">
            hoge
          </Typography>
        </CardContent>
      </Card>

    </Box>
  );
}

export default Skill