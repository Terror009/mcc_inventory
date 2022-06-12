import React, { useState, useEffect } from "react";
import { API } from "../../api/api";
import axios from "axios";

import { Box, Typography, Paper, Stack, Pagination } from "@mui/material";

import { ReactComponent as ArrowUpIcon } from "../../assets/svg/arrow_up.svg";

export const FetchUserData = () => {
  const [payload, Setpayload] = useState({
    data: [{}],
  });

  useEffect(() => {
    const key = JSON.parse(localStorage.getItem("user"));
    const session_key = {
      session_key: key.session_key,
    };
    const fetchData = () => {
      axios({
        method: "POST",
        url: API.admin.findAdmin,
        data: JSON.stringify(session_key),
      })
        .then((response) => {
          console.log(response.data);
          Setpayload({ ...payload, data: response.data });
        })
        .catch((response) => {
          console.log(response.data);
        });
    };
    fetchData();
  }, []);

  return payload.data.map((index, i) => (
    <Typography
      key={i}
      variant="h5"
      sx={{
        zIndex: "1",
        color: (theme) => theme.palette.textColor.col2,
        fontWeight: "bolder",
        marginLeft: "30px",
        fontSize: "2vw",
      }}
    >
      Welcome {index.firstname + " " + index.lastname}
    </Typography>
  ));
};

export const FetchPendingProjectData = () => {
  const [payload, Setpayload] = useState({
    pendingProject: [{}],
  });

  useEffect(() => {
    const fetchPedingProjects = async () => {
      await axios({
        method: "GET",
        url: API.project.pendingProject,
      })
        .then((response) => {
          console.log(response.data);
          Setpayload({ ...payload, pendingProject: response.data.length });
        })
        .catch(({ response }) => {
          console.log(response);
        });
    };

    fetchPedingProjects();
  }, []);

  return payload.pendingProject > 0 ? (
    <Typography
      sx={{
        color: (theme) => theme.palette.textColor.col1,
        fontWeight: "100",
        marginTop: "10px",
      }}
    >
      {payload.pendingProject}
    </Typography>
  ) : (
    <Typography
      sx={{
        color: (theme) => theme.palette.textColor.col1,
        fontWeight: "100",
        marginTop: "10px",
      }}
    >
      0
    </Typography>
  );
};

export const FetchActiveProjectData = () => {
  const [payload, Setpayload] = useState({
    activeProject: [{}],
  });
  useEffect(() => {
    const fetchActiveProjects = async () => {
      await axios({
        method: "GET",
        url: API.project.activeProject,
      })
        .then((response) => {
          console.log(response.data);
          Setpayload({ ...payload, activeProject: response.data.length });
        })
        .catch(({ response }) => {
          console.log(response);
        });
    };
    fetchActiveProjects();
  }, []);

  return payload.activeProject > 0 ? (
    <Typography
      sx={{
        color: (theme) => theme.palette.textColor.col1,
        fontWeight: "100",
        marginTop: "10px",
      }}
    >
      {payload.activeProject}
    </Typography>
  ) : (
    <Typography
      sx={{
        color: (theme) => theme.palette.textColor.col1,
        fontWeight: "100",
        marginTop: "10px",
      }}
    >
      0
    </Typography>
  );
};

export const FetchCanceledProjectData = () => {
  const [payload, Setpayload] = useState({
    canceledProject: [{}],
  });
  useEffect(() => {
    const fetchCanceledProjects = async () => {
      await axios({
        method: "GET",
        url: API.project.canceledProject,
      })
        .then((response) => {
          console.log(response.data);
          Setpayload({ ...payload, canceledProject: response.data.length });
        })
        .catch(({ response }) => {
          console.log(response);
        });
    };
    fetchCanceledProjects();
  }, []);

  return payload.canceledProject > 0 ? (
    <Typography
      sx={{
        color: (theme) => theme.palette.textColor.col1,
        fontWeight: "100",
        marginTop: "10px",
      }}
    >
      {payload.canceledProject}
    </Typography>
  ) : (
    <Typography
      sx={{
        color: (theme) => theme.palette.textColor.col1,
        fontWeight: "100",
        marginTop: "10px",
      }}
    >
      0
    </Typography>
  );
};

export const FetchDeliveredMaterialData = () => {
  const [payload, Setpayload] = useState({
    deliveredMaterial: [{}],
  });

  return payload.deliveredMaterial > 0 ? (
    ""
  ) : (
    <Typography
      sx={{
        color: (theme) => theme.palette.textColor.col1,
        fontWeight: "100",
        marginTop: "10px",
      }}
    >
      0
    </Typography>
  );
};

export const FetchReturnedMaterialData = () => {
  const [payload, Setpayload] = useState({
    returnedMaterial: [{}],
  });

  return payload.returnedMaterial > 0 ? (
    ""
  ) : (
    <Typography
      sx={{
        color: (theme) => theme.palette.textColor.col1,
        fontWeight: "100",
        marginTop: "10px",
      }}
    >
      0
    </Typography>
  );
};

