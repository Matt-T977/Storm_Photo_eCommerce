import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./components/App";
import { lightBlue, green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: green,
    background: {
      default: "#DDDDDD",
      paper: "#FFFFFF",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ThemeProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
