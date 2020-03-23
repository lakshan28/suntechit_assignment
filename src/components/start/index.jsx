/**
 * @author Uvindu Sanjana
 */

import React from "react";
import { Redirect } from "react-router-dom";
import { useSpring, animated as a } from "react-spring";
import { makeStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import clsx from "clsx";
import {
  CssBaseline,
  Container,
  Box,
  Card,
  Checkbox,
  InputBase,
  Button,
  Typography,
  Link,
  CircularProgress
} from "@material-ui/core";

import sessionContext from "../../context/session.context";
import Snackbar from "../SnakBar/Snackbar";

import "../../css/App.css";

import Back from "../../img/bw3.jpg";
import Triangle_2 from "../../img/slidingLayerWithTransparent.png";
import Triangle from "../../img/tr.png";
import Logo from "../../img/harmonee_logo.png";
import ConIcon from "../../img/ConIcon.png";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {}
  },

  background: {
    zIndex: -1,
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    mixBlendMode: "luminosity"
  },
  card: {
    position: "absolute",
    top: "0%",
    left: "0%",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    border: "3px",
    color: "white",
    height: "100%",
    width: "100%",
    // backgroundColor: '#808080',
    backgroundColor: "#21282A"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(16),
    padding: "0 2rem 0 2rem"
  },
  textBox: {
    color: "white"
  },
  logo: {
    height: "5vh",
    zIndex: "1"
  },
  title: {
    fontSize: 34,
    color: "white",
    marginBottom: 0
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    marginBottom: 60
  },
  pos: {
    marginBottom: 12,
    color: "#777",
    fontSize: 14
  },
  loginTitle: {
    fontSize: 16,
    color: "white",
    marginBottom: 30
  },
  registerForm: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(5),
    padding: "0 5vw 0 5vw"
  },
  body: {
    background: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh"
  },
  checkboxL: {
    marginBottom: "1.7vh"
  },
  container2: {
    position: "absolute",
    overflow: "hidden"
  },
  registerButton: {
    backgroundColor: "#c1c1c1",
    color: "#000",
    borderRadius: "10vh",
    fontSize: "1.7vh",
    fontWeight: "500",
    "&:hover": {
      color: "#000",
      backgroundColor: "#8defce"
    },
    marginTop: "5vh",
    width: "11vw",
    textTransform: "capitalize"
  },
  loginButton: {
    backgroundColor: "#b2f0ff",
    color: "#000",
    borderRadius: "1.5vw",
    fontSize: "1.7vh",
    fontWeight: "500",
    "&:hover": {
      color: "#000",
      backgroundColor: "#c8edf6"
    },

    marginTop: "4vh",
    width: "11vw",
    height: "5vh",
    textTransform: "capitalize",
    marginBottom: "2vh"
  },

  filledInput: {
    borderRadius: "2vw",
    padding: "1vw",
    color: "#000",
    height: "5vh",
    width: "20vw",
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderWidth: "1vh",
    opacity: "0.8",
    "&:hover": {
      backgroundColor: "#FFF"
    },
    margin: "1vh 0"
  },
  regFilledInput: {
    borderRadius: "2vw",
    padding: "1vw",
    color: "#000",
    height: "5vh",
    width: "25vw",
    backgroundColor: "#FFF",
    borderColor: "#000",
    borderWidth: "1vh",
    opacity: "0.8",
    "&:hover": {
      backgroundColor: "#FFF"
    },
    margin: "1vh 0"
  },
  filledInputProps: {
    height: "2vh",
    margin: 0,
    padding: 0,
    width: "18vw",
    fontSize: "1.6vh"
  },
  regFilledInputProps: {
    height: "2vh",
    margin: 0,
    padding: 0,
    width: "24vw",
    fontSize: "1.6vh"
  },
  link: {
    cursor: "pointer",
    color: "#FFF",
    "&:hover": {
      textDecoration: "none",
      color: "#8defce"
    },
    fontSize: "1.6vh",
    marginLeft: "0.5vw"
  },
  CircularProgressButoon: {
    fontSize: "1.6vh",
    width: "1.6vh",
    height: "1.6vh"
  }
}));

