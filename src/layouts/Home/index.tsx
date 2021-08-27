import { Outlet } from "react-router-dom";
import { DashboardHeader } from "src/templates/DashboardHeader/index";
import { Sidebar } from "src/templates/Sidebar";
import useStyles from "src/layouts/Home/style";

export const HomeLayout = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <DashboardHeader />

      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};
