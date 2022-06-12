import React from "react";
import {
  Box,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
} from "@mui/material";

import { ReactComponent as ArrowDownIcon1 } from "../../assets/svg/black_arrow_down.svg";
export default function CustomMaterialDropDown() {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "97%",
        width: "97%",
        padding: "5px 5px",
        backgroundColor: (theme) => theme.palette.primary.bg1,
        boxShadow: "none",
      }}
    >
      <Box sx={{ width: "90%", padding: "10px 10px" }}>
        <Typography>Narrow Results:</Typography>
      </Box>
      <Accordion
        sx={{
          width: "97%",
          boxShadow: "none",
          marginTop: "10px",
          backgroundColor: "transparent",
          "&.MuiAccordion-root:before": {
            backgroundColor: "transparent",
          },
        }}
      >
        <AccordionSummary expandIcon={<ArrowDownIcon1 />}>
          <Typography>Manufacturer:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              FD Manufacturer
            </Typography>
            <Box compoent="span" sx={{ flexGrow: "1" }} />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              35
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              11 Manufacturer
            </Typography>
            <Box compoent="span" sx={{ flexGrow: "1" }} />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              42
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              CC Manufacturer
            </Typography>
            <Box compoent="span" sx={{ flexGrow: "1" }} />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              14
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          width: "97%",
          boxShadow: "none",
          marginTop: "10px",
          backgroundColor: "transparent",
          "&.MuiAccordion-root:before": {
            backgroundColor: "transparent",
          },
        }}
      >
        <AccordionSummary expandIcon={<ArrowDownIcon1 />}>
          <Typography>Location:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              QC Warehouse
            </Typography>
            <Box compoent="span" sx={{ flexGrow: "1" }} />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              15
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              Cebu Warehouse
            </Typography>
            <Box compoent="span" sx={{ flexGrow: "1" }} />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              23
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              Davao Warehouse
            </Typography>
            <Box compoent="span" sx={{ flexGrow: "1" }} />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              10
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
 {/*      <Accordion
        sx={{
          width: "97%",
          boxShadow: "none",
          marginTop: "10px",
          backgroundColor: "transparent",
          "&.MuiAccordion-root:before": {
            backgroundColor: "transparent",
          },
        }}
      >
        <AccordionSummary expandIcon={<ArrowDownIcon1 />}>
          <Typography>Items Condition:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              FD Manufacturer
            </Typography>
            <Box compoent="span" sx={{ flexGrow: "1" }} />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              35
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              11 Manufacturer
            </Typography>
            <Box compoent="span" sx={{ flexGrow: "1" }} />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              42
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              CC Manufacturer
            </Typography>
            <Box compoent="span" sx={{ flexGrow: "1" }} />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              14
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion> */}
    {/*   <Accordion
        sx={{
          width: "97%",
          boxShadow: "none",
          marginTop: "10px",
          backgroundColor: "transparent",
          "&.MuiAccordion-root:before": {
            backgroundColor: "transparent",
          },
        }}
      >
        <AccordionSummary expandIcon={<ArrowDownIcon1 />}>
          <Typography>Tags:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              FD Manufacturer
            </Typography>
            <Box compoent="span" sx={{ flexGrow: "1" }} />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              35
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              11 Manufacturer
            </Typography>
            <Box compoent="span" sx={{ flexGrow: "1" }} />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              42
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              CC Manufacturer
            </Typography>
            <Box compoent="span" sx={{ flexGrow: "1" }} />
            <Typography
              sx={{
                fontSize: "13px",
                color: (theme) => theme.palette.textColor.col4,
              }}
            >
              14
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion> */}
    </Paper>
  );
}
