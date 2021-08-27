// src/layouts/SideLessHome/styles.tsを作成

import { makeStyles } from "@material-ui/core";

const APP_BAR = 64;

export default makeStyles({
  // 要素を画面全体のサイズに調整する
  root: {
    minHeight: "100%",
  },

  main: {
    paddingTop: APP_BAR + 30,
  },
});

