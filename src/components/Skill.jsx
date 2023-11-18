import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Skill = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
          <Typography variant="body2" color="text.secondary">
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
          <Typography variant="body2" color="text.secondary">
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
          <Typography variant="body2" color="text.secondary">
            hoge
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Skill