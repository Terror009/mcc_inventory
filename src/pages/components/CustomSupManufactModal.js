import React, { useState } from "react";
import {
  Modal,
  Box,
  Paper,
  Typography,
  TextField,
  IconButton,
  Button,
} from "@mui/material";

import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";
import { classes } from "../../design/uiDesign";

export default function CustomSupManufactModal ({
  open,
  onClose,
  company_info,
  path_url,
}) {
  const [edit_modal, setEdit_modal] = useState({
    isOpen: false,
  });
  const ModalHandleOpen = () => {
    setEdit_modal({ ...edit_modal, isOpen: true });
  };
  const ModalHandleClose = () => {
    setEdit_modal({ ...edit_modal, isOpen: false });
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
          height: "400px",
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
          {path_url === "/suppliers" ? (
            <Typography
              variant="h5"
              sx={{ color: (theme) => theme.palette.textColor.col3 }}
            >
              Supplier Information
            </Typography>
          ) : (
            <Typography
              variant="h5"
              sx={{ color: (theme) => theme.palette.textColor.col3 }}
            >
              Manufacturer Information
            </Typography>
          )}
          <Box component="span" sx={{ flexGrow: "1" }} />
          <IconButton onClick={ModalHandleOpen}>
            <EditIcon />
          </IconButton>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "20px 40px" }}
        >
          <Typography
            sx={{
              marginRight: "132px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Name
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>{company_info.name}</Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "20px 40px" }}
        >
          {path_url === "/suppliers" ? (
            <Typography
              sx={{
                marginRight: "100px",
                color: (theme) => theme.palette.textColor.col3,
                fontSize: "14px",
              }}
            >
              Supplier ID
            </Typography>
          ) : (
            <Typography
              sx={{
                marginRight: "66px",
                color: (theme) => theme.palette.textColor.col3,
                fontSize: "14px",
              }}
            >
              Manufacturer ID
            </Typography>
          )}
          <Typography sx={{ fontSize: "14px" }}>{company_info.id}</Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "20px 40px" }}
        >
          <Typography
            sx={{
              marginRight: "135px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Email
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {company_info.email}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "20px 40px" }}
        >
          <Typography
            sx={{
              marginRight: "95px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Contact No.
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {company_info.contact}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "20px 40px" }}
        >
          <Typography
            sx={{
              marginRight: "120px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Address
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            {company_info.address}
          </Typography>
        </Box>
        <CustomSupManufactEditModal
          open={edit_modal.isOpen}
          onClose={ModalHandleClose}
          company_info={company_info}
          path_url={path_url}
        />
      </Paper>
    </Modal>
  );
};

function CustomSupManufactEditModal ({
  open,
  onClose,
  company_info,
  path_url,
}) {
  const [edit, SetEdit] = useState({
    name: company_info.name,
    id: company_info.id,
    email: company_info.email,
    contact: company_info.contact,
    address: company_info.address,
  });

  const HandleChange = (prop) => (e) => {
    SetEdit({ ...edit, [prop]: e.target.value });
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
          {path_url === "/suppliers" ? (
            <Typography
              variant="h5"
              sx={{ color: (theme) => theme.palette.textColor.col3 }}
            >
              Supplier Information
            </Typography>
          ) : (
            <Typography
              variant="h5"
              sx={{ color: (theme) => theme.palette.textColor.col3 }}
            >
              Manufacturer Information
            </Typography>
          )}
          <Box component="span" sx={{ flexGrow: "1" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{
              marginRight: "120px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Name
          </Typography>
          <TextField
            onChange={HandleChange("name")}
            value={edit.name}
            size="small"
            sx={classes.edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          {path_url === "/suppliers" ? (
            <Typography
              sx={{
                marginRight: "88px",
                color: (theme) => theme.palette.textColor.col3,
                fontSize: "14px",
              }}
            >
              Supplier ID
            </Typography>
          ) : (
            <Typography
              sx={{
                marginRight: "56px",
                color: (theme) => theme.palette.textColor.col3,
                fontSize: "14px",
              }}
            >
              Manufacturer ID
            </Typography>
          )}
          <TextField
            onChange={HandleChange("id")}
            value={edit.id}
            size="small"
            sx={classes.edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          <Typography
            sx={{
              marginRight: "122px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Email
          </Typography>
          <TextField
            onChange={HandleChange("email")}
            value={edit.email}
            size="small"
            sx={classes.edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          <Typography
            sx={{
              marginRight: "84px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Contact No.
          </Typography>
          <TextField
            onChange={HandleChange("contact")}
            value={edit.contact}
            size="small"
            sx={classes.edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 20px" }}
        >
          <Typography
            sx={{
              marginRight: "108px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Address
          </Typography>
          <TextField
            onChange={HandleChange("address")}
            value={edit.address}
            size="small"
            sx={classes.edit_input}
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
              height: "40px",
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
              height: "40px",
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
