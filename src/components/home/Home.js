import React,{useState} from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";

import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "../cardview/Card";
import ListView from "../listView/ListView";

import Button from '@mui/material/Button';


//this component will host loader spinner , filter , and toggle

function Home({ data }) {
  //console.log(data)

  const [view, setView] = useState(true);
  const [q, setQ] = useState("");
  const [filterOptions, setFilterOptions] = useState([]);
  const columns = data[0] && Object.keys(data[0]);

  const handleViewChange = (event) => {
    setView(!view);
  };
  const customSearch = (rows) => {
    console.log(rows);

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
          <IconButton aria-label="FilterListRoundedIcon">
            <FilterListRoundedIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
          {/*Toggle view */}
          <Button onClick={handleViewChange} variant="outlined" color="success" endIcon={view ?<GridViewIcon/> : <TableRowsIcon/>}>
            {view? "CHange to List" : "Change to Card"}
          </Button>
        </Grid>
      </Grid>
      {view ? <Card data={customSearch(data)} /> : <ListView data={customSearch(data)} />}
    </>
  );
}

export default Home;
