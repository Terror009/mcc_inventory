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

import { classes } from "../../design/uiDesign";

import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";

import { updateMaterialLevelApi } from "../../api/materiallevelApi";

export default function CustomMaterialLevelModal({
  open,
  onClose,
  material_level_info,
}) {
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
          <Typography>{material_level_info.material}'s Information</Typography>
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
            Material
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_level_info.material}
          </Typography>
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
            Location
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_level_info.location}
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
            Quantity on hand
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_level_info.quantity_on_hand}
          </Typography>
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
            On order
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_level_info.on_order}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "180px",
            }}
          >
            Date
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            {material_level_info.stock_date}
          </Typography>
        </Box>
        <CustomMaterialEditLevelModal
          open={payload.isOpen}
          onClose={ModalHandleClose}
          material_level_info={material_level_info}
        />
      </Paper>
    </Modal>
  );
}

function CustomMaterialEditLevelModal({ open, onClose, material_level_info }) {
  const [material_edit, Setmaterial_edit] = useState({
    material: material_level_info.material,
    location: material_level_info.location,
    quantity_on_hand: material_level_info.quantity_on_hand,
    on_order: material_level_info.on_order,
    stock_date: material_level_info.stock_date,
  });

  const MaterialHandleChange = (prop) => (e) => {
    Setmaterial_edit({ ...material_edit, [prop]: e.target.value });
  };
  const UpdateMaterial = () => {
    const obj = {
      material: material_edit.material,
      location: material_edit.location,
      quantity_on_hand: material_edit.quantity_on_hand,
      on_order: material_edit.on_order,
      stock_date: new Date().toLocaleDateString(),
      material_level_id: material_level_info.material_level_id,
    };
    updateMaterialLevelApi(obj);
    isClose();
    window.location.reload();
  };
  const isClose = () => {
    onClose();
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
          <Typography>{material_level_info.material}'s Information</Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "120px",
            }}
          >
            Material
          </Typography>
          <TextField
            value={material_edit.material}
            onChange={MaterialHandleChange("material")}
            sx={classes.material_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "120px",
            }}
          >
            Location
          </Typography>
          <TextField
            value={material_edit.location}
            onChange={MaterialHandleChange("location")}
            sx={classes.material_edit_input}
          />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", padding: "15px 40px" }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: (theme) => theme.palette.textColor.col4,
              marginRight: "70px",
            }}
          >
            Quantity on hand
          </Typography>
          <TextField
            value={material_edit.quantity_on_hand}
            onChange={MaterialHandleChange("quantity_on_hand")}
            sx={classes.material_edit_input}
          />
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
            On Order
          </Typography>
          <TextField
            value={material_edit.on_order}
            onChange={MaterialHandleChange("on_order")}
            sx={classes.material_edit_input}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 0px",
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
            onClick={UpdateMaterial}
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
            onClick={isClose}
          >
            <Typography>Cancel</Typography>
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
}
