import React from "react";
import { Button, Link, Typography } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineSeparator,
  TimelineItem,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Link as NLink } from "react-router-dom";
export default function CustomTimeLine() {
  return (
    <Timeline
      position="right"
      sx={{
        display: "flex",
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            sx={{
              borderColor: (theme) => theme.palette.secondary.main,
            }}
          />
          <TimelineConnector
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.main,
              height: "50px",
              width: "2px",
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <Link component={NLink} to="/reports" sx={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "normal",
                color: (theme) => theme.palette.textColor.col1,
                textTransform: "uppercase",
                transition: "all 0.4s ease",
                "&:hover": {
                  color: (theme) => theme.palette.textColor.col7,
                },
              }}
            >
              Reports
            </Typography>
          </Link>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            sx={{
              borderColor: (theme) => theme.palette.secondary.main,
            }}
          />
          <TimelineConnector
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.main,
              height: "50px",
              width: "2px",
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <Link
            component={NLink}
            to="/materials"
            sx={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "normal",
                color: (theme) => theme.palette.textColor.col1,
                textTransform: "uppercase",
                transition: "all 0.4s ease",
                "&:hover": {
                  color: (theme) => theme.palette.textColor.col7,
                },
              }}
            >
              Material
            </Typography>
          </Link>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TimelineDot
            variant="outlined"
            sx={{
              borderColor: (theme) => theme.palette.secondary.main,
            }}
          />
          <TimelineConnector
            sx={{
              backgroundColor: (theme) => theme.palette.secondary.main,
              height: "50px",
              width: "2px",
            }}
          />
        </TimelineSeparator>
        <TimelineContent>
          <Link
            component={NLink}
            to="/projects"
            sx={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "normal",
                color: (theme) => theme.palette.textColor.col1,
                textTransform: "uppercase",
                transition: "all 0.4s ease",
                "&:hover": {
                  color: (theme) => theme.palette.textColor.col7,
                },
              }}
            >
              Projects
            </Typography>
          </Link>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            sx={{
              borderColor: (theme) => theme.palette.secondary.main,
            }}
          />
        </TimelineSeparator>
        <TimelineContent
          sx={{
            fontSize: "13px",
            fontWeight: "bold",
            color: (theme) => theme.palette.textColor.col1,
            textTransform: "uppercase",
            transition: "all 0.4s ease",
            "&:hover": {
              color: (theme) => theme.palette.textColor.col7,
            },
          }}
        >
          <Link component={NLink} to="/users" sx={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "normal",
                color: (theme) => theme.palette.textColor.col1,
                textTransform: "uppercase",
                transition: "all 0.4s ease",
                "&:hover": {
                  color: (theme) => theme.palette.textColor.col7,
                },
              }}
            >
              Users
            </Typography>
          </Link>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
