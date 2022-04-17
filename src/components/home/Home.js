import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Done from '@mui/icons-material/Done'

import {
  Badge,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
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
  const [filterOptions, setFilterOptions] = useState([]);
  const [options, setoptions] = useState([
    { Option: "name", key: 1 },
    { Option: "gender", key: 2 },
    { Option: "email", key: 3 },
    { Option: "cell", key: 4 },
  ]);

  
  const columns = data[0] && Object.keys(data[0]);
  const open = Boolean(anchorEl);

  const handleChipClick = (op) => {
    //console.log(Object.keys(op))
    const checked = filterOptions.includes(op);
   /* console.log(checked)
   
    console.log("Option (op) : " + op);
    console.log("filterOptions :" + filterOptions);
    console.log("Options : " + options); */
    setFilterOptions((prev) =>
      checked ? prev.filter((s) => s !== op) : [...prev, op]
    );
  };
  const handleChipDelete = (fo) => {
    setFilterOptions(filterOptions.filter(elem => elem.Option !== fo.Option))

  };
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
      <Grid container  justifyContent="space-between" sx={{mt: 5 }} >
        <Grid item xs={12} md={3} sm={6}>
          {/*//searchbox function*/}
          <Container>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1}}
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
        <Grid item xs={6} md={4} sm={6}>
          <IconButton
            ria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Badge badgeContent={filterOptions.length} color="secondary" max={4}>
              <FilterListRoundedIcon />
            </Badge>
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: 48 * 4.5,
                width: "fit-content",
              },
            }}
          >

            <Stack direction="row">
              {filterOptions.length > 0 ? (
                filterOptions.map((filterOption) => (
                  <MenuItem key={filterOption.key}>
                    <Chip
                      label={filterOption.Option}
                      variant="contained"
                      color="success"
                      
                      onDelete={e=> handleChipDelete(filterOption)}
                      DeleteIcon={<Done/>}
                      
                    />
                  </MenuItem>
                ))
              ) : (
                <Typography variant="subtitle2" component="h2" ml={2}>
                  No Selected filters
                </Typography>
              )}
            </Stack>
            <Divider />
            <Stack direction="row">
              {options.map((op) =>
                                       
                <MenuItem key={op.key}>
                  <Chip
                    label={op.Option}
                    variant="outlined"
                    color="success"
                    onClick={e=>handleChipClick(op)}
                  />
                </MenuItem> 
               
              ) 
              }
            </Stack>
          </Menu>
        </Grid>
        <Grid item xs={6} md={4} sm={6}>
          {/*Toggle view */}
          <Button
            onClick={handleViewChange}
            variant="contained"
            sx={{bgcolor:"#1f8286cf"}}
            endIcon={view ? <GridViewIcon /> : <TableRowsIcon />}
          >
            {view ? "List" : "Card"}
          </Button>
        </Grid>
      </Grid>
      
      {view ? (
        <Card data={customSearch(data)} />
      ) : (
        <ListView data={customSearch(data)}  />
        
      )}
      
    </>
  );
}

export default Home;