const Login = ({ text, loading, variant, reset }) => {
  const { login } = React.useContext(sessionContext);

  const classes = useStyles();

  const [loginRequest, setLoginRequest] = React.useState({
    emailAddress: "",
    password: "",
    rememberMe: false,
    domain: "advisor"
  });

  const [state, setState] = React.useState({
    checkedA: true
  });

  const [open, setOpen] = React.useState(true);
  const [backImage, setBackImage] = React.useState(true);
  const [backImageAnim, setBackImageAnim] = React.useState(true);

  const [forgetPasswordPanel, setForgetPasswordPanel] = React.useState(false);
  const [forgetPasswordRegister, setForgetPasswordRegister] = React.useState(
    true
  );
  const [sendLink, setSendLink] = React.useState(false);
  //button rotate animation
  const [flipped, set] = React.useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const forgetPassworAnimation = () => {
    setForgetPasswordPanel(!forgetPasswordPanel);
    setBackImageAnim(false);
    setBackImage(false);
  };

  const forgetPassword = () => {
    setBackImage(true);
    setForgetPasswordPanel(!forgetPasswordPanel);
    setTimeout(() => setSendLink(false), 800);
  };

  const registerButton = () => {
    setBackImageAnim(true);
    setBackImage(false);
    setForgetPasswordPanel(false);
    setForgetPasswordRegister(false);

    setOpen(!open);
    setForgetPasswordPanel(false);
  };
  const loginButton = () => {
    setBackImage(true);
    setBackImageAnim(true);
    setOpen(!open);
    setForgetPasswordPanel(false);
    setForgetPasswordRegister(true);
  };
  const alreadyHavePassword = () => {
    setForgetPasswordPanel(!forgetPasswordPanel);
    setBackImage(true);
  };

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const sendPassword = (
    <div>
      <div className="reset-your-password">
        <p>Reset Your Password</p>
      </div>
      <div className="reset-your-password-para">
        <p>
          Enter your email address and we'll send you a link to reset your
          password.
        </p>
        <br />
      </div>
      <div className="enter-your-email">
        <InputBase
          className={clsx(classes.filledInput)}
          placeholder="Email"
          type="text"
          inputProps={{
            className: classes.filledInputProps
          }}
        />
      </div>
      <div className="send-reset-link-button">
        <Button
          variant={"contained"}
          className={classes.loginButton}
          style={{
            marginTop: "1vh",
            marginLeft: "0.8vw",
            fontFamily: "Semibold 18px/24px Segoe UI"
          }}
          onClick={() => {
            setSendLink(true);
          }}
        >
          Send Reset Link
        </Button>
      </div>
      <p onClick={alreadyHavePassword} className="already-have-password">
        Already have a password.
      </p>
    </div>
  );

  const passwordNotification = (
    <div style={{ paddingTop: "28vh" }}>
      <div style={{ textAlign: "center" }}>
        <img className="check-your-email-icon" src={ConIcon} />
      </div>
      <p className="check-your-email" style={{ marginBottom: "4vh" }}>
        Check your mail
      </p>
      <p className="send-notification-par" style={{ marginBottom: "2vh" }}>
        We sent an email to nethan@gmail.com with instructions to reset your
        password.
      </p>
      <div>
        <Button
          variant={"contained"}
          className={classes.loginButton}
          style={{
            marginTop: "2vh",
            marginLeft: "12vw",
            fontFamily: "Semibold 18px/24px Segoe UI"
          }}
          onClick={forgetPassword}
        >
          Login
        </Button>
      </div>
    </div>
  );

  if (!localStorage.getItem("session")) {
    return (
      <Container component="main" maxWidth="sm" className={classes.body}>
        <CssBaseline />
        {
          //
        }
        <Snackbar text={text} variant={variant} reset={reset} />

        <Card className={clsx(classes.card, "testresponsive")} elevation={3}>
          <React.Fragment>
            <Box width="100%" height="100%" className={classes.container2}>
              <img
                className={
                  backImage
                    ? "two-men-image"
                    : backImageAnim
                    ? "two-men-image2"
                    : "two-men-image3 "
                }
                src={Back}
                alt="Back"
              />
              <img
                className={open ? "triangle-image" : "triangle-image2"}
                src={Triangle_2}
                alt="triangle_2"
              />
              <div className={open ? "reg-closed" : "reg-opened"}>
                <div
                  className={
                    open
                      ? "register-content-right-side1"
                      : "register-content-right-side2 "
                  }
                >
                  <div
                    style={{
                      fontSize: "3vh",
                      marginLeft: "3vw",
                      marginBottom: "3vw"
                    }}
                  >
                    <p>Register with Harmonee</p>
                  </div>
                  <div style={{ width: "100%" }}>
                    <InputBase
                      className={clsx(classes.regFilledInput)}
                      placeholder="FirstName"
                      type="text"
                      inputProps={{
                        className: classes.regFilledInputProps
                      }}
                    />
                    <br />
                    <InputBase
                      className={clsx(classes.regFilledInput)}
                      placeholder="Surname"
                      type="text"
                      inputProps={{
                        className: classes.regFilledInputProps
                      }}
                    />
                    <br />
                    <InputBase
                      className={clsx(classes.regFilledInput)}
                      placeholder="Company Name"
                      type="text"
                      inputProps={{
                        className: classes.regFilledInputProps
                      }}
                    />
                    <br />
                    <InputBase
                      className={clsx(classes.regFilledInput)}
                      placeholder="Email"
                      type="email"
                      inputProps={{
                        className: classes.regFilledInputProps
                      }}
                    />
                    <br />
                    <InputBase
                      className={clsx(classes.regFilledInput)}
                      placeholder="Password"
                      type="password"
                      inputProps={{
                        className: classes.regFilledInputProps
                      }}
                    />
                    <br />
                    <div
                      style={{
                        fontSize: "2vh",
                        marginTop: "7vh",
                        marginLeft: "0.5vw"
                      }}
                    >
                      <label
                        style={{
                          fontFamily:
                            '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
                        }}
                        class="container"
                      >
                        <Typography style={{ fontSize: "2vh", opacity: "0.5" }}>
                          I agree to{" "}
                          <a
                            className="term-privacy"
                            target="_blank"
                            href="https://www.harmonee.com.au/privacy-policy/"
                          >
                            {" "}
                            terms and conditions{" "}
                          </a>
                          and{" "}
                          <a
                            className="term-privacy"
                            target="_blank"
                            href="https://www.harmonee.com.au/privacy-policy/"
                          >
                            {" "}
                            privacy policy.
                          </a>
                        </Typography>
                        <input type="checkbox" />
                        <span
                          style={{ marginTop: "0.4vw" }}
                          class="checkmark"
                        ></span>
                      </label>
                    </div>
                    <div>
                      <Button
                        variant={"contained"}
                        className={classes.loginButton}
                        style={{
                          marginTop: "4vh",
                          marginLeft: "6vw",
                          fontFamily: "Semibold 18px/24px Segoe UI"
                        }}
                        // onClick={() => setOpen(!open)}
                        onClick={loginButton}
                      >
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={open ? "welcome-back" : "welcome-back2"}
                src={Triangle}
                alt="Triangle"
              />
              <div
                className={
                  open ? "welcome-back-container12 " : "welcome-back-container "
                }
              >
                <img
                  src={Logo}
                  alt="harmonee-logo"
                  style={{
                    width: "8vw",
                    height: "6vh",
                    marginBottom: "3vh"
                  }}
                />

                <p
                  style={{
                    color: "#FFF",
                    fontSize: "4vh",
                    marginBottom: "5vh"
                  }}
                >
                  Welcome Back
                </p>
                <div style={{ marginTop: "9.5vh" }}>
                  <div style={{ width: "20vw", marginBottom: "2vh" }}>
                    <p
                      style={{
                        color: "#797979",
                        fontSize: "2vh",
                        marginBottom: "21vh"
                      }}
                    >
                      To keep connected with us please sign in with your
                      personal details.
                    </p>
                    <p style={{ color: "#797979", fontSize: "2vh" }}>
                      Already have an account ?
                    </p>
                  </div>
                  {/*
 <div style={{marginTop: 0}}>
                                    <Button variant={"contained"}
                                            style={{marginTop: '0.5rem'}}
                                            className={classes.registerButton}
                                            onClick={() => setOpen(!open)}>
                                        Login
                                    </Button>
                                </div>
                                    */}

                  <div
                    onClick={() => set(state => !state)}
                    style={{ marginTop: "3vh" }}
                  >
                    {/*
 <Button variant={"contained"}
                                            className={classes.registerButton}
                                            onClick={registerButton}>
                                        Register
                                    </Button>

*/}

                    <a.div
                      class="c back"
                      style={{
                        opacity: opacity.interpolate(o => 1 - o),
                        transform,
                        fontFamily: "Semibold 18px/24px Segoe UI",
                        fontSize: "1.7vh"
                      }}
                      onClick={flipped ? loginButton : loginButton}
                    >
                      login
                    </a.div>
                    <a.div
                      onClick={flipped ? loginButton : loginButton}
                      class="c front"
                      style={{
                        opacity,
                        transform: transform.interpolate(
                          t => `${t} rotateX(180deg)`
                        ),
                        fontFamily: "Semibold 18px/24px Segoe UI",
                        fontSize: "1.7vh"
                      }}
                    >
                      login
                    </a.div>
                  </div>
                </div>
                <p
                  style={{
                    color: "#F6F8FE",
                    opacity: "41%",
                    marginTop: "30.8vh",
                    fontSize: "0.8vw"
                  }}
                >
                  <a
                    style={{
                      color: "#F6F8FE",
                      opacity: "90%",
                      textDecoration: "none"
                    }}
                    href="https://www.harmonee.com.au/"
                  >
                    www.harmonee.com
                  </a>
                </p>
              </div>
              <div
                className={open ? "welcome-container " : "welcome-container12"}
              >
                <img
                  src={Logo}
                  alt="harmonee-logo"
                  style={{
                    width: "8vw",
                    height: "6vh",
                    marginBottom: "3vh"
                  }}
                />

                <p
                  style={{
                    color: "#FFF",
                    fontSize: "4vh",
                    marginBottom: "1vh"
                  }}
                >
                  Welcome
                </p>
                <p
                  style={{
                    color: "#FFF",
                    fontSize: "2.1vh",
                    marginBottom: "7vh",
                    marginTop: 0
                  }}
                >
                  Register for a new account here.
                </p>

                <div>
                  <p
                    style={{
                      color: "#797979",
                      fontSize: "2vh",
                      marginBottom: "4vh"
                    }}
                  >
                    Register for a new account here and let harmonee to automate
                    your practice and get more done.
                  </p>
                  <p style={{ color: "#797979", fontSize: "2vh" }}>
                    An interactive digital engagement platform that integrates
                    into an ecosystem of operational, transactional and
                    compliance activities delivered in a B2B2C business model,
                    to advisers, para-planners and other advise service
                    providers.
                  </p>
                </div>
                <div
                  onClick={() => set(state => !state)}
                  style={{ marginTop: "10vh" }}
                >
                  {/*
 <Button variant={"contained"}
                                            className={classes.registerButton}
                                            onClick={registerButton}>
                                        Register
                                    </Button>

*/}
                  <a.div
                    onClick={flipped ? registerButton : registerButton}
                    class="c front"
                    style={{
                      opacity,
                      transform: transform.interpolate(
                        t => `${t} rotateX(180deg)`
                      ),
                      fontFamily:
                        '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                      fontSize: "1.7vh"
                    }}
                  >
                    Register
                  </a.div>
                  <a.div
                    class="c back"
                    style={{
                      opacity: opacity.interpolate(o => 1 - o),
                      transform,
                      fontFamily: "Semibold 18px/24px Segoe UI",
                      fontSize: "1.7vh"
                    }}
                    onClick={flipped ? registerButton : registerButton}
                  >
                    Register
                  </a.div>
                </div>
                <p
                  style={{
                    color: "#F6F8FE",
                    opacity: "41%",
                    marginTop: "38vh",
                    fontSize: "0.8vw"
                  }}
                >
                  <a
                    style={{
                      color: "#F6F8FE",
                      opacity: "90%",
                      marginTop: "24vh",
                      textDecoration: "none"
                    }}
                    href="https://www.harmonee.com.au/"
                  >
                    www.harmonee.com
                  </a>
                </p>
              </div>
              <div className={open ? "login-content" : "login-content12"}>
                <br />
                <InputBase
                  className={clsx(classes.filledInput)}
                  placeholder="Email"
                  type="email"
                  value={loginRequest.emailAddress}
                  onChange={event =>
                    setLoginRequest({
                      ...loginRequest,
                      emailAddress: event.target.value
                    })
                  }
                  inputProps={{
                    className: classes.filledInputProps
                  }}
                />
                <br />
                <InputBase
                  className={clsx(classes.filledInput)}
                  placeholder="Password"
                  type="password"
                  value={loginRequest.password}
                  onChange={event =>
                    setLoginRequest({
                      ...loginRequest,
                      password: event.target.value
                    })
                  }
                  inputProps={{
                    className: classes.filledInputProps
                  }}
                />
                <div
                  style={{
                    fontSize: "1vh",
                    marginTop: "2vh",
                    marginLeft: "1vh"
                  }}
                >
                  <label
                    style={{ fontFamily: "Semibold 18px/24px Segoe UI" }}
                    class="container"
                  >
                    Remember Me
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div>
                  <Button
                    variant={"contained"}
                    className={classes.loginButton}
                    style={{ fontFamily: "Semibold 18px/24px Segoe UI" }}
                    onClick={() => login(loginRequest)}
                  >
                    {loading ? (
                      <CircularProgress
                        size="3vh"
                        className={classes.CircularProgressButoon}
                        color="secondary"
                      />
                    ) : (
                      "login"
                    )}
                  </Button>
                </div>
                <div>
                  <Link
                    onClick={forgetPassworAnimation}
                    className={classes.link}
                  >
                    Forgot Password ?
                  </Link>
                </div>
              </div>
              <div
                className={
                  forgetPasswordPanel
                    ? "forget-password-content"
                    : forgetPasswordRegister
                    ? "forget-password-content2"
                    : "forget-password-content3"
                }
              >
                {sendLink ? passwordNotification : sendPassword}
              </div>
            </Box>
          </React.Fragment>
        </Card>
      </Container>
    );
  } else {
    return <Redirect to="/main/dashboard" />;
  }
};

export default Login;
