import { makeStyles } from "@material-ui/core";

const SIDEBAR_WIDTH = 240;
const APP_BAR = 64;

export default makeStyles({
  root: {
    display: "flex",
    minHeight: "100%",
  },

  sidebar: {
    paddingTop: APP_BAR,

    // 幅を指定
    width: SIDEBAR_WIDTH,
  },

  main: {
    paddingTop: APP_BAR + 30,

    // 横並び時に最大まで幅を大きくさせる
    flexGrow: 1,
  },
});