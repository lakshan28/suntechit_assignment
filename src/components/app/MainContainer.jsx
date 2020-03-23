/**
 * @author Uvindu Sanjana
 */

import React, { useState } from "react";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import { CssBaseline, Container, ListItemText, Fab } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import { Route, Redirect } from "react-router-dom";
import {
  DARK_BODY_BACKGROUND,
  DARK_TILE_BACKGROUND,
  LIGHT_BODY_BACKGROUND,
  LIGHT_TILE_BACKGROUND
} from "../../colors/COLORS";

import { DarkModeProvider } from "../../context/darkMode.context";

import AppDrawer from "./AppDrawer";
import AppTopBar from "./AppTopBar";

import Helper from "../modals/fab/Helper";
import Feedback from "../modals/fab/Feedback";
import Report from "../modals/fab/ReportIssue";

import Dashboard from "../dashboard/Dashboard";
import Tasks from "../elements/Tasks";
import AddLeadsT from "../TLeads/AddLeadsT";

import "../../css/Dashbord.css";
import "../../css/MaterialUiOverride.css";

import DarkBackground from "../../img/dark_wave.png";
import BirdLogo from "../../img/bbbrd.png";
import BirdLogoWinds from "../../img/Component 123 – 1@2x.png";
import Background from "../../img/green_wave.png";

