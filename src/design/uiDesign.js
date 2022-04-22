export const classes = {
  root: {
    display: "flex",
    height: "100vh",
  },

  //START OF SIGN IN DESIGN//

  signin_left_side_com: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "56%",
  },
  signin_mcc_logo: {
    position: "absolute",
    top: "50px",
    left: "50px",
    height: "100px",
    width: "180px",
  },
  signin_form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    width: "25vw",
    marginTop: "100px",
    boxShadow: "none",
  },
  signin_input_con: {
    width: "100%",
  },
  signin_input_labels: {
    marginTop: "20px",
    color: (theme) => theme.palette.textColor.col1,
  },
  signin_textInputs: {
    "& label.Mui-focused": {
      borderColor: (theme) => theme.palette.secondary.main,
    },
    "& .MuiInput-underline:after": {
      borderColor: (theme) => theme.palette.secondary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: (theme) => theme.palette.secondary.main,
        color: (theme) => theme.palette.textColor.col1,
        height: "50px",
        borderWidth: "1px",
        backgroundColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: (theme) => theme.palette.secondary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: (theme) => theme.palette.secondary.main,
      },
    },
  },
  signin_checkbox_forgotpass_con: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "",
    marginTop: "10px",
  },
  signin_checkbox_con: {
    display: "flex",
    backgroundColor: "",
    marginTop: "5px",
  },
  signin_checkbox: {
    height: "0px",
    width: "0px",
    marginRight: "10px",
    color: (theme) => theme.palette.secondary.main,
    "&.Mui-checked": {
      color: (theme) => theme.palette.secondary.main,
    },
  },
  signin_forgotpass_link: {
    textDecoration: "none",
  },
  signin_checkbox_forgotpass_label: {
    fontSize: "12px",
    fontWeight: "lighter",
    color: (theme) => theme.palette.textColor.col1,
  },
  signin_btn: {
    height: "40px",
    width: "12vw",
    backgroundColor: (theme) => theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: (theme) => theme.palette.secondary.bg1,
    },
    marginTop: "20px",
  },
  signup_link_con: {
    marginTop: "10px",
  },
  signup_link_label: {
    fontSize: "12px",
    fontWeight: "lighter",
    color: (theme) => theme.palette.textColor.col1,
  },
  signin_background_img: {
    width: "50%",
  },

  //END OF SIGN IN DESIGN//

  signup_left_side_com: {
    width: "50%",
  },
  signup_right_side_com: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "56%",
    overflow: "hidden",
  },
  signup_mcc_logo: {
    position: "absolute",
    top: "40px",
    right: "40px",
    height: "80px",
    width: "150px",
  },
  signup_form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    width: "35vw",
    marginTop: "100px",
    boxShadow: "none",
  },
  signup_label: {
    fontSize: "12px",
    fontWeight: "lighter",
    color: (theme) => theme.palette.textColor.col1,
  },
  signup_main_input_con: {
    display: "flex",
    backgroundColor: "",
    width: "100%",
  },
  signup_input_con: {
    width: "100%",
  },
  signup_input_labels: {
    marginTop: "20px",
    color: (theme) => theme.palette.textColor.col1,
  },
  signup_textInputs: {
    "& label.Mui-focused": {
      borderColor: (theme) => theme.palette.secondary.main,
    },
    "& .MuiInput-underline:after": {
      borderColor: (theme) => theme.palette.secondary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: (theme) => theme.palette.secondary.main,
        color: (theme) => theme.palette.textColor.col1,
        borderWidth: "1px",
        height: "50px",
        backgroundColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: (theme) => theme.palette.secondary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: (theme) => theme.palette.secondary.main,
      },
    },
  },
  signup_checkbox_con: {
    display: "flex",
    backgroundColor: "",
    marginTop: "5px",
  },
  signup_checkbox_label: {
    fontSize: "12px",
    fontWeight: "lighter",
    color: (theme) => theme.palette.textColor.col1,
  },
  signup_btn: {
    height: "40px",
    width: "12vw",
    backgroundColor: (theme) => theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: (theme) => theme.palette.secondary.bg1,
    },
    marginTop: "10px",
  },
  signup_other_acc_label: {
    fontSize: "12px",
    fontWeight: "lighter",
    color: (theme) => theme.palette.textColor.col1,
    marginTop: "20px",
  },
  signup_other_acc_con: {
    marginTop: "20px",
  },
  signin_link_con: {
    backgroundColor: "",
  },
  signin_link_label: {
    fontSize: "12px",
    fontWeight: "lighter",
    color: (theme) => theme.palette.textColor.col1,
  },
  signin_link: {
    fontSize: "12px",
    fontWeight: "bolder",
    color: (theme) => theme.palette.textColor.col1,
    textDecoration: "none",
  },

  supplier_edit_input: {
    width: "80%",
    borderRadius: "10px",
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        transition: "all 0.4s ease",
        borderColor: (theme) => theme.palette.secondary.main,
        outline: "none",
      },
      "&.Mui-focused fieldset": {
        transition: "all 0.4s ease",
        borderColor: (theme) => theme.palette.secondary.bg2,
      },
    },
  },
  material_edit_input: {
    width: "77%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px",
      height: "35px",
      fontSize: "12px",
      "&:hover fieldset": {
        transition: "all 0.4s ease",
        borderColor: (theme) => theme.palette.secondary.main,
        outline: "none",
      },
      "&.Mui-focused fieldset": {
        transition: "all 0.4s ease",
        borderColor: (theme) => theme.palette.secondary.bg2,
      },
    },
  },
  construction_edit_input: {
    width: "85%",
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px",
      height: "35px",
      fontSize: "12px",
      "&:hover fieldset": {
        transition: "all 0.4s ease",
        borderColor: (theme) => theme.palette.secondary.main,
        outline: "none",
      },
      "&.Mui-focused fieldset": {
        transition: "all 0.4s ease",
        borderColor: (theme) => theme.palette.secondary.bg2,
      },
    },
  },
};
