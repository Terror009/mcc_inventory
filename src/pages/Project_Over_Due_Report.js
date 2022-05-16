import React, { useState } from "react";

import {
  Box,
  Paper,
  Typography,
  Button,
  Link,
  TextField,
  Checkbox,
} from "@mui/material";
import { Link as NLink } from "react-router-dom";
import CustomSideBar from "./components/CustomSideBar";
import CustomHeaderBar from "./components/CustomHeaderBar";

import { ReactComponent as BackIcon } from "../assets/svg/back.svg";
import { ReactComponent as ImportIcon } from "../assets/svg/import.svg";
import { ReactComponent as ExportIcon } from "../assets/svg/export.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search1.svg";
import { ReactComponent as UserIcon } from "../assets/svg/user1.svg";
import { ReactComponent as DeleteIcon } from "../assets/svg/trash.svg";

export default function ProjectOveDueReport() {
  const [payload, SetPayload] = useState({
    data: [{}],
  });
  const [sidebar, Setsidebar] = useState({
    isOpen: false,
  });

  const SideBarHandle = () => {
    Setsidebar({ ...sidebar, isOpen: true });
  };

  const SideBarHandleClose = () => {
    Setsidebar({ ...sidebar, isOpen: false });
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
              display: "flex",
              alignItems: "center",
              height: "60px",
              width: "100%",
              backgroundColor: (theme) => theme.palette.secondary.main,
            }}
          >
            <Box component="span" sx={{ flexGrow: "1" }} />
            <Box
              sx={{
                position: "relative",
                marginRight: "50px",
              }}
            >
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                <ImportIcon
                  style={{
                    height: "20px",
                    width: "20px",
                    marginRight: "10px",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "14px",
                  }}
                >
                  import
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "60px",
              }}
            >
              <Button
                sx={{
                  textTransform: "capitalize",
                }}
              >
                <ExportIcon
                  style={{
                    height: "20px",
                    width: "20px",
                    marginRight: "10px",
                  }}
                />

                <Typography sx={{ fontWeight: "bolder", fontSize: "14px" }}>
                  export
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "150vh",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
            padding: "40px 40px",
          }}
        >
          <Link
            component={NLink}
            to="/reports"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <BackIcon style={{ marginRight: "10px" }} />
            <Typography
              sx={{
                color: (theme) => theme.palette.textColor.col5,
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Back to Report
            </Typography>
          </Link>
          <Typography
            variant="h5"
            sx={{
              color: (theme) => theme.palette.textColor.col4,
              margin: "20px 0px 0px 40px",
            }}
          >
            Project Overdue Reports
          </Typography>
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              height: "70px",
              width: "97%",
              padding: "0px 20px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            <TextField
              InputProps={{
                startAdornment: <SearchIcon style={{ marginRight: "10px" }} />,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: (theme) => theme.palette.secondary.main,
                    color: (theme) => theme.palette.textColor.col1,
                    border: "none",
                    backgroundColor: "transparent",
                  },
                },
              }}
              placeholder="search"
              type="search"
              size="small"
            />
            <Box component="span" sx={{ flexGrow: "1" }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "30%",
                marginRight: "50px",
              }}
            >
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                }}
              >
                Sort By:
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                }}
              >
                Group By:
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  fontSize: "14px",
                }}
              >
                Result 1 - 15 of 15
              </Typography>
            </Box>
          </Paper>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: "30px",
            }}
          >
            <Box sx={{ display: "flex", width: "100%" }}>
              <Box component="span" sx={{ flexGrow: "1" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "20%",
                }}
              >
                <Button
                  sx={{
                    height: "35px",
                    width: "100px",
                    border: "1px solid #3A57E8",
                    borderRadius: "10px",
                    textTransform: "capitalize",
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: (theme) => theme.palette.textColor.col1,
                  }}
                >
                  <DeleteIcon style={{ marginRight: "10px" }} />
                  <Typography sx={{ fontSize: "14px" }}>Delete</Typography>
                </Button>
                <Checkbox id="checkAll" color="secondary" />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "90%",
              marginTop: "40px",
            }}
          >
            <Typography
              sx={{
                color: (theme) => theme.palette.textColor.col4,
                fontSize: "14px",
              }}
            >
              ID NUMBER
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.textColor.col4,
                fontSize: "14px",
              }}
            >
              CLIENT NAME
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.textColor.col4,
                fontSize: "14px",
              }}
            >
              START DATE
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.textColor.col4,
                fontSize: "14px",
              }}
            >
              END DATE
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.textColor.col4,
                fontSize: "14px",
              }}
            >
              SITE LOCATION
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.textColor.col4,
                fontSize: "14px",
              }}
            >
              BUDGET
            </Typography>
            <Typography
              sx={{
                color: (theme) => theme.palette.textColor.col4,
                fontSize: "14px",
              }}
            >
              STATUS
            </Typography>
          </Box>
          {payload.data.length !== 0 ? (
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
                width: "100%",
                borderRadius: "10px",
                backgroundColor: (theme) => theme.palette.primary.main,
                marginTop: "20px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: (theme) => theme.palette.textColor.col4,
                  opacity: "0.5",
                }}
              >
                No Data
              </Typography>
            </Paper>
          ) : (
            ""
          )}
        </Box>
        <Box
          sx={{
            position: "relative",
            bottom: "0px",
            height: "40px",
            width: "100%",
            backgroundColor: (theme) => theme.palette.primary.main,
          }}
        >
          <Typography>@ 2022 made by UIP Dev Interns</Typography>
        </Box>
      </Box>
    </Box>
  );
}
