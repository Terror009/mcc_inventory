import React from "react";

import { Box, Typography, Divider, Link } from "@mui/material";

import { Link as NLink, useLocation } from "react-router-dom";

import mccLogoImg from "../../assets/img/mcc.jpg";
import { ReactComponent as DashBoardIcon } from "../../assets/svg/dashboard.svg";
import { ReactComponent as LogOutIcon } from "../../assets/svg/log_out.svg";
import { ReactComponent as SupplierIcon } from "../../assets/svg/supplier.svg";
import { ReactComponent as ManufacturerIcon } from "../../assets/svg/manufacturer.svg";
import { ReactComponent as MaterialIcon } from "../../assets/svg/material.svg";
import { ReactComponent as ConstructionSiteIcon } from "../../assets/svg/construction_site.svg";
import { ReactComponent as AuditLogIcon } from "../../assets/svg/audit_log.svg";
import { ReactComponent as ReportIcon } from "../../assets/svg/reports.svg";
import { ReactComponent as ProjectIcon } from "../../assets/svg/project.svg";
import { ReactComponent as UserIcon } from "../../assets/svg/users.svg";
import { ReactComponent as SettingIcon } from "../../assets/svg/setting.svg";

export default function CustomSideBar({ open, onOpen, onClose }) {
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "all 0.3s ease",
        height: "98.5vh",
        width: open === true ? "250px" : "50px",
        backgroundColor: "white",
        padding: "4px",
        boxShadow: "10px 5px 15px rgba(0,0,0,0.1)",
        zIndex: 1,
      }}
      onMouseLeave={onClose}
      onMouseEnter={onOpen}
    >
      <Box
        sx={{
          height: "90px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={mccLogoImg}
          alt="mcc_company_logo"
          sx={{
            transition: "all 0.3s ease",
            height: open === true ? "70px" : "40px",
            width: open === true ? "120px" : "50px",
          }}
        />
      </Box>
      <Link
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: (theme) => theme.palette.secondary.main,
          height: "40px",
          width: "100%",
          borderRadius: "5px",
          textDecoration: "none",
        }}
        component={NLink}
        to="/"
      >
        <DashBoardIcon
          style={{
            transition: "all 0.3s ease",
            marginRight: open === true ? "10px" : "0px",
          }}
        />
        <Typography
          sx={{
            transition: "all 0.3s ease",
            opacity: open === true ? "1" : "0",
            fontSize: open === true ? "15px" : "0px",
            color: (theme) => theme.palette.textColor.col2,
          }}
        >
          Dashboard
        </Typography>
      </Link>
      <Divider
        variant="middle"
        sx={{
          height: "3px",
          backgroundColor: (theme) => theme.palette.secondary.bg2,
          borderRadius: "30px",
          marginTop: "10px",
          width: "90%",
        }}
      />
      <Box
        sx={{
          transition: "all 0.3s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "100%",
            borderRadius: "5px 30px 30px 5px",
            transition: "all 0.3s ease",
            "&: hover": {
              backgroundColor: (theme) => theme.palette.secondary.bg3,
            },
            textDecoration: "none",
            backgroundColor: pathname.includes("/suppliers")
              ? (theme) => theme.palette.secondary.bg3
              : "",
          }}
          component={NLink}
          to="/suppliers"
        >
          <SupplierIcon
            style={{
              transition: "all 0.3s ease",
              marginRight: open === true ? "10px" : "0px",
              marginLeft: open === true ? "-100px" : "0px",
              height: "20px",
              width: "20px",
            }}
          />
          <Typography
            sx={{
              transition: "all 0.3s ease",
              color: (theme) => theme.palette.textColor.col5,
              opacity: open === true ? "1" : "0",
              fontSize: open === true ? "15px" : "0px",
            }}
          >
            Suppliers
          </Typography>
        </Link>
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "100%",
            borderRadius: "5px 30px 30px 5px",
            transition: "all 0.3s ease",
            "&: hover": {
              backgroundColor: (theme) => theme.palette.secondary.bg3,
            },
            textDecoration: "none",
            backgroundColor: pathname.includes("/manufacturers")
              ? (theme) => theme.palette.secondary.bg3
              : "",
          }}
          component={NLink}
          to="/manufacturers"
        >
          <ManufacturerIcon
            style={{
              transition: "all 0.3s ease",
              marginRight: open === true ? "10px" : "0px",
              marginLeft: open === true ? "-64px" : "0px",
              height: "20px",
              width: "20px",
            }}
          />
          <Typography
            sx={{
              transition: "all 0.3s ease",
              color: (theme) => theme.palette.textColor.col5,
              opacity: open === true ? "1" : "0",
              fontSize: open === true ? "15px" : "0px",
            }}
          >
            Manufacturers
          </Typography>
        </Link>
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "100%",
            borderRadius: "5px 30px 30px 5px",
            transition: "all 0.3s ease",
            "&: hover": {
              backgroundColor: (theme) => theme.palette.secondary.bg3,
            },
            textDecoration: "none",
            backgroundColor: pathname.includes("/materials")
              ? (theme) => theme.palette.secondary.bg3
              : "",
          }}
          component={NLink}
          to="/materials"
        >
          <MaterialIcon
            style={{
              transition: "all 0.3s ease",
              marginRight: open === true ? "10px" : "0px",
              marginLeft: open === true ? "-105px" : "0px",
              height: "20px",
              width: "20px",
            }}
          />
          <Typography
            sx={{
              transition: "all 0.3s ease",
              color: (theme) => theme.palette.textColor.col5,
              opacity: open === true ? "1" : "0",
              fontSize: open === true ? "15px" : "0px",
            }}
          >
            Materials
          </Typography>
        </Link>
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "100%",
            borderRadius: "5px 30px 30px 5px",
            transition: "all 0.3s ease",
            "&: hover": {
              backgroundColor: (theme) => theme.palette.secondary.bg3,
            },
            textDecoration: "none",
            backgroundColor: pathname.includes("/construction_sites")
              ? (theme) => theme.palette.secondary.bg3
              : "",
          }}
          component={NLink}
          to="/construction_sites"
        >
          <ConstructionSiteIcon
            style={{
              transition: "all 0.3s ease",
              marginRight: open === true ? "10px" : "0px",
              marginLeft: open === true ? "-45px" : "0px",
              height: "20px",
              width: "20px",
            }}
          />
          <Typography
            sx={{
              transition: "all 0.3s ease",
              color: (theme) => theme.palette.textColor.col5,
              opacity: open === true ? "1" : "0",
              fontSize: open === true ? "15px" : "0px",
            }}
          >
            Construction Sites
          </Typography>
        </Link>
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "100%",
            borderRadius: "5px 30px 30px 5px",
            transition: "all 0.3s ease",
            "&: hover": {
              backgroundColor: (theme) => theme.palette.secondary.bg3,
            },
            textDecoration: "none",
            backgroundColor: pathname.includes("/audit_logs")
              ? (theme) => theme.palette.secondary.bg3
              : "",
          }}
          component={NLink}
          to="/audit_logs"
        >
          <AuditLogIcon
            style={{
              transition: "all 0.3s ease",
              marginRight: open === true ? "10px" : "0px",
              marginLeft: open === true ? "-85px" : "0px",
              height: "20px",
              width: "20px",
            }}
          />
          <Typography
            sx={{
              transition: "all 0.3s ease",
              color: (theme) => theme.palette.textColor.col5,
              opacity: open === true ? "1" : "0",
              fontSize: open === true ? "15px" : "0px",
            }}
          >
            Audit Logs
          </Typography>
        </Link>
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "100%",
            borderRadius: "5px 30px 30px 5px",
            transition: "all 0.3s ease",
            "&: hover": {
              backgroundColor: (theme) => theme.palette.secondary.bg3,
            },
            textDecoration: "none",
            backgroundColor: pathname.includes("/reports")
              ? (theme) => theme.palette.secondary.bg3
              : "",
          }}
          component={NLink}
          to="/reports"
        >
          <ReportIcon
            style={{
              transition: "all 0.3s ease",
              marginRight: open === true ? "10px" : "0px",
              marginLeft: open === true ? "-100px" : "0px",
              height: "20px",
              width: "20px",
            }}
          />
          <Typography
            sx={{
              transition: "all 0.3s ease",
              color: (theme) => theme.palette.textColor.col5,
              opacity: open === true ? "1" : "0",
              fontSize: open === true ? "15px" : "0px",
            }}
          >
            Reports
          </Typography>
        </Link>
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "100%",
            borderRadius: "5px 30px 30px 5px",
            transition: "all 0.3s ease",
            "&: hover": {
              backgroundColor: (theme) => theme.palette.secondary.bg3,
            },
            textDecoration: "none",
            backgroundColor: pathname.includes("/projects")
              ? (theme) => theme.palette.secondary.bg3
              : "",
          }}
          component={NLink}
          to="/projects"
        >
          <ProjectIcon
            style={{
              transition: "all 0.3s ease",
              marginRight: open === true ? "10px" : "0px",
              marginLeft: open === true ? "-100px" : "0px",
              height: "20px",
              width: "20px",
            }}
          />
          <Typography
            sx={{
              transition: "all 0.3s ease",
              color: (theme) => theme.palette.textColor.col5,
              opacity: open === true ? "1" : "0",
              fontSize: open === true ? "15px" : "0px",
            }}
          >
            Projects
          </Typography>
        </Link>
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            width: "100%",
            borderRadius: "5px 30px 30px 5px",
            transition: "all 0.3s ease",
            "&: hover": {
              backgroundColor: (theme) => theme.palette.secondary.bg3,
            },
            textDecoration: "none",
            backgroundColor: pathname.includes("/users")
              ? (theme) => theme.palette.secondary.bg3
              : "",
          }}
          component={NLink}
          to="/users"
        >
          <UserIcon
            style={{
              transition: "all 0.3s ease",
              marginRight: open === true ? "10px" : "0px",
              marginLeft: open === true ? "-115px" : "0px",
              height: "20px",
              width: "20px",
            }}
          />
          <Typography
            sx={{
              transition: "all 0.3s ease",
              color: (theme) => theme.palette.textColor.col5,
              opacity: open === true ? "1" : "0",
              fontSize: open === true ? "15px" : "0px",
            }}
          >
            Users
          </Typography>
        </Link>
        <Link
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            width: "100%",
            borderRadius: "5px 30px 30px 5px",
            transition: "all 0.3s ease",
            "&: hover": {
              backgroundColor: (theme) => theme.palette.secondary.bg3,
            },
            textDecoration: "none",
            backgroundColor: pathname.includes("/setting")
              ? (theme) => theme.palette.secondary.bg3
              : "",
          }}
          component={NLink}
          to="/setting"
        >
          <SettingIcon
            style={{
              transition: "all 0.3s ease",
              marginRight: open === true ? "10px" : "0px",
              marginLeft: open === true ? "-100px" : "0px",
              height: "20px",
              width: "20px",
            }}
          />
          <Typography
            sx={{
              transition: "all 0.3s ease",
              color: (theme) => theme.palette.textColor.col5,
              opacity: open === true ? "1" : "0",
              fontSize: open === true ? "15px" : "0px",
            }}
          >
            Settings
          </Typography>
        </Link>
      </Box>
      <Divider
        variant="middle"
        sx={{
          height: "3px",
          backgroundColor: (theme) => theme.palette.secondary.bg2,
          borderRadius: "30px",
          marginTop: "10px",
          width: "90%",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40px",
          width: "100%",
          borderRadius: "5px 30px 30px 5px",
          transition: "all 0.3s ease",
          "&: hover": {
            backgroundColor: (theme) => theme.palette.secondary.bg3,
          },
          marginTop: "10px",
        }}
      >
        <LogOutIcon
          style={{
            transition: "all 0.3s ease",
            marginRight: open === true ? "10px" : "0px",
            marginLeft: open === true ? "-100px" : "0px",
            height: "20px",
            width: "20px",
          }}
        />
        <Typography
          sx={{
            transition: "all 0.3s ease",
            color: (theme) => theme.palette.textColor.col5,
            opacity: open === true ? "1" : "0",
            fontSize: open === true ? "15px" : "0px",
          }}
        >
          Log out
        </Typography>
      </Box>
    </Box>
  );
}
