import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Badge, Chip, Container, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "../cardview/Card";
import ListView from "../listView/ListView";

import Button from "@mui/material/Button";

//this component will host loader spinner , filter , and toggle
//filter needs to be added

function Home({ data }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [view, setView] = useState(true);
  const [q, setQ] = useState("");
  const [filterOptions, setFilterOptions] = useState(["name"]);
  const [options, setoptions] = useState(["name","gender","email","cell"])
  const columns = data[0] && Object.keys(data[0]);
  const open = Boolean(anchorEl);
  const handleChipClick=(value)=>{
    console.log("Move the chip to contained class")
    setFilterOptions([...filterOptions,value])

  }
  const handleChipDelete=(value)=>{
    console.log("Deleted Chips")
    

  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewChange = (event) => {
    setView(!view);
  };
  const customSearch = (rows) => {
    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  };
  return (
    <>
      <Grid container sx={{ m: 5 }} justifyContent="space-between">
        <Grid item xs={12} md={4} sm={6}>
          {/*//searchbox function*/}
          <Container>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search here"
                inputProps={{ "aria-label": "search here" }}
                onChange={(e) => setQ(e.target.value)}
              />
              <IconButton sx={{ p: "5px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Container>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          <IconButton
            ria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Badge badgeContent={1} color="secondary" max={4} >
            <FilterListRoundedIcon /></Badge>
          </IconButton>
          <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: 'fit-content',
          },
        }}
      >
        <Stack direction="row">
        {filterOptions ? filterOptions.map((option) => (
          
          <MenuItem key={option} >

           <Chip label={option} variant="contained" color="success" onDelete={handleChipDelete} />
          
          </MenuItem>
        )) : <Typography variant="subtitle2" component="h2" ml={2}>No Selected filters</Typography>}
        </Stack>
        <Divider/>
        <Stack direction="row">
        {options.map((option) => (
          
          <MenuItem key={option} >

           <Chip label={option} variant="outlined" color="success" />
          
          </MenuItem>
          
        ))}</Stack>
      </Menu>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          {/*Toggle view */}
          <Button
            onClick={handleViewChange}
            variant="outlined"
            color="success"
            endIcon={view ? <GridViewIcon /> : <TableRowsIcon />}
          >
            {view ? "CHange to List" : "Change to Card"}
          </Button>
        </Grid>
      </Grid>
      {view ? (
        <Card data={customSearch(data)} />
      ) : (
        <ListView data={customSearch(data)} />
      )}
    </>
  );
}

export default Home;
