import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
//import { Logo } from "components/Logo/index";
import { Logo } from "../../components/Logo";

export const DashboardHeader = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <div>
          <Logo />
        </div>
      </Toolbar>
    </AppBar>
  );
};