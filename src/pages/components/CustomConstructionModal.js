import React, { useState } from "react";
import {
  Modal,
  Box,
  Paper,
  Typography,
  IconButton,
  Button,
  TextField,
} from "@mui/material";

import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";
import { classes } from "../../design/uiDesign";

export const CustomConstructionInfo = ({
  open,
  onClose,
  construction_info,
}) => {
  const [construct_edit_modal, setconstruct_edit_modal] = useState({
    isOpen: false,
  });

  const ConstructModalHandleOpen = () => {
    setconstruct_edit_modal({ ...setconstruct_edit_modal, isOpen: true });
  };
  const ConstructModalHandleClose = () => {
    setconstruct_edit_modal({ ...setconstruct_edit_modal, isOpen: false });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginLeft: "40px",
      }}
    >
      <Paper
        sx={{
          height: "250px",
          width: "1000px",
          outline: "none",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 20px",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
          }}
        >
          <Typography>{construction_info.client_name} Information</Typography>
          <Box component="span" sx={{ flexGrow: "1" }} />
          <IconButton onClick={ConstructModalHandleOpen}>
            <EditIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "20px 40px",
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{
              marginRight: "66px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Site Name:
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {construction_info.site_name}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "20px 40px" }}
        >
          <Typography
            sx={{
              marginRight: "54px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Client Name:
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {construction_info.client_name}
          </Typography>
        </Box>
        <ConstructionEditModal
          open={construct_edit_modal.isOpen}
          onClose={ConstructModalHandleClose}
          construction_info={construction_info}
        />
      </Paper>
    </Modal>
  );
};

const ConstructionEditModal = ({ open, onClose, construction_info }) => {
  const [payload, setpayload] = useState({
    site_name: construction_info.site_name,
    client_name: construction_info.client_name,
  });

  const ConstructHandleChange = (prop) => (e) => {
    setpayload({ ...payload, [prop]: e.target.value });
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginLeft: "40px",
      }}
    >
      <Paper
        sx={{
          height: "300px",
          width: "1000px",
          outline: "none",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "15px 20px",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
          }}
        >
          <Typography>{construction_info.client_name} Information</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "20px 40px",
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{
              marginRight: "54px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Site Name:
          </Typography>
          <TextField
            onChange={ConstructHandleChange("site_name")}
            value={payload.site_name}
            sx={classes.construction_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "20px 40px" }}
        >
          <Typography
            sx={{
              marginRight: "44px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Client Name:
          </Typography>
          <TextField
            onChange={ConstructHandleChange("client_name")}
            value={payload.client_name}
            sx={classes.construction_edit_input}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px 0px",
          }}
        >
          <Button
            sx={{
              height: "35px",
              width: "150px",
              border: "1px solid #3A57E8",
              borderRadius: "10px",
              color: (theme) => theme.palette.textColor.col1,
              marginRight: "40px",
            }}
          >
            <Typography>Save</Typography>
          </Button>
          <Button
            sx={{
              height: "35px",
              width: "150px",
              border: "1px solid #439B38",
              borderRadius: "10px",
              color: (theme) => theme.palette.textColor.col6,
            }}
          >
            <Typography>Cancel</Typography>
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};
