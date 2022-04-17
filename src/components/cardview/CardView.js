import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";

import IconButton from "@mui/material/IconButton";
import WcIcon from "@mui/icons-material/Wc";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import PhoneAndroidRounded from "@mui/icons-material/PhoneAndroidRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Container from "@mui/material/Container";

export default function CardView({ dataItem }) {

  const handleContactDelete = () => {
    console.log("Deleted")

  }
  return (
    <Card
      key={dataItem.login.uuid}
      sx={{
        maxWidth: 340,
        marginTop:"20px",
        background:
          "linear-gradient(to right, rgb(77 179 192), rgb(0 0 0 / 62%))",
        boxShadow: "5",
      }}
    >
      <Container sx={{ marginTop: "10px" }}>
        <CardMedia
          style={{
            mt: 5,
            position: "relative",
            borderRadius: "50%",
            width: "260px",
            margin: "auto",
            padding: "10px",
            background:
              "linear-gradient(to right, rgb(0, 121, 145), rgb(120, 255, 214))",
          }}
          component="img"
          height="240"
          width="auto"
          image={dataItem.picture.large}
          alt="cat"
        />{" "}
      </Container>
      <CardContent sx={{ color: "white" }}>
        <Typography noWrap align="center"
          gutterBottom
          variant="h5"
          component="div"
          style={{ wordWrap: "break-word" }}
        >
          

          {dataItem.name.first + " " + dataItem.name.last}
        </Typography>
        <Divider />
        <Typography variant="body1" style={{ wordWrap: "break-word" }}>
          <IconButton sx={{ color: "white" }}>
            <PhoneAndroidRounded />
          </IconButton>
          {dataItem.cell}
        </Typography>
        <Typography noWrap variant="body1" sx={{ wordWrap: "break-word" }}>
          <IconButton sx={{ color: "white" }}>
            <AlternateEmailIcon />
          </IconButton>
          {dataItem.email}
        </Typography>
        <Divider />
        <Typography variant="body1" style={{ wordWrap: "break-word" }}>
          <IconButton sx={{ color: "white" }}>
            <WcIcon />
          </IconButton>
          {dataItem.gender}
        </Typography>
        <Divider />
        {/*Add buttnos*/}
        <Grid container justifyContent="space-around">
        <CardActionArea  xs={6}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Grid item key={dataItem.id} xs={12} md={4} sm={6} >
              <IconButton aria-label="delete" sx={{ color: "white" }} onClick={handleContactDelete}>
                <DeleteIcon />
              </IconButton>
            </Grid>
            <Grid item key={dataItem.id} xs={6} md={3} sm={6}></Grid>

            <IconButton aria-label="Edit" sx={{ color: "white" }} >
              <EditIcon  />
            </IconButton>
          </Grid>
         
        </CardActionArea>
        </Grid>
      </CardContent>
    </Card>
  );
}
