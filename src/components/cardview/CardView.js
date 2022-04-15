import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function CardView() {
  
    
  return (
      
    <Card sx={{ maxWidth:300,margin:'10px',background:"linear-gradient(to right, rgb(60, 59, 63), rgb(96, 92, 60))",boxShadow:'5' }}>
      <CardActionArea sx={{marginTop:'10px'}}> 
        <CardMedia
        style={{position:'relative',borderRadius:'50%',width:"260px",margin:"auto",padding:"10px",background: 'linear-gradient(to right, rgb(0, 121, 145), rgb(120, 255, 214))'}}
          component="img"
          height="240"
          width='auto'
          image='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
     
          alt="cat"
        />
        <CardContent sx={{color:'white'}}>
          <Typography gutterBottom variant="h4" component="div">
            Lizard
          </Typography>
          <Typography variant="body1" >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
