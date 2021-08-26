import { makeStyles } from "@material-ui/core";

const SIDEBAR_WIDTH = 240;

const APP_BAR = 64;

export default makeStyles({
  flex: {
    display: "flex",
  },

  sidebar: {
    paddingTop: APP_BAR,

    width: SIDEBAR_WIDTH,
  },

  main: {
    paddingTop: APP_BAR + 30,

    lexGrow: 1,
  },
});