import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from '@mui/material/Box'

function LoaderSpinner() {
  return (
   < Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
>
<CircularProgress />
</Box>
  );
}

export default LoaderSpinner;
