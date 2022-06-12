import React, { useState, useEffect } from "react";

import {
  Box,
  Paper,
  Typography,
  Button,
  Checkbox,
  InputLabel,
  Link,
  TextField,
} from "@mui/material";

import { Link as NLink } from "react-router-dom";

import backgroundImg from "../assets/img/background.png";
import mccLogo from "../assets/img/mcc.jpg";
import { ReactComponent as HashTagIcon } from "../assets/svg/logo1.svg";
import { ReactComponent as FacebookIcon } from "../assets/svg/facebook.svg";
import { ReactComponent as GoogleIcon } from "../assets/svg/google.svg";

import { classes } from "../design/uiDesign";

import { signup } from "../api/adminApi";

export default function UserSignup() {
  const [payload, Setpayload] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleChange = (prop) => (e) => {
    Setpayload({ ...payload, [prop]: e.target.value });
  };

  const Signup = () => {
    const obj = {
      firstname: payload.fname,
      lastname: payload.lname,
      email: payload.email,
      password: payload.password,
      session_key: (Math.random() + 2).toString(36).substring(7),
    };

    const session_key = {
      session_key: obj.session_key,
    }
    signup(obj);
    localStorage.setItem("user", JSON.stringify(session_key));
  };
  return (
    <Box sx={classes.root}>
      <Box
        component="img"
        src={backgroundImg}
        alt="right_side_background_img"
        sx={classes.signup_left_side_com}
      />
      <Box sx={classes.signup_right_side_com}>
        <Box
          component="img"
          src={mccLogo}
          alt="mcc_logo"
          sx={classes.signup_mcc_logo}
        />
        <HashTagIcon
          style={{
            position: "absolute",
            top: 0,
            right: "-20%",
            height: "40vh",
            width: "40vw",
          }}
        />
        <Paper sx={classes.signup_form}>
          <Typography variant="h5">Sign Up</Typography>
          <Typography variant="caption" sx={classes.signup_label}>
            Create your account now
          </Typography>
          <Box sx={classes.signup_main_input_con}>
            <Box sx={[classes.signup_input_con, { marginRight: "20px" }]}>
              <InputLabel
                shrink
                htmlFor="firstname"
                sx={classes.signup_input_labels}
              >
                Firstname
              </InputLabel>
              <TextField
                type="text"
                id="firstname"
                sx={classes.signup_textInputs}
                fullWidth
                InputProps={{
                  style: {
                    fontSize: "12px",
                    fontWeight: "lighter",
                    color: "#2499E3",
                  },
                }}
                onChange={handleChange("fname")}
                value={payload.fname}
              />
            </Box>
            <Box sx={classes.signup_input_con}>
              <InputLabel
                shrink
                htmlFor="lastname"
                sx={classes.signup_input_labels}
              >
                Lastname
              </InputLabel>
              <TextField
                type="text"
                id="lastname"
                sx={classes.signup_textInputs}
                fullWidth
                InputProps={{
                  style: {
                    fontSize: "12px",
                    fontWeight: "lighter",
                    color: "#2499E3",
                  },
                }}
                onChange={handleChange("lname")}
                value={payload.lname}
              />
            </Box>
          </Box>
          <Box sx={classes.signup_main_input_con}>
            <Box sx={[classes.signup_input_con, { marginRight: "20px" }]}>
              <InputLabel
                shrink
                htmlFor="email"
                sx={classes.signup_input_labels}
              >
                Email
              </InputLabel>
              <TextField
                type="email"
                id="email"
                sx={classes.signup_textInputs}
                fullWidth
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
            <Box sx={classes.signup_input_con}>
              <InputLabel
                shrink
                htmlFor="password"
                sx={classes.signup_input_labels}
              >
                Password
              </InputLabel>
              <TextField
                type="password"
                id="password"
                sx={classes.signup_textInputs}
                fullWidth
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
          </Box>
          <Box sx={classes.signup_checkbox_box}>
            <Checkbox size="small" />
            <Typography variant="caption" sx={classes.signup_checkbox_label}>
              I agree with terms of use
            </Typography>
          </Box>
          <Button sx={classes.signup_btn} onClick={Signup}>
            <Typography variant="caption">Sign Up</Typography>
          </Button>
          <Typography variant="caption" sx={[classes.signup_other_acc_label]}>
            or sign up with other account?
          </Typography>
          <Box sx={classes.signup_other_acc_con}>
            <GoogleIcon />
            <FacebookIcon />
          </Box>
          <Box sx={classes.signin_link_con}>
            <Typography variant="caption" sx={classes.signin_link_label}>
              Already have account?{" "}
            </Typography>
            <Link component={NLink} to="/signin" sx={classes.signin_link}>
              Sign in
            </Link>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
