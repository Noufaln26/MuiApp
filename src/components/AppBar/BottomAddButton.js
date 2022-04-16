import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useState } from "react";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function BottomAppBar() {
  const [fab, setFab] = useState(true);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ top: "auto", bottom: 40 }}
      >
        <StyledFab
          color="primary"
          aria-label="add"
          onClick={() => setFab(!fab)}
        >
          {fab ? (
            <Link to="/addContact">
              <AddIcon />{" "}
            </Link>
          ) : (
            <Link to="/">
              {" "}
              <HomeRoundedIcon />
            </Link>
          )}
        </StyledFab>
      </AppBar>
    </React.Fragment>
  );
}
