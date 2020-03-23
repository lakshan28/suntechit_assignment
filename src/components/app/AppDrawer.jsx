/**
 * @author Uvindu Sanjana
 */

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Link as ReactLink } from "react-router-dom";
import {
  IconButton,
  Avatar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListItemSecondaryAction,
  Switch,
  Drawer,
  CardActions
} from "@material-ui/core";

import {
  DASHBOARD,
  CLIENTS,
  LEADS,
  TASKS,
  INSIGHTS,
  MODELING,
  TEMPLATES,
  UPLOADS,
  EMAIL,
  CHAT,
  MAPS
} from "../../constants";

import Power from "@material-ui/icons/PowerSettingsNewOutlined";
import EventNoteIcon from "@material-ui/icons/EventNote";
import MenuIcon from "@material-ui/icons/Menu";
import Tune from "@material-ui/icons/TuneOutlined";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import MapIcon from "@material-ui/icons/Map";
import AddIcon from "@material-ui/icons/Add";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import AccountBox from "@material-ui/icons/AccountBox";
import AlarmIcon from "@material-ui/icons/AlarmOutlined";
import Highlight from "@material-ui/icons/HighlightOutlined";
import TrendingIcon from "@material-ui/icons/TrendingUp";

import darkModeContext from "../../context/darkMode.context";
import sessionContext from "../../context/session.context";

const drawerStyles = makeStyles(theme => ({
  mainList: {
    margin: "0 0.8rem 0 0.8rem"
  },
  mainListTopic: {
    margin: "0 0rem 0 0.5rem",
    color: "#F6F8FE",
    opacity: "42%",
    fontWeight: "500"
  },
  mainListIcon: {
    position: "absolute",
    right: "0",
    color: "#F6F8FE",
    opacity: "42%",
    cursor: "pointer",
    marginRight: "2rem"
  },
  mainListcategory: {
    borderRadius: "1.2rem",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#484848"
    }
  },
  MenuIconStyle: {
    color: "#5FDA72",
    "&:hover": {
      color: "#8defce"
    }
  },

  MenuIconStyleOpen: {
    color: "transparent"
  }
}));

