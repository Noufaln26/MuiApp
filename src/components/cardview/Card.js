import * as React from "react";


import Grid from "@mui/material/Grid";
import CardView from "./CardView";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
function Card() {
   
  return (
   
      
    <Grid container spacing={2} justifyContent="center">
      {arr.map((item,index) => (
         
    
        <Grid item key={item} xs={12} md={3} sm={6} >

          <CardView />
        </Grid>
      ))}
    </Grid>
  );
}

export default Card;
