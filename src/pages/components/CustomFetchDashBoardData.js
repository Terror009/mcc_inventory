import React, { useState, useEffect } from "react";
import { API } from "../../api/api";
import axios from "axios";

import { Typography } from "@mui/material";

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
        url: API.user.findUser,
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
