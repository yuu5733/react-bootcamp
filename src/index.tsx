import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "src/Route";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

import GlobalStyle from "src/GlobalStyle";

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />

        <GlobalStyle />

        <RootRouter />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