export const FetchMaterialsData = () => {
  const [payload, SetPayload] = useState({
    data: [{}],
  });

  const [page, SetPage] = useState(1);
  const [postperpage, SetPostperPage] = useState(5);

  const indexofLastPage = page * postperpage;
  const indexofFirstPage = indexofLastPage - postperpage;

  const handleChangePage = (e, newPage) => {
    SetPage(newPage);
  };

  useEffect(() => {
    const fetchMaterialData = async () => {
      await axios({
        method: "GET",
        url: API.material_stock_level.fetchMaterialLevel,
      })
        .then((response) => {
          console.log(response.data);
          SetPayload({ ...payload, data: response.data });
        })
        .catch(({ response }) => {
          console.log(response.data);
        });
    };
    fetchMaterialData();
  }, []);

  return payload.data.length === 0 ? (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: "26px",
          color: (theme) => theme.palette.textColor.col4,
        }}
      >
        No Data
      </Typography>
    </Paper>
  ) : (
    <Box
      sx={{
        height: "577px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "577px",
        }}
      >
        {payload.data
          .slice(indexofFirstPage, indexofLastPage)
          .map((index, i) => (
            <Paper
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "55px",
                width: "90%",
                marginTop: "10px",
                padding: "20px 20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  color: (theme) => theme.palette.textColor.col1,
                }}
              >
                {index.material}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: (theme) => theme.palette.textColor.col4,
                }}
              >
                {index.on_order} of {index.quantity_on_hand}
              </Typography>
            </Paper>
          ))}
      </Box>
      <Stack spacing={2} sx={{ marginTop: "20px" }}>
        <Pagination
          count={Math.ceil(payload.data.length / postperpage)}
          page={page}
          siblingCount={2}
          boundaryCount={2}
          variant="outlined"
          onChange={handleChangePage}
        />
      </Stack>
    </Box>
  );
};

export const FetchOngoingProjectReportData = () => {
  const [payload, SetPayload] = useState({
    data: [{}],
  });
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const setDate = date.getDate();
  const day = date.getDay();
  const month = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = weekday[date.getDay()];

  useEffect(() => {
    const fetchPedingProjects = async () => {
      await axios({
        method: "GET",
        url: API.project.activeProject,
      })
        .then((response) => {
          console.log(response.data);
          SetPayload({ ...payload, data: response.data });
        })
        .catch(({ response }) => {
          console.log(response);
        });
      console.log(String(new Date().getDate()).padStart(2, "0"));
      console.log(String(new Date().getMonth() + 1).padStart(2, "0"));
    };
    fetchPedingProjects();
  }, []);
  console.log(new Date().toLocaleDateString());
  return (
    <Box sx={{ marginTop: "20px", width: "140px", backgroundColor: "" }}>
      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{
            margin: "0px 35px 0px 20px ",
            color: (theme) => theme.palette.textColor.col1,
            fontSize: "20px",
          }}
        >
          {
            payload.data.filter(
              (index) =>
                index.project_date ===
                new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
            ).length
          }
        </Typography>

        <ArrowUpIcon style={{ color: "#2499E3" }} />
      </Box>
      <Typography
        sx={{
          color: (theme) => theme.palette.textColor.col1,
          fontSize: "14px",
          margin: "-7px 0px 0px 20px",
        }}
      >
        {days}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "15px",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: (theme) => theme.palette.textColor.col5,
              fontSize: "14px",
            }}
          >
            {
              payload.data.filter(
                (index) =>
                  index.week === Math.ceil((setDate + 6 - day) / 7) + "week"
              ).length
            }
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.textColor.col4,
              fontSize: "12px",
            }}
          >
            This Week
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: (theme) => theme.palette.textColor.col5,
              fontSize: "14px",
            }}
          >
            {
              payload.data.filter(
                (index) => index.month === month[date.getMonth()]
              ).length
            }
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.textColor.col4,
              fontSize: "12px",
            }}
          >
            This Month
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export const FetchCompleteProjectReportData = () => {
  const [payload, SetPayload] = useState({
    data: [{}],
  });
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const setDate = date.getDate();
  const day = date.getDay();
  const month = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = weekday[date.getDay()];

  useEffect(() => {
    const fetchPedingProjects = async () => {
      await axios({
        method: "GET",
        url: API.project.completeProject,
      })
        .then((response) => {
          console.log(response.data);
          SetPayload({ ...payload, data: response.data });
        })
        .catch(({ response }) => {
          console.log(response);
        });
    };
    fetchPedingProjects();
  }, []);
  console.log(new Date().toLocaleDateString());
  return (
    <Box sx={{ marginTop: "20px", width: "140px", backgroundColor: "" }}>
      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{
            margin: "0px 35px 0px 20px ",
            color: (theme) => theme.palette.textColor.col1,
            fontSize: "20px",
          }}
        >
          {
            payload.data.filter(
              (index) =>
                index.project_date ===
                new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
            ).length
          }
        </Typography>

        <ArrowUpIcon style={{ color: "#2499E3" }} />
      </Box>
      <Typography
        sx={{
          color: (theme) => theme.palette.textColor.col1,
          fontSize: "14px",
          margin: "-7px 0px 0px 20px",
        }}
      >
        {days}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "15px",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: (theme) => theme.palette.textColor.col5,
              fontSize: "14px",
            }}
          >
            {
              payload.data.filter(
                (index) =>
                  index.week === Math.ceil((setDate + 6 - day) / 7) + "week"
              ).length
            }
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.textColor.col4,
              fontSize: "12px",
            }}
          >
            This Week
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: (theme) => theme.palette.textColor.col5,
              fontSize: "14px",
            }}
          >
            {
              payload.data.filter(
                (index) => index.month === month[date.getMonth()]
              ).length
            }
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.textColor.col4,
              fontSize: "12px",
            }}
          >
            This Month
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};