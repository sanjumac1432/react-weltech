import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Productdisplay = (data) => {
  return (
   <>
 
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={data.item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {data.item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">addtocart</Button>
      
      </CardActions>
    </Card>

   </>
  )
}
