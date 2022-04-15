import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import IconButton from "@mui/material/IconButton";
import WcIcon from "@mui/icons-material/Wc";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import PhoneAndroidRounded from "@mui/icons-material/PhoneAndroidRounded";

export default function CardView({ dataItem }) {
  console.log(dataItem);

  return (
    <Card
      key={dataItem.login.uuid}
      sx={{
        maxWidth: 300,
        margin: "10px",
        background:
          "linear-gradient(to right, rgb(60, 59, 63), rgb(96, 92, 60))",
        boxShadow: "5",
      }}
    >
      <CardActionArea sx={{ marginTop: "10px" }}>
        <CardMedia
          style={{
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
        />
        <CardContent sx={{ color: "white" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ wordWrap: "break-word" }}
          >
            <IconButton sx={{ color: "white" }}>
              <BadgeOutlinedIcon />
            </IconButton>

            {dataItem.name.first + dataItem.name.last}
          </Typography>
          <Divider />
          <Typography variant="body1" style={{ wordWrap: "break-word" }}>
            <IconButton sx={{ color: "white" }}>
              <PhoneAndroidRounded />
            </IconButton>
            {dataItem.cell}
          </Typography>
          <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
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
          {/*Add buttnos*/ }
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