// Drawer width.
const drawerWidth = 300;
const drawerHight = window.innerHeight;
const drawerwindow = window.innerWidth;
export default function MainContainer({ logout }) {
  // zoom out
  {
    /*
    if (drawerwindow > 1370) {
      document.body.style.zoom = 1;
    } else {
      document.body.style.zoom = 0.8;
    }
  */
  }

  // Drawer state
  const [open, setOpen] = React.useState(true);

  //GlableShortCut Bird
  const [flyBird, setFlyBird] = React.useState(false);

  /**
   * Drawer state handler.
   */
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  /**
   * Drawer state handler.
   */
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Notification Panel state.
  const [anchorNotification, setAnchorNotification] = React.useState(null);
  const menuOpen = Boolean(anchorNotification);

  /**
   * Notification Panel origin handler.
   * @param event
   */
  const handleNotification = event => {
    setAnchorNotification(event.currentTarget);
  };

  /**
   * Notification Panel state handler.
   */
  const handleNotificationClose = () => {
    setAnchorNotification(null);
  };

  // Helper Panel state.
  const [anchorHelper, setAnchorHelper] = React.useState(null);
  const helperOpen = Boolean(anchorHelper);

  /**
   * Helper Panel origin handler.
   * @param anchor
   */
  const handleHelper = anchor => {
    setAnchorHelper(anchor);
  };

  /**
   * Helper Panel origin handler for the first time.
   * @param event
   */
  const handleInitialHelper = event => {
    setAnchorHelper(event.currentTarget);
  };

  /**
   * Helper Panel state handler.
   */
  const handleHelperClose = () => {
    setAnchorHelper(null);
  };

  // Report Panel state.
  const [anchorReport, setAnchorReport] = React.useState(null);
  const reportOpen = Boolean(anchorReport);

  /**
   * Report Panel origin handler.
   * @param anchor
   */
  const handleReport = anchor => {
    setAnchorReport(anchor);
  };

  /**
   * Report Panel state handler.
   */
  const handleReportClose = () => {
    setAnchorReport(null);
  };

  // Feedback Panel state.
  const [anchorFeedback, setAnchorFeedback] = React.useState(null);
  const feedbackOpen = Boolean(anchorFeedback);

  /**
   * Feedback Panel origin handler.
   * @param anchor
   */
  const handleFeedback = anchor => {
    setAnchorFeedback(anchor);
  };

  /**
   * Feedback Panel state handler.
   */
  const handleFeedbackClose = () => {
    setAnchorFeedback(null);
  };

  // Dark mode state.
  const [dark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)")
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false
  );

  // Private mode state.
  const [privateMode, setPrivateMode] = useState(false);

  // Active tab state.
  const [active, setActive] = React.useState(
    window.location.pathname.toString().replace("/main/", "")
  );
  /**
   * login animation
   */
  const [logAnimaton, setLoganmation] = useState(false);

  const logAnimationFuc = () => {
    setLoganmation(true);
  };

  // Active tab initializer.
  React.useEffect(() => {
    setActive(window.location.pathname.toString().replace("/main/", ""));
    logAnimationFuc();
    // logAnimationFuc();
  }, []);

  // Add Note state.
  const [anchorNote, setAnchorNote] = React.useState(null);
  const noteOpen = Boolean(anchorNote);

  // Add client state.
  const [anchorNote2, setAnchorNote2] = React.useState(null);
  const noteOpen2 = Boolean(anchorNote2);

  /**
   * Add Note origin handler.
   * @param event
   */
  const handleNote = event => {
    setAnchorNote(event.currentTarget);
  };
  /**
   * Add client origin handler.
   * @param event
   */
  const handleClient = event => {
    setAnchorNote2(event.currentTarget);
  };

  /**
   * Add Note state handler.
   */
  const noteClose = () => {
    setAnchorNote(null);
  };
  /**
   * Add client state handler.
   */
  const noteClose2 = () => {
    setAnchorNote2(null);
  };
  // Settings menu state
  const [subOpen, setSubOpen] = useState(false);

  /**
   * Settings menu state handler.
   */
  const handleClick = () => {
    setSubOpen(!subOpen);
  };

  // Add Lead state.
  const [anchorLead, setAnchorLead] = React.useState(null);
  const leadOpen = Boolean(anchorLead);

  /**
   * Add Lead origin handler.
   * @param event
   */
  const handleLead = event => {
    setAnchorLead(event.currentTarget);
  };

  /**
   * Add Lead state handler.
   */
  const leadClose = () => {
    setAnchorLead(null);
  };

  // Add Task state.
  const [anchorTask, setAnchorTask] = React.useState(null);
  const taskOpen = Boolean(anchorTask);

  /**
   * Add Task origin handler.
   * @param event
   */
  const handleTask = event => {
    setAnchorTask(event.currentTarget);
  };

  /**
   * Add Task state handler.
   */
  const taskClose = () => {
    setAnchorTask(null);
  };

  // Settings menu state

  /**
   * Settings menu state handler.
   */
  const [golbalShortCut, setGolbalShortCut] = React.useState(false);
  const handleClickAway = () => {
    setGolbalShortCut(false);
  };
  const gloableShortCutOpen = () => {
    setGolbalShortCut(true);
  };

  // Styles
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      width: "1366px",
      height: "100%",
      [theme.breakpoints.up(1366)]: {
        width: "100%",
        height: "100%"
      }
    },
    background: {
      zIndex: 0,
      height: "100%",
      width: "1700px",
      position: "absolute",
      top: "0",
      left: "0",
      [theme.breakpoints.up(1366)]: {
        width: "100%",
        height: "100%"
      }
    },
    toolbar: {
      paddingRight: 24,

      width: "100%",
      [theme.breakpoints.up(1366)]: {
        width: "100%"
      }
    },
    toolbarIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "1rem 0.7rem",
      ...theme.mixins.toolbar,
      color: "white"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginTop: "1.5rem",
      left: "0rem",

      color: "#000",
      backgroundColor: "transparent",
      boxShadow: "0 0 0 0 rgb(0, 0, 0)",
      width: "1366px",
      [theme.breakpoints.up(1366)]: {
        width: "100%"
      }
    },
    appBarShift: {
      marginLeft: drawerWidth,
      marginTop: "1.5rem",
      left: "0rem",
      width: "1366px",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      [theme.breakpoints.up(1366)]: {
        width: `calc(100% - ${drawerWidth}px)`
      }
    },
    menuButton: {
      marginLeft: "-0.5rem",
      [theme.breakpoints.up(1366)]: {
        marginRight: 36
      }
    },
    appTopMenuButton: {
      color: "#5FDA72",
      "&:hover": {
        color: "#8defce"
      }
    },
    menuButtonHidden: {
      display: "none"
    },
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,

      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      backgroundColor: "#131F25",
      color: "#F6F8FE"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      height: "1080px",
      overflow: "auto"
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(-500),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(-509)
      }
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100%",
      overflow: "auto",
      width: "100%"
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      width: "100%"
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
      backgroundColor: dark ? DARK_TILE_BACKGROUND : LIGHT_TILE_BACKGROUND,
      color: dark ? "#FFF" : "#000",
      borderRadius: "50%"
    },
    fixedHeight: {
      height: "17rem"
    },
    title: {
      width: "10rem",
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    search: {
      position: "relative",
      borderRadius: "1.5rem",
      backgroundColor: fade(theme.palette.common.white, 1),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 1)
      },
      padding: "0.2rem",
      width: "25rem",
      marginLeft: "0rem",

      [theme.breakpoints.up(1366)]: {
        marginLeft: theme.spacing(1),
        width: "35rem"
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-0.1rem",
      color: "#131F25",
      opacity: "0.5"
    },
    inputRoot: {
      color: "#000"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "20rem",
      paddingLeft: "2.5rem",
      marginLeft: "1rem",
      [theme.breakpoints.up(1366)]: {
        width: "30rem",
        paddingLeft: "2.5rem"
      }
    },

    list: {
      width: 200,
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2)
    },
    listItem: {
      borderRadius: "1.5rem",
      backgroundColor: "#212c32",
      margin: "0.5rem 0.1rem",
      "&:hover": {
        backgroundColor: "#283339"
      }
    },
    closedListItem: {
      borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
      backgroundColor: "transparent",
      margin: "0.5rem 0.1rem 0.5rem -1.3rem",
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    activeListItem: {
      borderRadius: "1.5rem",
      background:
        "transparent linear-gradient(270deg, #63C151 0%, #00A876 100%) 0% 0% no-repeat padding-box",
      margin: "0.5rem 0.1rem",
      "&:hover": {
        backgroundColor: "#283339"
      }
    },
    activeListItemCloseDrawer: {
      background:
        "transparent linear-gradient(270deg, #63C151 0%, #00A876 100%) 0% 0% no-repeat padding-box",
      width: "3rem",
      height: "3rem"
    },
    expansionTitle: {
      borderBottomRightRadius: "1rem",
      borderTopLeftRadius: "1rem"
    },
    exp: {
      borderBottomRightRadius: "1rem",
      borderTopLeftRadius: "1rem"
    },
    logo: {
      height: "3rem",
      zIndex: "1",
      width: "10rem",

      [theme.breakpoints.up(1366)]: {
        marginLeft: "-1rem"
      }
    },
    profile: {
      width: "100%",
      height: "auto",
      textAlign: "center",
      marginBottom: "2rem"
    },
    bigAvatar: {
      margin: "0 35%",
      width: 80,
      height: 80
    },
    badge: {
      margin: "3% 40%",
      width: 90,
      height: 90,
      backgroundColor: "#2DA995",
      boxShadow: "3px 3px 6px #00000029"
    },
    chatList: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: dark
        ? DARK_TILE_BACKGROUND
        : theme.palette.background.paper
    },
    listAction: {
      borderRadius: "1.5rem",
      margin: "0.5rem 0.1rem",
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    closedListAction: {
      borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
      margin: "0.5rem -3.5rem"
    },
    subListItem: {
      backgroundColor: "#212c32",
      margin: "0 0.1rem",
      "&:hover": {
        backgroundColor: "#283339"
      },
      paddingLeft: theme.spacing(5),
      fontSize: "0.2rem"
    },
    subListItemEnd: {
      borderRadius: "0 0 1.5rem 1.5rem",
      backgroundColor: "#212c32",
      margin: "0 0.1rem",
      "&:hover": {
        backgroundColor: "#283339"
      },
      paddingLeft: theme.spacing(5),
      fontSize: "0.2rem"
    },
    closedSubListItem: {
      display: "none"
    },
    gridItem: {
      zIndex: 5
    },
    gridItemTitle: {
      color: dark ? "#BBB6B6" : "#4D4F5C"
    },
    divider: {
      backgroundColor: dark ? "#BBB6B6" : theme.palette.divider
    },
    dividerNotification: {
      backgroundColor: dark ? "#BBB6B6" : theme.palette.divider,
      margin: "0.5rem 0 0.8rem 0"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1
      }
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff"
    },
    menu: {
      zIndex: theme.zIndex.drawer + 50,
      borderRadius: "5rem"
    },
    helperPopup: {
      zIndex: theme.zIndex.drawer + 50,
      borderRadius: "5rem"
    },
    tile: {
      color: "#94989b",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer"
    },
    tileIcon: {
      fontSize: "5rem",
      marginBottom: "0.5rem"
    },
    speedDial: {
      position: "absolute",
      top: "1.2rem",
      right: "20rem",
      zIndex: theme.zIndex.drawer + 50,
      backgroundColor: "transparent"
    },
    speedDialIcon: {
      "&:hover": {
        backgroundColor: "transparent"
      }
    },

    card: {
      width: 380,
      margin: 0,
      borderRadius: "1rem",
      textAlign: "center"
    },
    noteCard: {
      width: 820,
      padding: "1rem",
      margin: 0,
      borderRadius: "1rem"
    },
    notificationList: {
      width: "100%",
      maxWidth: 380,
      backgroundColor: theme.palette.background.paper
    },
    containedButton: {
      backgroundColor: "#707070",
      color: "#FFF",
      borderRadius: "2rem",
      fontSize: "0.9rem",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.87)"
      },
      textTransform: "capitalize",
      margin: "0.6rem 0"
    },
    noteBottomActions: {
      width: 580,
      margin: 0,
      padding: "1rem",
      backgroundColor: "#FFF"
    },
    noteCardContent: {
      width: "100%",
      maxWidth: 580
    },
    outlinedInput: {
      borderRadius: "0.5rem",

      padding: "1rem",
      color: "#000",
      height: "2rem",
      width: 250,
      backgroundColor: "transparent",
      borderColor: "#000",
      borderWidth: "1rem",
      marginLeft: "-1.7rem",
      "&:focus": {
        outline: "none"
      }
    },
    filledInput: {
      borderRadius: "1rem",
      color: "#000",
      height: "2.5rem",
      margin: "0.5rem 0.5rem 0.5rem 0rem",
      backgroundColor: "transparent",
      width: "100%",

      borderColor: "#BDBDBD ",
      borderStyle: "solid",
      borderWidth: "1px",
      "&:hover": {
        backgroundColor: "#fff"
      }
    },
    filledInputProps: {
      height: "2.5rem",

      padding: "0.5rem",
      width: "100%",
      fontSize: "0.8rem",
      "&:focus": {
        outline: "none"
      }
    },
    AddCircleTextArea: {
      width: "100%",
      color: "#000",
      borderRadius: "1rem",
      padding: "1.5rem",
      backgroundColor: "transparent",
      "&:focus": {
        outline: "none"
      },
      borderColor: "#BDBDBD ",
      borderStyle: "solid",
      borderWidth: "1px",
      "&:hover": {
        // backgroundColor: "#fff"
      }
    },
    threeInput: {
      borderRadius: "1rem",
      padding: "1rem",
      color: "#000",
      height: "2rem",
      width: "15rem",
      backgroundColor: "transparent",
      borderColor: "#BDBDBD ",
      borderStyle: "solid",
      marginTop: "1rem",

      borderWidth: "1px",
      "&:hover": {
        borderColor: "#000000 "
      },
      "&:focus": {
        borderColor: "#000000 "
      }
    },
    threeInputProps: {
      height: "2rem",

      margin: 0,
      padding: 0,
      width: "100%",
      fontSize: "0.8rem",
      "&:focus": {
        outline: "none",
        borderColor: "#000000 "
      },
      borderWidth: "1px",
      "&:hover": {
        borderColor: "#000000 "
      }
    },
    dropZone: {
      borderRadius: "1.2rem",
      borderWidth: "0.1rem",
      backgroundColor: "#FFF",
      minHeight: 0,
      height: "7rem",
      width: "100%",
      color: "#777",
      backgroundColor: "transparent",
      marginTop: "1rem"
    },
    dropZoneParagraph: {
      fontSize: "0.9rem",
      marginBottom: "0.5rem"
      // backgroundColor: "#30736c"
    },
    fabClosed: {
      position: "fixed",
      width: "4.8rem",
      height: "4.8rem",
      bottom: "2rem",
      right: "2rem",
      zIndex: 1500,
      backgroundColor: "#30736c",
      color: "white",
      "&:hover": {
        backgroundColor: "#30736c",
        color: "white"
      }
      //   transition: "transform .2s ease-in-out"
    },
    fabOpened: {
      position: "fixed",
      width: "4.8rem",
      height: "4.8rem",
      bottom: "2rem",
      right: "2rem",
      zIndex: 1500,
      backgroundColor: "#30736c",
      color: "white",
      "&:hover": {
        backgroundColor: "#30736c",
        color: "white"
      }
      //  transform: "rotate(45deg)",
      //  transition: "transform .2s ease-in-out"
    },
    helperCard: {
      width: 480,
      margin: "0 2rem 1.7rem 0",
      borderRadius: "1.2rem",
      textAlign: "center",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"
    },
    feedbackCard: {
      width: 480,
      margin: "0 2.2rem 2rem 0",
      borderRadius: "1.2rem",
      textAlign: "center",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)"
    },
    iconButton: {
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    feedbackButton: {
      backgroundColor: "#FFF",
      borderRadius: "2rem",
      color: "#777",
      padding: "0.5rem 1.5rem",
      cursor: "pointer",
      textAlign: "left",
      width: "26rem",
      transition: "width .2s ease-in-out",
      "&:hover": {
        width: "19rem",
        transition: "width .2s ease-in-out"
      },
      boxShadow: "0 0.1rem 0.2rem rgba(0, 0, 0, 0.2)",
      zIndex: 1500,
      position: "absolute",
      top: 0,
      left: 0,
      height: "2.3rem"
    },
    feedbackButtonWrapper: {
      backgroundColor: "#777",
      borderRadius: "2rem",
      color: "#FFF",
      margin: "1rem",
      textAlign: "right",
      width: "26rem",
      height: "2.3rem",

      zIndex: 1200,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingRight: "1.5rem",
      "&:hover $feedbackButton": {
        width: "19rem",
        transition: "width .2s ease-in-out"
      },
      cursor: "pointer"
    },
    feedbackButtonActive: {
      backgroundColor: "#FFF",
      borderRadius: "2rem",
      color: "#777",
      padding: "0.5rem 1.5rem",
      cursor: "pointer",
      textAlign: "left",
      width: "19rem",
      transition: "width .2s ease-in-out",
      boxShadow: "0 0.1rem 0.2rem rgba(0, 0, 0, 0.2)",
      zIndex: 1500,
      position: "absolute",
      top: 0,
      left: 0,
      height: "2.3rem"
    },
    feedbackSendButton: {
      borderRadius: "2rem",
      color: "#FFF",
      marginTop: "1rem",
      marginRight: "0.8rem",
      float: "right",
      width: "8rem",
      backgroundColor: "#30736c",
      padding: "0.2rem 0",
      "&:hover": {
        backgroundColor: "#30736c"
      }
    },
    filledSelect: {
      marginTop: "1rem",
      borderRadius: "0.8rem",

      color: "#000",
      height: "2rem",
      width: "22rem",
      marginLeft: "2rem",
      backgroundColor: "#FFF",
      "&:focus": {
        backgroundColor: "#FFF"
      }
    },
    filledSelectProps: {
      height: "2rem",
      paddingLeft: "1rem",
      width: "22rem",
      color: "#6fdpa4",

      backgroundColor: "transparent",
      "&:focus": {
        backgroundColor: "transparent"
      },
      fontSize: "1rem"
    },
    textLabel: {
      fontSize: "0.8rem",
      color: "#707070"
    },
    roundButton: {
      padding: 0,
      borderWidth: 0,
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    roundButton1: {
      padding: 0,
      borderWidth: 0,
      borderColor: "#707070",
      backgroundColor: "transparent"
      // "&:hover": {
      //   backgroundColor: "transparent"
      // }
    },
    collapseTitle: {
      cursor: "pointer"
    },
    flag: {
      height: "1rem",
      width: "2rem",
      borderRadius: "0.4rem",
      marginRight: "0.4rem"
    },
    notificationViewAll: {
      cursor: "pointer",
      "&:hover": {
        color: "#FF5733"
      }
    }
    //********* trello board templates start *********/

    //********* trello board templates End *********/
  }));

  const theme1 = useTheme();

  const ListText = withStyles(
    {
      root: {
        "& .MuiListItemText-secondary": {
          color: dark ? "#BBB6B6" : theme1.palette.secondary
        }
      }
    },
    { withTheme: true }
  )(ListItemText);

  const classes = useStyles();

  if (localStorage.getItem("session")) {
    const { profile } = JSON.parse(localStorage.getItem("session"));

    return (
      <div className="main-container2">
        <DarkModeProvider value={{ dark, setDark }}>
          <div className={logAnimaton ? "triangle-animation " : null}></div>
          <div
            className={classes.root}
            style={{
              backgroundColor: dark
                ? DARK_BODY_BACKGROUND
                : LIGHT_BODY_BACKGROUND
            }}
          >
            <CssBaseline />

            <img
              className={classes.background}
              alt="background"
              src={dark ? DarkBackground : Background}
            />

            <AppTopBar
              classes={classes}
              profile={profile}
              noteOpen={noteOpen}
              noteOpen2={noteOpen2}
              noteClose={noteClose}
              noteClose2={noteClose2}
              handleNotificationClose={handleNotificationClose}
              handleNotification={handleNotification}
              handleDrawerOpen={handleDrawerOpen}
              anchorNotification={anchorNotification}
              anchorNote={anchorNote}
              menuOpen={menuOpen}
              open={open}
              anchorLead={anchorLead}
              leadOpen={leadOpen}
              leadClose={leadClose}
              anchorTask={anchorTask}
              taskOpen={taskOpen}
              taskClose={taskClose}
              golbalShortCut={golbalShortCut}
              gloableShortCutOpen={gloableShortCutOpen}
              globalLeadOpen={handleLead}
              globalClientOpen={handleClient}
              globalTaskOpen={handleTask}
              globalFileNoteOpen={handleNote}
              handleClickAway={handleClickAway}
            />

            <AppDrawer
              classes={classes}
              profile={profile}
              active={active}
              handleClick={handleClick}
              handleDrawerClose={handleDrawerClose}
              logout={logout}
              open={open}
              privateMode={privateMode}
              setActive={setActive}
              setPrivateMode={setPrivateMode}
              subOpen={subOpen}
            />

            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="lg" className={classes.container}>
                <Route
                  path="/main/dashboa"
                  render={props => (
                    <Dashboard
                      {...props}
                      open={open}
                      privateMode={privateMode}
                      classes={classes}
                      listText={ListText}
                    />
                  )}
                />
                <Route
                  path="/main/tasks"
                  render={props => <Tasks {...props} classes={classes} />}
                />
                <Route
                  path="/main/leads"
                  render={props => (
                    <AddLeadsT
                      {...props}
                      handleLead={handleLead}
                      classes={classes}
                    />
                  )}
                />
                {/* <Route
                  path="/main/clients"
                  render={props => (
                    <AddLeadsT
                      {...props}
                      handleLead={handleLead}
                      classes={classes}
                    />
                  )}
                /> */}

                {/*
 <Backdrop
                  open={reportOpen}
                  className={classes.backdrop}
                  onClick={handleReportClose}
                  timeout={500}
                />
                  */}

                <Report
                  classes={classes}
                  handleHelper={handleHelper}
                  handleFeedback={handleFeedback}
                  anchorEl={anchorReport}
                  menuOpen={reportOpen}
                  handleClose={handleReportClose}
                />
                {/*
  <Backdrop
                  open={feedbackOpen}
                  className={classes.backdrop}
                  onClick={handleHelperClose}
                  timeout={500}
                />
                  */}

                <Feedback
                  classes={classes}
                  handleReport={handleReport}
                  handleHelper={handleHelper}
                  handleHelperClose={handleHelperClose}
                  anchorEl={anchorFeedback}
                  menuOpen={feedbackOpen}
                  handleClose={handleFeedbackClose}
                />
                {/*
 <Backdrop
                  open={helperOpen}
                  className={classes.backdrop}
                  onClick={handleFeedbackClose}
                  timeout={500}
                />
                  */}

                <Helper
                  classes={classes}
                  handleReport={handleReport}
                  handleFeedback={handleFeedback}
                  anchorEl={anchorHelper}
                  menuOpen={helperOpen}
                  handleClose={handleHelperClose}
                />
                <Fab
                  className={
                    helperOpen || feedbackOpen || reportOpen
                      ? classes.fabOpened
                      : classes.fabClosed
                  }
                  aria-label={"fab"}
                  onClick={
                    helperOpen
                      ? handleHelperClose
                      : feedbackOpen
                      ? handleFeedbackClose
                      : reportOpen
                      ? handleReportClose
                      : handleInitialHelper
                  }
                >
                  <img
                    onMouseOver={() => setFlyBird(true)}
                    onMouseLeave={() => setFlyBird(false)}
                    style={{ marginLeft: "0.7rem", marginTop: "0.4rem" }}
                    src={
                      helperOpen || feedbackOpen || reportOpen || flyBird
                        ? BirdLogoWinds
                        : BirdLogo
                    }
                    alt="bird-logo"
                  />
                </Fab>
              </Container>
            </main>
          </div>
        </DarkModeProvider>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
}
