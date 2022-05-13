import React, { useState } from "react";

import {
  Modal,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

import { createMaterial } from "../../api/materialApi";
import { classes } from "../../design/uiDesign";

export default function CustomAddNewMaterial({ open, onClose }) {
  const [payload, Setpayload] = useState({
    material_name: "",
    material_quantity: "",
    material_manufacturer: "",
    material_part_name: "",
    material_item_condition: "",
    material_type: "",
    material_part_no: "",
    material_part_requirement: "",
  });

  const AddNewHandleChange = (prop) => (e) => {
    Setpayload({ ...payload, [prop]: e.target.value });
  };

  const isClose = () => {
    onClose();
    Setpayload({
      ...payload,
      material_name: "",
      material_quantity: "",
      material_manufacturer: "",
      material_part_name: "",
      material_item_condition: "",
      material_type: "",
      material_part_no: "",
      material_part_requirement: "",
    });
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
            padding: "10px 20px",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: (theme) => theme.palette.textColor.col3 }}
          >
            Add New Material
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "90px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Name
          </Typography>
          <TextField
            sx={classes.material_edit_input}
            value={payload.material_name}
            onChange={AddNewHandleChange("material_name")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "90px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Manufacturer
          </Typography>
          <TextField
            sx={classes.material_edit_input}
            value={payload.material_quantity}
            onChange={AddNewHandleChange("material_quantity")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "90px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Quantity
          </Typography>
          <TextField
            sx={classes.material_edit_input}
            value={payload.material_quantity}
            onChange={AddNewHandleChange("material_quantity")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "90px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Part Name
          </Typography>
          <TextField
            sx={classes.material_edit_input}
            value={payload.material_quantity}
            onChange={AddNewHandleChange("material_quantity")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "90px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Item Condition
          </Typography>
          <Select
            sx={{
              width: "80%",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: (theme) => theme.palette.secondary.main,
              backgroundColor: "transparent",
            }}
            size="small"
          >
            <MenuItem>AVAILABLE</MenuItem>
            <MenuItem>NOT AVAILABLE</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "90px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Type
          </Typography>
          <TextField
            sx={classes.material_edit_input}
            value={payload.material_type}
            onChange={AddNewHandleChange("material_type")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              marginRight: "90px",
              color: (theme) => theme.palette.textColor.col3,
              fontSize: "14px",
            }}
          >
            Part No
          </Typography>
          <TextField
            sx={classes.material_edit_input}
            value={payload.material_part_no}
            onChange={AddNewHandleChange("material_part_no")}
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
            onClick={isClose}
          >
            <Typography>Cancel</Typography>
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
}
