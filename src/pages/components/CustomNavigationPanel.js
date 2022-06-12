import React, { useState, useEffect } from "react";

import {
  Box,
  Typography,
  Button,
  Checkbox,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Fade,
} from "@mui/material";
import { ReactComponent as TimesIcon } from "../../assets/svg/time.svg";
import { ReactComponent as ArrowDownIcon1 } from "../../assets/svg/black_arrow_down.svg";
import { ReactComponent as DetailIcon } from "../../assets/svg/detail.svg";

import CustomNotifDetailModal from "./CustomNotifDetailModal";

import { API } from "../../api/api";
import axios from "axios";
import {
  deleteRequest,
  rejectRequest,
  acceptRequest,
} from "../../api/materialRequestApi";

export default function CustomNavigationPanel({ open, onClose }) {
  const [notif, SetNotif] = useState({
    isNotif: [{}],
  });

  const [admin, SetAdmin] = useState({
    data: [{}],
  });

  const [modal, SetModal] = useState({
    isOpen: false,
  });

  const [select, SetSelect] = useState({
    isSelect: false,
  });
  const [material_info, SetMaterial_info] = useState({
    data: [{}],
  });

  const [deleteData, SetDeleteData] = useState([]);

  const [deleteAllData, SetDeleteAllData] = useState([]);

  const ModalHandleChangeOpen = () => {
    SetModal({ ...modal, isOpen: true });
  };

  const ModalHandleChangeClose = () => {
    SetModal({ ...modal, isOpen: false });
  };

  const MaterialData = (data) => {
    SetMaterial_info({ ...material_info, data: data });
  };

  const MaterialFunc = (data) => {
    ModalHandleChangeOpen();
    MaterialData(data);
  };

  const SelectFunc = () => {
    SetSelect({ ...select, isSelect: !select.isSelect });
  };

  const isClose = () => {
    onClose();
  };

  const isChecked = (e) => {
    const { id, checked } = e.target;
    if (id === "checkAll") {
      let tempUser = notif.isNotif.map((index) => {
        return { ...index, ischecked: checked };
      });
      SetNotif({ ...notif, isNotif: tempUser });
      let data_arr = [];

      tempUser.forEach((index) => {
        const obj = {
          material_request_id: index.material_request_id,
          material_name: index.material_name,
          manufacturer: index.manufacturer,
          storage_location: index.storage_location,
          quantity: index.quantity,
          date_requested: index.date_requested,
        };
        data_arr.push(obj);
      });
      if (!checked) {
        SetDeleteAllData(deleteAllData.filter((index) => index === data_arr));
        SetDeleteData(
          deleteData.filter((index) => index.material_request_id === data_arr)
        );
      } else {
        SetDeleteAllData(data_arr);
        SetDeleteData(
          deleteData.filter((index) => index.material_request_id === data_arr)
        );
      }
    } else {
      let tempUser = notif.isNotif.map((index) =>
        index.material_request_id === id
          ? { ...index, ischecked: checked }
          : index
      );
      SetNotif({ ...notif, isNotif: tempUser });
      let dat_arr = [];

      tempUser.forEach((index) => {
        const obj = {
          material_request_id: index.material_request_id,
          material_name: index.material_name,
          manufacturer: index.manufacturer,
          storage_location: index.storage_location,
          quantity: index.quantity,
          date_requested: index.date_requested,
        };
        dat_arr.push(obj);
      });
      let removeItem = id;
      if (!checked) {
        SetDeleteData(
          deleteData.filter((index) => index.material_request_id !== removeItem)
        );
        SetDeleteAllData(
          deleteAllData.filter(
            (index) => index.material_request_id !== removeItem
          )
        );
      } else {
        SetDeleteData([...deleteData, { material_request_id: id }]);
        SetDeleteAllData(
          deleteAllData.filter(
            (index) => index.material_request_id !== removeItem
          )
        );
      }
    }
  };
  const DeleteData = () => {
    deleteAllData.forEach((index) => {
      const obj = {
        material_request_id: index.material_request_id,
      };
      console.log(obj);
      deleteRequest(obj);
    });
    deleteData.forEach((index) => {
      const obj = {
        material_request_id: index.material_request_id,
      };
      console.log(obj);
      deleteRequest(obj);
    });
    window.location.reload();
  };

  const AccepRequest = (data) => {
    let data_arr = [];
    data_arr.push(data);
    data_arr.forEach((index) => {
      admin.data.forEach((index1) => {
        const obj = {
          user_name: index.user_name,
          user_email: index.user_email,
          material_name: index.material_name,
          manufacturer: index.manufacturer,
          storage_location: index.storage_location,
          quantity: index.quantity,
          date_accepted: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
          status: "Accept",
          admin_name: index1.firstname + index1.lastname,
          admin_email: index1.email,
          user_id: index.user_id,
        };
        const obj1 = {
          material_request_id: index.material_request_id,
        };
        deleteRequest(obj1);
        acceptRequest(obj);
        console.log(obj);
      });
    });
    window.location.reload();
  };
  const RejectRequest = (data) => {
    let data_arr = [];
    data_arr.push(data);
    data_arr.forEach((index) => {
      admin.data.forEach((index1) => {
        const obj = {
          user_name: index.user_name,
          user_email: index.user_email,
          material_name: index.material_name,
          manufacturer: index.manufacturer,
          storage_location: index.storage_location,
          quantity: index.quantity,
          date_accepted: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }),
          status: "Reject",
          admin_name: index1.firstname + index1.lastname,
          admin_email: index1.email,
          user_id: index.user_id,
        };
        const obj1 = {
          material_request_id: index.material_request_id,
        };
        deleteRequest(obj1);
        rejectRequest(obj);
        console.log(obj);
      });
    });
     window.location.reload();
  };
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: API.materialRequest.fetchMaterial,
      })
        .then((response) => {
          console.log(response.data);
          SetNotif({ ...notif, isNotif: response.data });
        })
        .catch(({ response }) => {
          console.log(response.data);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("user"));
    const obj = {
      session_key: admin.session_key,
    };
    const fetchData = async () => {
      await axios({
        method: "POST",
        url: API.admin.findAdmin,
        data: JSON.stringify(obj),
      })
        .then((response) => {
          console.log(response.data);
          SetAdmin({ ...admin, data: response.data });
        })
        .catch(({ response }) => {
          console.log(response);
        });
    };
    fetchData();
  }, []);
  return (
    <Fade in={open}>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          top: "70px",
          right: "10%",
          height: "500px",
          width: "400px",
          backgroundColor: (theme) => theme.palette.primary.main,
          zIndex: "100000",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
            padding: "10px 10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              color: (theme) => theme.palette.textColor.col1,
            }}
          >
            Notification
          </Typography>
          <Box component="span" sx={{ flexGrow: "1" }} />
          <IconButton onClick={isClose}>
            <TimesIcon
              style={{ height: "20px", width: "20px", color: "#3A57E8" }}
            />
          </IconButton>
        </Box>
        {notif.isNotif.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                color: (theme) => theme.palette.textColor.col3,
              }}
            >
              No Notification
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              overflow: "auto",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {notif.isNotif.map((index, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: select.isSelect ? "0px 10px" : "0px 0px",
                }}
              >
                <Accordion
                  sx={{
                    width: "97%",
                    boxShadow: "none",
                    marginTop: "10px",
                    backgroundColor: "transparent",
                    "&.MuiAccordion-root:before": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ArrowDownIcon1 style={{ color: "#3A57E8" }} />}
                  >
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: (theme) => theme.palette.textColor.col1,
                      }}
                    >
                      {index.user_email + " "} send a request for a material
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "10px 10px",
                        backgroundColor: "",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: (theme) => theme.palette.textColor.col1,
                        }}
                      >
                        See Details
                      </Typography>
                      <IconButton onClick={() => MaterialFunc(index)}>
                        <DetailIcon
                          style={{
                            height: "20px",
                            width: "20px",
                            color: "#3A57E8",
                          }}
                        />
                      </IconButton>
                    </Box>
                    <Box sx={{ padding: "10px 20px", backgroundColor: "" }}>
                      <Button
                        sx={{
                          height: "30px",
                          width: "80px",
                          borderStyle: "solid",
                          borderWidth: "1px",
                          borderColor: (theme) => theme.palette.secondary.main,
                          marginRight: "10px",
                        }}
                        onClick={(e) => AccepRequest(index)}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: (theme) => theme.palette.textColor.col1,
                          }}
                        >
                          Accept
                        </Typography>
                      </Button>
                      <Button
                        sx={{
                          height: "30px",
                          width: "80px",
                          borderStyle: "solid",
                          borderWidth: "1px",
                          borderColor: (theme) => theme.palette.secondary.bg4,
                        }}
                        onClick={(e) => RejectRequest(index)}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: (theme) => theme.palette.textColor.col6,
                          }}
                        >
                          Reject
                        </Typography>
                      </Button>
                    </Box>
                  </AccordionDetails>
                </Accordion>
                {select.isSelect ? (
                  <Checkbox
                    id={index.material_request_id}
                    onClick={isChecked}
                    checked={index?.ischecked || false}
                    color="secondary"
                    sx={{ height: "20px", width: "20px" }}
                  />
                ) : (
                  ""
                )}
              </Box>
            ))}
          </Box>
        )}

        <Box component="span" sx={{ flexGrow: "1" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 10px",
            backgroundColor: (theme) => theme.palette.secondary.bg3,
          }}
        >
          <Button
            sx={{
              height: "20px",
              width: "80px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: (theme) => theme.palette.secondary.main,
              marginRight: "10px",
            }}
            onClick={SelectFunc}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: (theme) => theme.palette.textColor.col1,
              }}
            >
              Select
            </Typography>
          </Button>
          <Button
            sx={{
              height: "20px",
              width: "80px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: (theme) => theme.palette.secondary.bg5,
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: (theme) => theme.palette.textColor.col6,
              }}
              onClick={DeleteData}
            >
              Clear
            </Typography>
          </Button>
          <Box component="span" sx={{ flexGrow: "1" }} />
          {select.isSelect ? (
            <Checkbox
              id="checkAll"
              onClick={isChecked}
              checked={
                !notif.isNotif.some((index) => index?.ischecked !== true)
              }
              color="secondary"
              sx={{ height: "20px", width: "20px" }}
            />
          ) : (
            ""
          )}
        </Box>
        <CustomNotifDetailModal
          open={modal.isOpen}
          onClose={ModalHandleChangeClose}
          request_info={material_info.data}
        />
      </Box>
    </Fade>
  );
}
