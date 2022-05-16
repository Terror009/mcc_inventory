import React, { useState } from "react";

import {
  Box,
  Paper,
  Typography,
  Button,
  TextField,
  IconButton,
  Avatar,
} from "@mui/material";
import CustomSideBar from "./components/CustomSideBar";
import CustomHeaderBar from "./components/CustomHeaderBar";
import { InventoryReport, ProjectReport } from "./components/CustomReportPage";
export default function Report() {
  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });

  const [page, SetPage] = useState("");

  const SideBarHandle = () => {
    Setsidebar({ ...sidebar, isOpen: true });
  };

  const SideBarHandleClose = () => {
    Setsidebar({ ...sidebar, isOpen: false });
  };

  const LinkToComponents = (e) => {
    if (e.target.id === "inventory_report") {
      SetPage(e.target.id);
    } else if (e.target.id === "project_report") {
      SetPage(e.target.id);
    } else {
      SetPage("");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: (theme) => theme.palette.secondary.bg1,
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative", width: "59px", zIndex: "3" }}>
        <CustomSideBar
          open={sidebar.isOpen}
          onOpen={SideBarHandle}
          onClose={SideBarHandleClose}
        />
      </Box>
      <Box
        sx={{
          width: "1310px",
          backgroundColor: (theme) => theme.palette.secondary.bg2,
        }}
      >
        <Box sx={{ position: "relative", zIndex: "2" }}>
          <CustomHeaderBar />
        </Box>
        <Box sx={{ marginTop: "60px" }}>
          <Box
            sx={{
              height: "150vh",
              backgroundColor: (theme) => theme.palette.secondary.bg3,
              padding: "40px 40px",
            }}
          >
            <Paper
              sx={{
                height: "80%",
                width: "100%",
                backgroundColor: (theme) => theme.palette.primary.bg2,
                borderRadius: "30px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  padding: "20px 0px",
                  width: "100%",
                  backgroundColor: "",
                }}
              >
                <Typography variant="h5" sx={{ marginLeft: "60px " }}>
                  All Reports
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "90.5%",
                  backgroundColor: "",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                    width: "30%",
                    backgroundColor: (theme) => theme.palette.primary.main,
                  }}
                >
                  <Button
                    id="inventory_report"
                    sx={{
                      padding: "10px 20px",
                      marginTop: "40px",
                      backgroundColor: (theme) => theme.palette.primary.main,
                      textTransform: "capitalize",
                      "&: hover": {
                        backgroundColor: "rgba(0,0,0,0.2)",
                      },
                    }}
                    onClick={(e) => LinkToComponents(e)}
                  >
                    <Typography
                      sx={{
                        color: (theme) => theme.palette.textColor.col5,
                        fontSize: "18px",
                        pointerEvents: "none",
                      }}
                    >
                      Inventory Reports
                    </Typography>
                  </Button>
                  <Button
                    id="project_report"
                    sx={{
                      padding: "10px 20px",
                      marginTop: "20px",
                      backgroundColor: (theme) => theme.palette.primary.main,
                      textTransform: "capitalize",
                      "&: hover": {
                        backgroundColor: "rgba(0,0,0,0.2)",
                      },
                    }}
                    onClick={(e) => LinkToComponents(e)}
                  >
                    <Typography
                      sx={{
                        color: (theme) => theme.palette.textColor.col5,
                        fontSize: "18px",
                        pointerEvents: "none",
                      }}
                    >
                      Project Reports
                    </Typography>
                  </Button>
                </Box>
                {page === "project_report" ? (
                  <ProjectReport />
                ) : (
                  <InventoryReport />
                )}
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
