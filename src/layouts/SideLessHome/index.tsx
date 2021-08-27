import { Outlet } from "react-router-dom";

import { DashboardHeader } from "src/templates/DashboardHeader/index";
import useStyles from "src/layouts/SideLessHome/styles";

export const SideLessHomeLayout = () => {
const styles = useStyles();

  return (
    <div className={styles.root}>
      <DashboardHeader />

      <h1>Dashboard</h1>

      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};