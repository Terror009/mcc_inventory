import React, { useState, useEffect, useRef } from "react";
import { Chart, Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "chart.js/auto";
import { Box, Paper, Typography } from "@mui/material";

import { API } from "../../api/api";
import axios from "axios";
import { months } from "moment";

export const OngoingProjectChart = () => {
  const date = new Date();
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
  const [payload, Setpayload] = useState({
    data: [{}],
  });
  useEffect(() => {
    const fetchActiveProjects = async () => {
      await axios({
        method: "GET",
        url: API.project.activeProject,
      })
        .then((response) => {
          console.log(response.data);
          let data_arr = [];
          data_arr.push(response.data);
          console.log(data_arr);
          Setpayload({ ...payload, data: response.data });
        })
        .catch(({ response }) => {
          console.log(response);
        });
    };
    fetchActiveProjects();
  }, []);
  console.log(payload.data);
  return (
    <Box>
      {payload.data.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "140px",
            width: "100%",
            backgroundColor: "",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              color: (theme) => theme.palette.textColor.col3,
            }}
          >
            No Data
          </Typography>
        </Box>
      ) : (
        /* <Chart
          style={{ height: "170px" }}
          type="line"
          data={{
            labels: payload.data.map((index) => index.month),
            datasets: [
              {
                label: "Ongoing Projects",
                data: payload.data.length,
                lineTension: 0.4,
                borderColor: "#3A57E8",
                borderWidth: 2,
                pointBackgroundColor: "#3A57E8",
                pointBorderWidth: 3,
              },
            ],
          }}
          height={400}
          width={600}
          plugins={[ChartDataLabels]}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              datalabels: {
                anchor: "end",
                align: "end",
                color: "#3A57E8",
              },
            },
          }}
        /> */ ""
      )}
    </Box>
  );
};

export const CompleteProjectChart = () => {
  const date = new Date();
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
  const [payload, Setpayload] = useState({
    data: [{}],
  });
  let months = [];
  useEffect(() => {
    const fetchCompleteProjects = async () => {
      await axios({
        method: "GET",
        url: API.project.completeProject,
      })
        .then((response) => {
          console.log(response.data);
          let data_arr = [];
          data_arr.push(response.data);
          console.log(data_arr);
          Setpayload({ ...payload, data: response.data });
        })
        .catch(({ response }) => {
          console.log(response);
        });
      payload.data.map((index) => {
        months.push(index.month);
      });
    };
    fetchCompleteProjects();
  }, []);
  console.log(payload.data);
  return (
    <Box>
      {payload.data.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "140px",
            width: "100%",
            backgroundColor: "",
          }}
        >
          <Typography
            sx={{
              fontSize: "30px",
              color: (theme) => theme.palette.textColor.col3,
            }}
          >
            No Data
          </Typography>
        </Box>
      ) : (
        /*    <Chart
          style={{ height: "170px" }}
          type="line"
          data={{
            labels: payload.data.map((index) => index.month),

            datasets: [
              {
                label: "Ongoing Projects",
                data: payload.data.filter((index) => index.month === months).length,

                lineTension: 0.4,
                borderColor: "#3A57E8",
                borderWidth: 2,
                pointBackgroundColor: "#3A57E8",
                pointBorderWidth: 3,
              },
            ],
          }}
          plugins={[ChartDataLabels]}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              datalabels: {
                anchor: "end",
                align: "end",
                color: "#3A57E8",
              },
            },
          }}
        /> */ ""
      )}
    </Box>
  );
};
export const MaterialChartData = () => {
  const [payload, SetPayload] = useState({
    data: [{}],
  });
  const randomNum = () => Math.floor(Math.random() * (235 - 52 + 1) + 52);

  const randomRGB = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: API.material.fetchMaterial,
      })
        .then((response) => {
          console.log(response.data);
          SetPayload({ ...payload, data: response.data });
        })
        .catch(({ response }) => {
          console.log(response);
        });
    };
    fetchData();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      {payload.data.length === 0 ? (
        <Typography
          sx={{
            fontSize: "30px",
            color: (theme) => theme.palette.textColor.col3,
          }}
        >
          No Data
        </Typography>
      ) : (
        <Doughnut
          data={{
            labels: payload.data.map((index) => index.material_name),
            datasets: [
              {
                label: "Ongoing Projects",
                data: payload.data.map((index) => index.quantity),
                backgroundColor: [
                  "skyblue",
                  "blue",
                  "yellow",
                  "red",
                  "pink",
                  "violet",
                ],
                cutout: "80%",
              },
            ],
          }}
          height={400}
          width={600}
          plugins={[ChartDataLabels]}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              datalabels: {
                anchor: "end",
                align: "end",
                color: "#3A57E8",
              },
            },
          }}
        />
      )}
    </Box>
  );
};
