import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./Route";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <RootRouter />
      </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
