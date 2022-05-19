import React, { useState, useEffect } from "react";

import { Box, IconButton, Typography, Stack, Pagination } from "@mui/material";

export const PaginationPage = ({ postPerPage, totalPost, paginate }) => {
  const pageNumber = [];
  let pages = 0;
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <Box
      sx={{
        padding: "20px 20px",
      }}
    >
      {pageNumber.map((number, i) => (
        <IconButton
          key={i}
          onClick={() => paginate(number)}
          sx={{
            height: "40px",
            width: "40px",
            borderStyle: "solid",
            borderWidth: "2px",
            borderColor: (theme) => theme.palette.secondary.main,
            margin: "0px 10px 0px 10px",
          }}
        >
          <Typography>{number}</Typography>
        </IconButton>
      ))}
    </Box>
  );
};
