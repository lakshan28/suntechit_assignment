/**
 * @author Uvindu Sanjana
 */

import React from "react";
import Popover from "@material-ui/core/Popover";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/ClearRounded";
import { makeStyles } from "@material-ui/core/styles";
import { animated } from "react-spring";
import bounce from "../../animations/bounce.anim";
import { NOTIFICATION_VARIANTS } from "../../constants";
import NotificationItem from "../assets/notification/NotificationItem";

const useStyles = makeStyles(theme => ({
  notificationChange: {
    color: "#171515",
    padding: "0.4rem",

    fontSize: "0.8rem",
    width: "120%",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: " #000000 "
    }
  },
  readMessage: {
    backgroundColor: "#32F00F"
  },
  unReadMessage: {
    backgroundColor: "#ffffff"
  },
  notiBackColorBlue: {
    backgroundColor: "#B2F0FF",
    cursor: "pointer"
  },
  notiBackColorwhite: {
    backgroundColor: "#f4f4f4",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#ffffff"
    }
  }
}));

export default function NotificationPanel({
  classes: classes1,
  anchorEl,
  menuOpen,
  handleClose
}) {
  const classes = useStyles();
  const animation = bounce(menuOpen, 500, "top right");

  const [notificatonExpanded, setNotificatonExpanded] = React.useState(false);
  const [notificationBackground, setNotificationBackground] = React.useState(
    false
  );
  const [notificationBackground2, setNotificationBackground2] = React.useState(
    true
  );
  const [notificationBackground3, setNotificationBackground3] = React.useState(
    false
  );
  const [notificationBackground4, setNotificationBackground4] = React.useState(
    false
  );

  const readUnreadMessage = () => {
    setNotificationBackground(!notificationBackground);
  };
  const readUnreadMessage3 = () => {
    setNotificationBackground3(!notificationBackground3);
  };
  const readUnreadMessage4 = () => {
    setNotificationBackground4(!notificationBackground4);
  };

  const elementhandleExpandClick = () => {
    setNotificatonExpanded(!notificatonExpanded);
  };

  return (
    <Popover
      id="menu-appBar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={menuOpen}
      onClose={handleClose}
      className={classes1.menu}
      PaperProps={{
        style: {
          borderRadius: "1rem",
          overflow: "visible",
          backgroundColor: "transparent"
        }
      }}
      transitionDuration={750}
    >
      <animated.div style={animation}>
        <Card
          className={classes1.card}
          style={{
            backgroundColor: "#f4f4f4",
            float: "right"
          }}
          elevation={0}
        >
          <CardContent style={{ backgroundColor: "#01f0c7", display: "flex" }}>
            <Typography
              variant="h5"
              component="h2"
              style={{ padding: "0", marginLeft: "7rem", marginTop: "0.5rem" }}
            >
              Notifications
            </Typography>
            <IconButton
              className={classes1.speedDialIcon}
              edge="end"
              aria-label="clear"
              style={{ marginLeft: "4.7rem", marginTop: "-1.5rem" }}
              onClick={handleClose}
            >
              <Clear style={{ fontSize: "1.3rem" }} />
            </IconButton>
          </CardContent>
          <CardActions style={{ width: 345, marginTop: "0.5rem" }}>
            {notificatonExpanded ? (
              <Typography
                className="notificationViewAll"
                style={{ marginLeft: "1rem", fontSize: "0.8rem" }}
                onClick={elementhandleExpandClick}
              >
                Filter By Unread
              </Typography>
            ) : (
              <Typography
                className="notificationViewAll"
                style={{ marginLeft: "1rem", fontSize: "0.8rem" }}
                onClick={elementhandleExpandClick}
              >
                View All
              </Typography>
            )}

            <Typography
              className="notificationViewAll"
              style={{
                position: "absolute",
                right: "1.3rem",
                fontSize: "0.8rem"
              }}
            >
              Mark All as Read
            </Typography>
          </CardActions>
          <List
            className={classes1.notificationList}
            style={{ backgroundColor: "#f4f4f4" }}
          >
            <div
              onClick={readUnreadMessage}
              className={
                notificationBackground
                  ? classes.notiBackColorBlue
                  : classes.notiBackColorwhite
              }
            >
              <NotificationItem
                variant={NOTIFICATION_VARIANTS.TASKS}
                name={"Roy"}
                primary={" viewed the Onboarding Form."}
                secondary={"2 hours ago"}
                button
                readUnreadMessage={readUnreadMessage}
              />
            </div>

            <Collapse in={notificatonExpanded} timeout={500} unmountOnExit>
              <div
                onClick={readUnreadMessage3}
                className={
                  notificationBackground3
                    ? classes.notiBackColorBlue
                    : classes.notiBackColorwhite
                }
              >
                <NotificationItem
                  variant={NOTIFICATION_VARIANTS.TASKS}
                  name={"David"}
                  primary={" viewed the Onboarding Form."}
                  secondary={"2 hours ago"}
                  button
                />
              </div>
              <div
                onClick={readUnreadMessage4}
                className={
                  notificationBackground4
                    ? classes.notiBackColorBlue
                    : classes.notiBackColorwhite
                }
              >
                <NotificationItem
                  variant={NOTIFICATION_VARIANTS.EMAILS}
                  name={"Alex Lee "}
                  primary={"Complete your profile setup."}
                  secondary={"3 hours ago"}
                  button
                />
              </div>
            </Collapse>
          </List>
          <CardActions
            style={{
              width: 480,
              margin: "4rem -1rem  0 -1rem"
            }}
          >
            <Typography
              className={classes.notificationChange}
              style={{ marginLeft: "-8rem", cursor: "pointer" }}
            >
              Change Notification Email Frequency
            </Typography>
          </CardActions>
          <CardActions
            style={{ width: 480, margin: "-0.8rem -1rem 1rem -1rem" }}
          >
            <Typography
              className={classes.notificationChange}
              style={{ marginLeft: "-9.8rem", cursor: "pointer" }}
            >
              Allow Desktop Notifications
            </Typography>
          </CardActions>
        </Card>
      </animated.div>
    </Popover>
  );
}
