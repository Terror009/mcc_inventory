import React, { useEffect } from "react";
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
import Project from "../pages/Project";
import User from "../pages/User";
import Setting from "../pages/Setting";

import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
export default function Routers() {
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
