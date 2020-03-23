/**
 * @author Uvindu Sanjana
 */

import React from "react";

import Nirmala from "../../font/Nirmala.ttf";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Login from "../start";
import MainContainer from "./MainContainer";
import { PROXY } from "../config";
import { SessionProvider } from "../../context/session.context";

const App = () => {
  const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [Nirmala],
          "*::-webkit-scrollbar": {
            width: "0.4em",
            margin: "1rem",
            padding: "1rem"
          },
          "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
            backgroundColor: "rgba(0,0,0,0)",
            margin: "1rem 0 1rem 0"
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(120,120,120)",
            outline: "1px solid slategrey",
            borderRadius: "0.2rem"
          }
        }
      },
      MuiTextField: {
        root: {
          borderRadius: 5
        }
      },
      MuiSpeedDialAction: {
        staticTooltipLabel: {
          borderRadius: "2rem",
          transform: "translateX(2.3rem)",
          cursor: "pointer"
        },
        fab: {
          color: "#65dec6",
          "&:hover": {
            backgroundColor: "#FFF",
            color: "#65dec6"
          }
        }
      }
    },
    zIndex: {
      appBar: 1350
    },

    palette: {
      primary: {
        main: "#30736c"
      }
    }
  });

  const [session, setSession] = React.useState({
    isAuthenticated: false,
    proxy: PROXY
  });
  //snakbar check user name and password
  const [snackText, setSnackText] = React.useState();
  const [snackVariant, setSnackVariant] = React.useState();
  const [loading, setLoading] = React.useState(false);

  //snak reset
  const resetSnack = () => {
    setSnackText();
    setSnackVariant();
  };

  const login = loginRequest => {
    localStorage.clear();

    const packet = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        emailAddress: loginRequest.emailAddress,
        password: loginRequest.password,
        rememberMe: loginRequest.rememberMe,
        domain: loginRequest.domain
      })
    };
    setLoading(true);

    fetch(`${session.proxy}/oauth/login`, packet)
      .then(response => response.json())

      .then(result => {
        if (loginRequest.emailAddress === "" || loginRequest.password === "") {
          setSnackVariant("error");
          setSnackText("Please fill all the fields.");
          setLoading(false);
        } else if (
          result.response == "invalid_username" ||
          result.message === "The username supplied was invalid." ||
          result.response == "invalid_password"
        ) {
          setSnackVariant("error");
          setSnackText("Invalid username or password");
          setLoading(false);
        } else if (result.token) {
          setLoading(false);

          localStorage.setItem("session", JSON.stringify(result));
          setSession({ ...session, isAuthenticated: true, details: result });
        }
        console.log(result);
        return result;
      })
      .then(({ expiry_time }) => setTimeout(() => logout(), expiry_time * 1000))
      .catch(err => console.log(err));
  };

  const logout = () => {
    localStorage.clear();
    setSession({ isAuthenticated: false, proxy: PROXY });
  };

  return (
    <Router>
      <SessionProvider value={{ session, setSession, login, logout }}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Login
                    {...props}
                    text={snackText}
                    variant={snackVariant}
                    reset={resetSnack}
                    loading={loading}
                  />
                )}
              />

              <Route path="/main" component={() => <MainContainer />} />
            </Switch>
          </Router>
        </ThemeProvider>
      </SessionProvider>
    </Router>
  );
};

export default App;
