import { Box, CircularProgress } from "@material-ui/core";
import React from "react";


const loading = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default loading;
