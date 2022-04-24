import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Paper,
  IconButton,
  TextField,
  Button,
} from "@mui/material";

import { ReactComponent as ArrowDownIcon } from "../../assets/svg/black_arrow_down.svg";
import { ReactComponent as UploadIcon } from "../../assets/svg/upload.svg";
import { classes } from "../../design/uiDesign";
import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";



export default function CustomMaterialModal({ open, onClose, material_info }) {
  const [payload, Setpayload] = useState({
    isOpen: false,
  });

  const ModalHandleOpen = () => {
    Setpayload({ ...payload, isOpen: true });
  };
  const ModalHandleClose = () => {
    Setpayload({ ...payload, isOpen: false });
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
          height: "500px",
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
          <Typography>{material_info.name} Information</Typography>
          <Box Component="span" sx={{ flexGrow: "1" }} />
          <IconButton onClick={ModalHandleOpen}>
            <EditIcon />
          </IconButton>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "160px",
            }}
          >
            Name
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.name}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "100px",
            }}
          >
            Storage Location
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.location}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "147px",
            }}
          >
            Quantity
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.quantity}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "110px",
            }}
          >
            Inventory Code
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.inventory_code}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "118px",
            }}
          >
            Product Code
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.product_code}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "122px",
            }}
          >
            Manufacturer
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.manufacturer}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "125px",
            }}
          >
            Part Number
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.part_no}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,

              marginRight: "112px",
            }}
          >
            Item Condition
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_info.status}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,

              marginRight: "82px",
            }}
          >
            Parts Requirements
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>N/A</Typography>
        </Box>
        <CustomMaterialEditModal
          open={payload.isOpen}
          onClose={ModalHandleClose}
          material_info={material_info}
        />
      </Paper>
    </Modal>
  );
}

function CustomMaterialEditModal({
  open,
  onClose,
  material_info,
}) {
  const [material_edit, Setmaterial_edit] = useState({
    name: material_info.name,
    quantity: material_info.quantity,
    location: material_info.location,
    inventory_code: material_info.inventory_code,
    product_code: material_info.product_code,
    part_no: material_info.part_no,
    item_condition: material_info.status,
    manufacturer: material_info.manufacturer,
  });

  const MaterialHandleChange = (prop) => (e) => {
    Setmaterial_edit({ ...material_edit, [prop]: e.target.value });
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
          height: "600px",
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
            padding: "15px 20px",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
          }}
        >
          <Typography>{material_info.name} Information</Typography>
          <Box component="span" sx={{ flexGrow: "1" }} />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "150px",
            }}
          >
            Name
          </Typography>
          <TextField
            value={material_edit.name}
            onChange={MaterialHandleChange("name")}
            size="small"
            sx={classes.material_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "90px",
            }}
          >
            Storage Location
          </Typography>
          <TextField
            value={material_edit.location}
            onChange={MaterialHandleChange("location")}
            size="small"
            sx={classes.material_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "138px",
            }}
          >
            Quantity
          </Typography>
          <TextField
            value={material_edit.quantity}
            onChange={MaterialHandleChange("qunatity")}
            size="small"
            sx={classes.material_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "100px",
            }}
          >
            Inventory Code
          </Typography>
          <TextField
            value={material_edit.inventory_code}
            onChange={MaterialHandleChange("inventory_code")}
            size="small"
            sx={classes.material_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "108px",
            }}
          >
            Product Code
          </Typography>
          <TextField
            value={material_edit.product_code}
            onChange={MaterialHandleChange("product_code")}
            size="small"
            sx={classes.material_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "110px",
            }}
          >
            Manufacturer
          </Typography>
          <TextField
            value={material_edit.manufacturer}
            onChange={MaterialHandleChange("manufacturer")}
            size="small"
            sx={classes.material_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "112px",
            }}
          >
            Part Number
          </Typography>
          <TextField
            value={material_edit.part_no}
            onChange={MaterialHandleChange("part_no")}
            size="small"
            sx={classes.material_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "102px",
            }}
          >
            Item Condition
          </Typography>
          <TextField
            value={material_edit.item_condition}
            onChange={MaterialHandleChange("item_codition")}
            size="small"
            sx={classes.material_edit_input}
            InputProps={{
              endAdornment: <ArrowDownIcon />,
            }}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "10px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "75px",
            }}
          >
            Parts Requirements
          </Typography>
          <Button
            sx={{
              border: "1px solid blue",
              color: (theme) => theme.palette.textColor.col1,
              textTransform: "capitalize",
              borderRadius: "10px"
            }}
          >
            <UploadIcon style={{ marginRight: "5px"}}/>
            <Typography sx={{ fontSize: "12px" }}>Upload</Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 0px",
          }}
        >
          <Button
            sx={{
              height: "30px",
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
              height: "30px",
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
}
