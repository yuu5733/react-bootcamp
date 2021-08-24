import { AppBar, Avatar, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Logo } from "components/Logo";
import { SearchBar } from "templates/DashboardHeader/SearchBar/index";

import useStyles from "templates/DashboardHeader/styles";

export const DashboardHeader = () => {
  // CSSを生成
  const styles = useStyles();

  return (
    <AppBar elevation={0} color="inherit">
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <div className={styles.logo}>
          <Logo />
        </div>
        <SearchBar />

        <IconButton>
          <VideoCallIcon />
        </IconButton>

        <IconButton className={styles.profileIcon}>
          <Avatar />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};