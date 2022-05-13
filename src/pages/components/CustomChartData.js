import React, { useState, useEffect, useRef } from "react";
import { Chart } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "chart.js/auto";
import { Box } from "@mui/material";

import { API } from "../../api/api";
import axios from "axios";

export const OngoingProjectChart = () => {
  const [payload, Setpayload] = useState([]);
  useEffect(() => {
    const fetchActiveProjects = async () => {
      await axios({
        method: "GET",
        url: API.project.activeProject,
      })
        .then((response) => {
          console.log(response.data);
          let data_arr = [];
          response.data.map((index) => {
            data_arr.push(index);
            console.log(data_arr);
            Setpayload(data_arr);
          });
        })
        .catch(({ response }) => {
          console.log(response);
        });
    };
    fetchActiveProjects();
  }, []);
  console.log(payload);
  return (
    <Box>
      <Chart
        style={{ height: "100px" }}
        type="line"
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [
            {
              label: "Ongoing Projects",
              data: [12, 20, 34, 5, 40],
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
          scales: {
            xAxes: {
              grid: {
                color: "transparent",
                drawBorder: false,
              },
              ticks: {
                display: false,
                beginAtZero: true,
              },
            },
            yAxes: {
              grid: {
                color: "transparent",
                drawBorder: false,
              },
              ticks: {
                display: false,
                beginAtZero: true,
              },
            },
          },
        }}
      />
    </Box>
  );
};
