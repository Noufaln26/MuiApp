import React from 'react'
import Grid from "@mui/material/Grid";
import CardView from '../cardview/CardView';
import CardPreview from './CardPreview';

function AddContactForm() {
  return (
    <Grid container justifyContent="center" bgcolor="lightgreen">
        <Grid  item xs={12} md={6} sm={6} >
        <CardPreview/>
            
        </Grid>
        <Grid  item xs={6} md={4} sm={6}>
            <h1 align="center" >Webform</h1>
           

        </Grid>

        



        </Grid>
  )
}

export default AddContactForm