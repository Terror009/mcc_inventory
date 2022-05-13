import React, { useState } from "react";

import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  Paper,
  InputLabel,
  Link,
} from "@mui/material";

import { Link as NLink } from "react-router-dom";

import backGroundImg from "../assets/img/background.png";
import mccLogo from "../assets/img/mcc.jpg";
import { ReactComponent as HashtagIcon } from "../assets/svg/logo1.svg";

import { classes } from "../design/uiDesign";

import { signin } from "../api/userApi";

export default function UserSignin() {
  const [payload, Setpayload] = useState({
    email: "",
    password: "",
  });

  const handleChange = (prop) => (e) => {
    Setpayload({ ...payload, [prop]: e.target.value });
  };

  const login = () => {
    const obj = {
      email: payload.email,
      password: payload.password,
    };
    signin(obj);
  };

  return (
    <Box sx={classes.root}>
      <Box sx={classes.signin_left_side_com}>
        <Box
          component="img"
          src={mccLogo}
          alt="mcc_company_logo"
          sx={classes.signin_mcc_logo}
        />
        <HashtagIcon
          style={{
            position: "absolute",
            top: 0,
            right: "-30%",
            height: "70vh",
            width: "60vw",
          }}
        />
        <Paper sx={classes.signin_form}>
          <Typography variant="h5">Sign In</Typography>
          <Box sx={classes.signin_input_con}>
            <InputLabel shrink htmlFor="email" sx={classes.signin_input_labels}>
              Email
            </InputLabel>
            <TextField
              type="email"
              id="email"
              fullWidth
              sx={classes.signin_textInputs}
              autoComplete="off"
              InputProps={{
                style: {
                  fontSize: "12px",
                  fontWeight: "lighter",
                  color: "#2499E3",
                },
              }}
              onChange={handleChange("email")}
              value={payload.email}
            />
          </Box>
          <Box sx={classes.signin_input_con}>
            <InputLabel
              shrink
              htmlFor="password"
              sx={classes.signin_input_labels}
            >
              Password
            </InputLabel>
            <TextField
              type="password"
              id="password"
              fullWidth
              sx={classes.signin_textInputs}
              InputProps={{
                style: {
                  fontSize: "12px",
                  fontWeight: "lighter",
                  color: "#2499E3",
                },
              }}
              onChange={handleChange("password")}
              value={payload.password}
            />
          </Box>
          <Box sx={classes.signin_checkbox_forgotpass_con}>
            <Box sx={classes.signin_checkbox_con}>
              <Checkbox sx={classes.signin_checkbox} size="small" />
              <Typography
                variant="caption"
                sx={classes.signin_checkbox_forgotpass_label}
              >
                Remember me?
              </Typography>
            </Box>
            <Link
              component={NLink}
              to="/forgotpass"
              sx={[
                classes.signin_checkbox_forgotpass_label,
                { fontWeight: "bolder", textDecoration: "none" },
              ]}
            >
              Forgot Password
            </Link>
          </Box>
          <Button sx={classes.signin_btn} onClick={login}>
            <Typography variant="caption">Sign in</Typography>
          </Button>
          <Box sx={classes.signup_link_con}>
            <Typography
              variant="caption"
              sx={[classes.signup_link_label, { marginRight: "10px" }]}
            >
              No Account?
            </Typography>
            <Link
              component={NLink}
              to="/signup"
              sx={[
                classes.signup_link_label,
                { fontWeight: "bolder", textDecoration: "none" },
              ]}
            >
              Sign up
            </Link>
          </Box>
        </Paper>
      </Box>
      <Box
        component="img"
        src={backGroundImg}
        alt="background_img"
        sx={classes.signin_background_img}
      />
    </Box>
  );
}
