import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowDownIcon } from "../../assets/svg/circle_arrow.svg";
export const InventoryReport = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100%",
        width: "69%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "20%",
          backgroundColor: (theme) => theme.palette.primary.main,
          borderRadius: "0px 0px 0px 10px",
          padding: "0px 40px",
          transition: "all 0.4s ease",
          "&: hover": {
            backgroundColor: (theme) => theme.palette.primary.bg2,
          },
        }}
        onClick={() => navigate("/reports/inventory_movement_detail")}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: "bold", pointerEvents: "none" }}
        >
          Inventory Movement Details
        </Typography>
        <Box component="span" sx={{ flexGrow: "1" }} />
        <ArrowDownIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "20%",
          alignItems: "center",
          backgroundColor: (theme) => theme.palette.primary.main,
          marginTop: "10px",
          borderRadius: "10px 0px 0px 10px",
          padding: "0px 40px",
          transition: "all 0.4s ease",
          "&: hover": {
            backgroundColor: (theme) => theme.palette.primary.bg2,
          },
        }}
        onClick={() => navigate("/reports/material_stock_level")}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: "bold", pointerEvents: "none" }}
        >
          Material Stock Level
        </Typography>
        <Box component="span" sx={{ flexGrow: "1" }} />
        <ArrowDownIcon />
      </Box>
      <Box
        sx={{
          height: "60%",
          backgroundColor: (theme) => theme.palette.primary.main,
          marginTop: "10px",
          borderRadius: "10px 0px 0px 0px",
        }}
      ></Box>
    </Box>
  );
};

export const ProjectReport = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100%",
        width: "69%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "20%",
          backgroundColor: (theme) => theme.palette.primary.main,
          borderRadius: "0px 0px 0px 10px",
          padding: "0px 40px",
          transition: "all 0.4s ease",
          "&: hover": {
            backgroundColor: (theme) => theme.palette.primary.bg2,
          },
        }}
        onClick={() => navigate("/reports/project_over_due_report")}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: "bold", pointerEvents: "none" }}
        >
          Project Overdue Reports
        </Typography>
        <Box component="span" sx={{ flexGrow: "1" }} />
        <ArrowDownIcon />
      </Box>
      <Box
        sx={{
          height: "80%",
          backgroundColor: (theme) => theme.palette.primary.main,
          marginTop: "10px",
          borderRadius: "10px 0px 0px 0px",
        }}
      ></Box>
    </Box>
  );
};