const AppDrawer = props => {
  const dClasses = drawerStyles();
  const {
    classes,
    open,
    subOpen,
    privateMode,
    handleDrawerClose,
    profile: { firstName, surName, profilePictureURL, role },
    handleClick,
    setPrivateMode,
    active,
    setActive
  } = props;

  const { dark, setDark } = React.useContext(darkModeContext);

  const { session, logout } = React.useContext(sessionContext);

  //Dahsbord list collapse
  const [dashExpanded, setDahsExpanded] = React.useState(false);

  const dashhandleExpandClick = () => {
    setDahsExpanded(!dashExpanded);
    setElmentExpanded(false);
    setNotifiExpanded(false);
    setCollapsExpanded(false);
  };

  //Element list collapse
  const [elmentExpanded, setElmentExpanded] = React.useState(false);

  const elementhandleExpandClick = () => {
    setElmentExpanded(!elmentExpanded);
    setDahsExpanded(false);

    setNotifiExpanded(false);
    setCollapsExpanded(false);
  };

  //NOTIFICATIONS list collapse
  const [notifiExpanded, setNotifiExpanded] = React.useState(false);

  const NotifihandleExpandClick = () => {
    setNotifiExpanded(!notifiExpanded);
    setDahsExpanded(false);
    setElmentExpanded(false);

    setCollapsExpanded(false);
  };

  //Extra list collapse
  const [collapsExpanded, setCollapsExpanded] = React.useState(false);
  const collapshandleExpandClick = () => {
    setCollapsExpanded(!collapsExpanded);
    setNotifiExpanded(false);
    setDahsExpanded(false);
    setElmentExpanded(false);
  };

  // template list collapse
  const [templateExpanded, setTemplateExpanded] = React.useState(false);

  const templateExpanClick = () => {
    setTemplateExpanded(!templateExpanded);
  };

  /**
   * MainContainer item list on the drawer
   */
  const mainListItems = (
    <div className={dClasses.mainList}>
      <CardActions
        disableSpacing
        className={dClasses.mainListcategory}
        onClick={dashhandleExpandClick}
      >
        <Typography hidden={!open} className={dClasses.mainListTopic}>
          GENERAL
        </Typography>
        {dashExpanded ? (
          <ExpandLessIcon hidden={!open} className={dClasses.mainListIcon} />
        ) : (
          <AddIcon className={dClasses.mainListIcon} />
        )}
      </CardActions>
      <Collapse in={dashExpanded} timeout={500} unmountOnExit>
        <ListItem
          component={ReactLink}
          to={TEMPLATES}
          onClick={() => setActive(TEMPLATES)}
          className={
            open && active === TEMPLATES
              ? classes.activeListItem
              : open
              ? classes.listItem
              : classes.closedListItem
          }
          button
        >
          <ListItemIcon>
            <DashboardIcon style={{ color: "#E3E9EF" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          component={ReactLink}
          to={CLIENTS}
          onClick={() => setActive(CLIENTS)}
          className={
            open && active === CLIENTS
              ? classes.activeListItem
              : open
              ? classes.listItem
              : classes.closedListItem
          }
          button
        >
          <ListItemIcon>
            <PeopleIcon style={{ color: "#E3E9EF" }} />
          </ListItemIcon>
          <ListItemText primary="Clients" />
        </ListItem>
        <ListItem
          component={ReactLink}
          to={LEADS}
          onClick={() => setActive(LEADS)}
          className={
            open && active === LEADS
              ? classes.activeListItem
              : open
              ? classes.listItem
              : classes.closedListItem
          }
          button
        >
          <ListItemIcon>
            <AccountBox style={{ color: "#E3E9EF" }} />
          </ListItemIcon>
          <ListItemText primary="Leads" />
        </ListItem>
      </Collapse>
    </div>
  );
  /*
  drawer close  mainListItemsClose
  */
  const mainListItemsClose = (
    <>
      <ListItem
        component={ReactLink}
        to={TEMPLATES}
        onClick={() => setActive(TEMPLATES)}
        className={
          !open && active === TEMPLATES
            ? classes.activeListItemCloseDrawer
            : null
        }
        button
      >
        <ListItemIcon>
          <DashboardIcon style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem
        component={ReactLink}
        to={CLIENTS}
        onClick={() => setActive(CLIENTS)}
        className={
          !open && active === CLIENTS ? classes.activeListItemCloseDrawer : null
        }
        button
      >
        <ListItemIcon>
          <PeopleIcon style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        </ListItemIcon>
        <ListItemText primary="Clients" />
      </ListItem>

      <ListItem
        component={ReactLink}
        to={LEADS}
        onClick={() => setActive(LEADS)}
        className={
          !open && active === LEADS ? classes.activeListItemCloseDrawer : null
        }
        button
      >
        <ListItemIcon>
          <AccountBox style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        </ListItemIcon>
        <ListItemText primary="Leads" />
      </ListItem>
    </>
  );

  /**
   * Secondary item list on the drawer
   */
  const secondaryListItems = (
    <div className={dClasses.mainList}>
      <CardActions
        disableSpacing
        className={dClasses.mainListcategory}
        onClick={elementhandleExpandClick}
      >
        <Typography hidden={!open} className={dClasses.mainListTopic}>
          ELEMENTS
        </Typography>
        <div hidden={!open} style={{ marginTop: "-1.6rem" }}>
          {elmentExpanded ? (
            <ExpandLessIcon className={dClasses.mainListIcon} />
          ) : (
            <AddIcon className={dClasses.mainListIcon} />
          )}
        </div>
      </CardActions>
      <Collapse in={elmentExpanded} timeout={500} unmountOnExit>
        <ListItem
          component={ReactLink}
          to={TASKS}
          onClick={() => setActive(TASKS)}
          className={
            open && active === TASKS
              ? classes.activeListItem
              : open
              ? classes.listItem
              : classes.closedListItem
          }
          button
        >
          <ListItemIcon>
            <AlarmIcon style={{ color: "#E3E9EF" }} />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem
          component={ReactLink}
          to={INSIGHTS}
          onClick={() => setActive(INSIGHTS)}
          className={
            open && active === INSIGHTS
              ? classes.activeListItem
              : open
              ? classes.listItem
              : classes.closedListItem
          }
          button
        >
          <ListItemIcon>
            <Highlight style={{ color: "#E3E9EF" }} />
          </ListItemIcon>
          <ListItemText primary="Insights" />
        </ListItem>
        <ListItem
          component={ReactLink}
          to={MODELING}
          onClick={() => setActive(MODELING)}
          className={
            open && active === MODELING
              ? classes.activeListItem
              : open
              ? classes.listItem
              : classes.closedListItem
          }
          button
        >
          <ListItemIcon>
            <TrendingIcon style={{ color: "#E3E9EF" }} />
          </ListItemIcon>
          <ListItemText primary="Modeling" />
        </ListItem>
        <ListItem
          component={ReactLink}
          to={TEMPLATES}
          onClick={() => setActive(TEMPLATES)}
          className={
            open && active === TEMPLATES
              ? classes.activeListItem
              : open
              ? classes.listItem
              : classes.closedListItem
          }
          button
        >
          <ListItemIcon>
            <EventNoteIcon style={{ color: "#E3E9EF" }} />
          </ListItemIcon>
          <ListItemText primary="Templates" />
        </ListItem>
        <ListItem
          component={ReactLink}
          to={UPLOADS}
          onClick={() => setActive(UPLOADS)}
          className={
            open && active === UPLOADS
              ? classes.activeListItem
              : open
              ? classes.listItem
              : classes.closedListItem
          }
          button
        >
          <ListItemIcon>
            <PublishIcon style={{ color: "#E3E9EF" }} />
          </ListItemIcon>
          <ListItemText primary="Uploads" />
        </ListItem>
      </Collapse>
    </div>
  );
  /*
  drawer close  mainListItemsClose
  */
  const secondaryListItemsClose = (
    <>
      <ListItem
        component={ReactLink}
        to={TASKS}
        onClick={() => setActive(TASKS)}
        className={
          !open && active === TASKS ? classes.activeListItemCloseDrawer : null
        }
        button
      >
        <ListItemIcon>
          <AlarmIcon style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        </ListItemIcon>
        <ListItemText primary="Tasks" />
      </ListItem>

      <ListItem
        component={ReactLink}
        to={INSIGHTS}
        onClick={() => setActive(INSIGHTS)}
        className={
          !open && active === INSIGHTS
            ? classes.activeListItemCloseDrawer
            : null
        }
        button
      >
        <ListItemIcon>
          <Highlight style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        </ListItemIcon>
        <ListItemText primary="Insights" />
      </ListItem>

      <ListItem
        component={ReactLink}
        to={MODELING}
        onClick={() => setActive(MODELING)}
        className={
          !open && active === MODELING
            ? classes.activeListItemCloseDrawer
            : null
        }
        button
      >
        <ListItemIcon>
          <TrendingIcon style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        </ListItemIcon>
        <ListItemText primary="Modeling" />
      </ListItem>

      <ListItem
        component={ReactLink}
        to={TEMPLATES}
        onClick={() => setActive(TEMPLATES)}
        className={
          !open && active === TEMPLATES
            ? classes.activeListItemCloseDrawer
            : null
        }
        button
      >
        <ListItemIcon>
          <EventNoteIcon style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        </ListItemIcon>
        <ListItemText primary="Templates" />
      </ListItem>

      <ListItem
        component={ReactLink}
        to={UPLOADS}
        onClick={() => setActive(UPLOADS)}
        className={
          !open && active === UPLOADS ? classes.activeListItemCloseDrawer : null
        }
        button
      >
        <ListItemIcon>
          <PublishIcon style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        </ListItemIcon>
        <ListItemText primary="Uploads" />
      </ListItem>
    </>
  );

  /**
   * third item list on the drawer
   */
  const thirdaryListItems = (
    <div className={dClasses.mainList}>
      <CardActions
        disableSpacing
        className={dClasses.mainListcategory}
        onClick={NotifihandleExpandClick}
      >
        <Typography className={dClasses.mainListTopic}>
          NOTIFICATIONS
        </Typography>
        {notifiExpanded ? (
          <ExpandLessIcon className={dClasses.mainListIcon} />
        ) : (
          <AddIcon className={dClasses.mainListIcon} />
        )}
      </CardActions>
      <Collapse in={notifiExpanded} timeout={500} unmountOnExit>
        <ListItem
          component={ReactLink}
          to={EMAIL}
          onClick={() => setActive(EMAIL)}
          className={
            open && active === EMAIL
              ? classes.activeListItem
              : open
              ? classes.listItem
              : classes.closedListItem
          }
          button
        >
          <ListItemIcon>
            <MailOutlineIcon style={{ color: "#E3E9EF" }} />
          </ListItemIcon>
          <ListItemText primary="Email" />
        </ListItem>
        <ListItem
          component={ReactLink}
          to={CHAT}
          onClick={() => setActive(CHAT)}
          className={
            open && active === CHAT
              ? classes.activeListItem
              : open
              ? classes.listItem
              : classes.closedListItem
          }
          button
        >
          <ListItemIcon>
            <ChatBubbleOutlineIcon style={{ color: "#E3E9EF" }} />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
      </Collapse>
    </div>
  );

  /*
  drawer close  mainListItemsClose
  */
  const thirdaryListItemsClose = (
    <>
      <ListItem
        component={ReactLink}
        to={EMAIL}
        onClick={() => setActive(EMAIL)}
        className={
          !open && active === EMAIL ? classes.activeListItemCloseDrawer : null
        }
        button
      >
        <ListItemIcon>
          <MailOutlineIcon
            style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }}
          />
        </ListItemIcon>
        <ListItemText primary="Email" />
      </ListItem>

      <ListItem
        component={ReactLink}
        to={CHAT}
        onClick={() => setActive(CHAT)}
        className={
          !open && active === CHAT ? classes.activeListItemCloseDrawer : null
        }
        button
      >
        <ListItemIcon>
          <Highlight style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItem>
    </>
  );
  /**
   * forth item list on the drawer
   */
  const fortharyListItems = (
    <div className={dClasses.mainList}>
      <CardActions
        disableSpacing
        className={dClasses.mainListcategory}
        onClick={collapshandleExpandClick}
      >
        <Typography className={dClasses.mainListTopic}>EXTRAS</Typography>
        {collapsExpanded ? (
          <ExpandLessIcon className={dClasses.mainListIcon} />
        ) : (
          <AddIcon className={dClasses.mainListIcon} />
        )}
      </CardActions>
      <Collapse in={collapsExpanded} timeout={500} unmountOnExit>
        <ListItem
          component={ReactLink}
          to={MAPS}
          onClick={() => setActive(MAPS)}
          className={
            open && active === MAPS
              ? classes.activeListItem
              : open
              ? classes.listItem
              : classes.closedListItem
          }
          button
        >
          <ListItemIcon>
            <MapIcon style={{ color: "#E3E9EF" }} />
          </ListItemIcon>
          <ListItemText primary="Maps" />
        </ListItem>

        {
          //templates collapse
        }
      </Collapse>
    </div>
  );

  const fortharyListItemsClose = (
    <>
      <ListItem
        component={ReactLink}
        to={MAPS}
        onClick={() => setActive(MAPS)}
        className={
          !open && active === MAPS ? classes.activeListItemCloseDrawer : null
        }
        button
      >
        <ListItemIcon>
          <MapIcon style={{ color: "#E3E9EF", marginLeft: "-0.2rem" }} />
        </ListItemIcon>
        <ListItemText primary="Maps" />
      </ListItem>
    </>
  );

  return (
    <div className="main-container">
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon
              className={
                open ? dClasses.MenuIconStyle : dClasses.MenuIconStyleOpen
              }
            />
          </IconButton>
        </div>
        <div className={classes.profile} hidden={!open}>
          <Avatar
            alt={`${firstName} ${surName}`}
            src={profilePictureURL
              .toString()
              .replace("http://192.168.8.116:84", `${session.proxy}`)}
            className={classes.bigAvatar}
          />
          <ReactLink to={MAPS}>
            <AddAPhotoIcon
              style={{
                fontSize: "0.9rem",
                marginLeft: "4rem",
                marginTop: "-4rem",
                marginBottom: "0.5rem",
                color: "#E3E9EF",
                opacity: "0.8"
              }}
            />
          </ReactLink>
          <Typography
            variant="h6"
            component="h2"
            style={{ textTransform: "capitalize" }}
          >{`${firstName} ${surName}`}</Typography>
          <Typography
            variant="subtitle2"
            component="h2"
            style={{ color: "#BBB6B6", textTransform: "capitalize" }}
          >
            {role}
          </Typography>
        </div>
        {open ? (
          <Divider
            style={{
              backgroundColor: "#E3E9EF",
              margin: "2rem 1rem 1rem 1rem"
            }}
          />
        ) : (
          <Divider
            style={{
              backgroundColor: "#E3E9EF",
              margin: "2rem 1rem 1rem 1rem",
              width: "2.5rem"
            }}
          />
        )}

        <List style={{ margin: "0.5rem", borderRadius: "1rem 0 1rem 0" }}>
          {open ? mainListItems : mainListItemsClose}
        </List>
        <Divider style={{ backgroundColor: "transparent" }} />
        <List style={{ margin: "0.5rem", borderRadius: "1rem 0 1rem 0" }}>
          {open ? secondaryListItems : secondaryListItemsClose}
        </List>
        <Divider style={{ backgroundColor: "transparent" }} />
        <List style={{ margin: "0.5rem", borderRadius: "1rem 0 1rem 0" }}>
          {open ? thirdaryListItems : thirdaryListItemsClose}
        </List>
        <Divider style={{ backgroundColor: "transparent" }} />
        <List style={{ margin: "0.5rem", borderRadius: "1rem 0 1rem 0" }}>
          {open ? fortharyListItems : fortharyListItemsClose}
        </List>
        <List
          hidden={!open}
          style={{
            margin: "0.5rem 0.4rem 0.5rem 1.4rem",
            borderRadius: "1rem 0 1rem 0",
            width: "15.7rem"
          }}
        >
          <ListItem
            className={open ? classes.listItem : classes.closedListItem}
            style={{
              marginBottom: 0,
              borderRadius: subOpen ? "1.5rem 1.5rem 0 0" : "1.5rem"
            }}
            button
            onClick={handleClick}
          >
            <ListItemIcon>
              <Tune style={{ color: "#E3E9EF" }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
            {subOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={subOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                className={
                  open ? classes.subListItem : classes.closedSubListItem
                }
                button
              >
                <ListItemText primary="Dark Mode" />
                <ListItemSecondaryAction>
                  <Switch
                    checked={dark}
                    color="primary"
                    onChange={() => setDark(!dark)}
                    value="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem
                className={
                  open ? classes.subListItemEnd : classes.closedSubListItem
                }
                button
              >
                <ListItemText primary="Private Mode" />
                <ListItemSecondaryAction>
                  <Switch
                    checked={privateMode}
                    color="primary"
                    onChange={() => setPrivateMode(!privateMode)}
                    value="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Collapse>
        </List>
        {open ? (
          <Divider
            style={{
              backgroundColor: "#E3E9EF",
              margin: "2rem 1rem 1rem 1rem"
            }}
          />
        ) : (
          <Divider
            style={{
              backgroundColor: "#E3E9EF",
              margin: "2rem 1rem 1rem 1rem",
              width: "2.5rem"
            }}
          />
        )}
        <List
          style={{
            margin: "3rem 0.5rem 0.5rem 4rem",
            borderRadius: "1rem 0 1rem 0"
          }}
        >
          <ListItem
            onClick={logout}
            className={open ? classes.listAction : classes.closedListAction}
            button
          >
            <ListItemIcon>
              <Power
                style={{
                  color: "#E3E9EF",
                  marginRight: "-2rem",
                  marginLeft: "1rem"
                }}
              />
            </ListItemIcon>
            <ListItemText style={{ marginLeft: "-0.3rem" }} primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default AppDrawer;
