import { Helmet } from "react-helmet";

export const DashBoard_Helmet = () => {
  return (
    <Helmet>
      <title>MCC - Dashboard</title>
      <meta name="mcc - inventory - dashboard" />
    </Helmet>
  );
};

export const Supplier_Helmet = () => {
  return (
    <Helmet>
      <title>MCC - Suppliers</title>
      <meta name="mcc - inventory - suppliers" />
    </Helmet>
  );
};
