import * as React from "react";

import Grid from "@mui/material/Grid";
import CardView from "./CardView";


function Card({data}) {
  return (
    <Grid container spacing={2} justifyContent="center" m={0.1} >
      {data.map((dataItem) => (
        <Grid item key={dataItem.login.uuid} xs={12} md={3} sm={6}>
          <CardView dataItem={dataItem}/>
        </Grid>
      ))}
    </Grid>
  );
}

export default Card;
