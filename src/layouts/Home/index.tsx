import { Outlet } from "react-router-dom";
import { DashboardHeader } from "templates/DashboardHeader/index";

export const HomeLayout = () => {
  return (
    <div>
      <DashboardHeader />
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
};
