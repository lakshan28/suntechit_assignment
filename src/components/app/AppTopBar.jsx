/**
 * @author Uvindu Sanjana
 */

import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  IconButton,
  Badge,
  ClickAwayListener,
  Avatar,
  Backdrop,
  AppBar,
  InputBase
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AddCircle from "@material-ui/icons/AddCircleOutlined";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreVert from "@material-ui/icons/MoreVertOutlined";
import AddFileNote from "../modals/AddFileNote";
import AddClient from "../modals/AddClient";
import NotificationPanel from "../modals/NotificationPanel";
import darkModeContext from "../../context/darkMode.context";
import sessionContext from "../../context/session.context";
import AddLead from "../modals/AddLead";
import AddTask from "../modals/AddTask";
import GlobalShortCutCommon from "../CommonComponents/GlobalShortCutCommon";
import Logo from "../../img/harmonee_logo.png";

const StyledBadge = withStyles(theme => ({
  badge: {
    right: 3,
    top: 1,
    border: "2px solid ",
    padding: "0 4px",
    borderColor: "#ffffff",
    color: "#ffffff",
    backgroundColor:
      "transparent linear-gradient(148deg, #02F0C7 0%, #02F0C7 0%, #02F0C7 17%, #02F0C7 92%, #02F0C7 100%) 0% 0% no-repeat padding-box"
  }
}))(Badge);

const AppTopBar = props => {
  const {
    classes,
    menuOpen,
    actions,
    anchorNote,
    anchorNote2,
    anchorNotification,
    handleCloseFab,
    handleDrawerOpen,
    handleNotification,
    handleNotificationClose,
    handleOpenFab,
    noteClose,
    noteOpen,
    noteClose2,
    noteOpen2,
    anchorLead,
    leadOpen,
    leadClose,
    anchorTask,
    taskOpen,
    taskClose,
    openFab,
    open,
    gloableShortCutOpen,
    golbalShortCut,
    globalLeadOpen,
    globalClientOpen,
    globalTaskOpen,
    globalFileNoteOpen,
    handleClickAway,

    profile: { firstName, profilePictureURL }
  } = props;

  const { dark } = React.useContext(darkModeContext);

  const { session } = React.useContext(sessionContext);

  return (
    <AppBar
      elevation={23}
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon className={classes.appTopMenuButton} />
        </IconButton>

        <div>
          <img
            src={Logo}
            style={{ width: "8rem", height: "3rem", marginRight: "3rem" }}
          />
        </div>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>

          <InputBase
            placeholder="Search for…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>

        <div
          style={{
            flexGrow: 1,
            position: "absolute",
            right: "0rem",
            marginRight: "2rem"
          }}
        >
          <ClickAwayListener onClickAway={handleClickAway}>
            <IconButton
              onClick={gloableShortCutOpen}
              className={classes.speedDialIcon}
            >
              <AddCircle
                elevation={23}
                style={{ color: "white", width: "2rem", height: "2rem" }}
              />
            </IconButton>
          </ClickAwayListener>

          <IconButton
            style={{
              color: "white",
              width: "2rem",
              height: "2rem",
              marginTop: "-1.4rem"
            }}
            className={classes.speedDialIcon}
            onClick={handleNotification}
          >
            <StyledBadge badgeContent={4}>
              <NotificationsIcon style={{ width: "2rem", height: "2rem" }} />
            </StyledBadge>
          </IconButton>

          <IconButton className={classes.speedDialIcon}>
            <MoreVert
              style={{ color: "white", width: "2rem", height: "2rem" }}
              elevation={23}
            />
          </IconButton>

          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appBar"
            aria-haspopup="true"
            style={{ color: "white", fontSize: "2.2rem" }}
            className={classes.speedDialIcon}
          >
            <Avatar
              style={{ color: "white", width: "3rem", height: "3rem" }}
              alt={`${firstName} $surName}`}
              src={profilePictureURL
                .toString()
                .replace("http://192.168.8.116:84", `${session.proxy}`)}
            />
          </IconButton>
        </div>
        <Backdrop open={taskOpen} className={classes.backdrop} timeout={500} />
        <AddTask
          taskOpen={taskOpen}
          anchorTask={anchorTask}
          classes={classes}
          taskClose={taskClose}
        />
        <Backdrop open={leadOpen} className={classes.backdrop} timeout={500} />
        <AddLead
          leadOpen={leadOpen}
          anchorLead={anchorLead}
          classes={classes}
          leadClose={leadClose}
        />
        <Backdrop open={noteOpen} className={classes.backdrop} timeout={500} />
        <AddFileNote
          noteOpen={noteOpen}
          anchorNote={anchorNote}
          classes={classes}
          noteClose={noteClose}
        />

        <AddClient
          noteOpen2={noteOpen2}
          anchorNote2={anchorNote2}
          classes={classes}
          noteClose2={noteClose2}
        />

        <Backdrop
          open={golbalShortCut}
          className={classes.backdrop}
          timeout={500}
        />

        <GlobalShortCutCommon
          golbalShortCut={golbalShortCut}
          globalLeadOpen={globalLeadOpen}
          globalClientOpen={globalClientOpen}
          globalTaskOpen={globalTaskOpen}
          globalFileNoteOpen={globalFileNoteOpen}
        />

        <Backdrop
          open={menuOpen}
          className={classes.backdrop}
          onClick={handleNotificationClose}
          timeout={500}
        />
        <NotificationPanel
          classes={classes}
          dark={dark}
          anchorEl={anchorNotification}
          menuOpen={menuOpen}
          handleClose={handleNotificationClose}
        />
      </Toolbar>
    </AppBar>
  );
};

export default AppTopBar;
