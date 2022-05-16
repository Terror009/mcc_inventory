import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { theme } from "../utils/theme";

import UserSignin from "../pages/UserSignin";
import UserSignup from "../pages/UserSignup";
import PageNotFound from "../pages/PageNotFound";
import DashBoard from "../pages/DashBoard";
import Supplier from "../pages/Supplier";
import Manufacturer from "../pages/Manufacturer";
import Material from "../pages/Material";
import Construction_Site from "../pages/Construction_Site";
import Audit_Log from "../pages/Audit_Log";
import Report from "../pages/Report";
import Inventory_Movement_Detail from "../pages/Inventory_Movement_Detail";
import Material_Stock_level from "../pages/Material_Stock_level";
import ProjectOveDueReport from "../pages/Project_Over_Due_Report";
import Project from "../pages/Project";
import User from "../pages/User";
import Setting from "../pages/Setting";
import NoConnection from "../pages/NoConnection";

import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
export default function Routers({ ...rest }) {
  /*   const [connection, SetConnection] = useState({
    isOnline: "",
  });

  const checkOnlineStatus = async () => {
    try {
      const online = await fetch("/1pixel.png");
      return online.status >= 200 && online.status < 300; // either true or false
    } catch (err) {
      return false; // definitely offline
    }
  };
  useEffect(() => {
      const result = checkOnlineStatus();
      SetConnection({ ...connection, isOnline: result });
  }, []); */

  const THEME = createTheme(theme(true));
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <Routes>
          <Route
            path="/signin"
            element={<PublicRouter Component={UserSignin} />}
          />
          <Route
            path="/signup"
            element={<PublicRouter Component={UserSignup} />}
          />
          <Route path="/" element={<PrivateRouter Component={DashBoard} />} />
          <Route
            path="/suppliers"
            element={<PrivateRouter Component={Supplier} />}
          />
          <Route
            path="/manufacturers"
            element={<PrivateRouter Component={Manufacturer} />}
          />
          <Route
            path="/materials"
            element={<PrivateRouter Component={Material} />}
          />
          <Route
            path="/construction_sites"
            element={<PrivateRouter Component={Construction_Site} />}
          />
          <Route
            path="/audit_logs"
            element={<PrivateRouter Component={Audit_Log} />}
          />
          <Route
            path="/reports"
            element={<PrivateRouter Component={Report} />}
          />
          <Route
            path="/reports/inventory_movement_detail"
            element={<PrivateRouter Component={Inventory_Movement_Detail} />}
          />
          <Route
            path="/reports/material_stock_level"
            element={<PrivateRouter Component={Material_Stock_level} />}
          />
             <Route
            path="/reports/project_over_due_report"
            element={<PrivateRouter Component={ProjectOveDueReport} />}
          />
          <Route
            path="/projects"
            element={<PrivateRouter Component={Project} />}
          />
          <Route path="/users" element={<PrivateRouter Component={User} />} />
          <Route
            path="/setting"
            element={<PrivateRouter Component={Setting} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
