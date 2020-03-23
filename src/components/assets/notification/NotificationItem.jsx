/**
 * @author Uvindu Sanjana
 */

import React from "react";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";

import {
  ListItemAvatar,
  ListItemText,
  Typography,
  Chip,
  ListItemSecondaryAction,
  IconButton,
  ListItem
} from "@material-ui/core";
import NotificationDot from "./NotificationDot";

import Clear from "@material-ui/icons/ClearRounded";

const useStyles = makeStyles(theme => ({
  notificationChip: {
    color: " #000000 ",
    backgroundColor: "#E4E4E4",
    fontSize: "0.7rem",
    width: "6rem",
    padding: "0.1rem 0.2rem",
    marginTop: "-2rem",
    height: "1.3rem",
    boxShadow: "0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2)",
    "&:hover": {
      backgroundColor: "#aca8a8",
      color: " #ffffff"
    }
  },
  speedDialIcon: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}));

const NotificationItem = ({
  variant,
  icon,
  primary,
  secondary,
  name,
  button,
  readUnreadMessage,
  readUnreadMessage2
}) => {
  const classes = useStyles();

  return (
    <ListItem>
      <ListItemAvatar>
        <NotificationDot
          variant={variant}
          icon={icon}
          readUnreadMessage2={readUnreadMessage2}
          readUnreadMessage={readUnreadMessage}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography component="span" variant="body2">
              <span style={{ fontWeight: "bold", marginLeft: "-0.5rem" }}>
                {name}
              </span>
              {primary}
            </Typography>
          </React.Fragment>
        }
        secondary={
          <span>
            <div
              style={{
                fontSize: "0.8rem",

                marginTop: "1rem"
              }}
            >
              <span
                style={{
                  fontSize: "0.8rem",
                  marginLeft: "-2.9rem"
                }}
              >
                {secondary}
              </span>
            </div>
            {button ? (
              <div style={{ marginTop: "-0.2rem" }}>
                <span style={{ marginLeft: "12.2rem", marginTop: "-1rem" }}>
                  <Chip
                    className={classes.notificationChip}
                    label="View Leads"
                    size="small"
                    clickable
                    component="span"
                  />
                </span>
              </div>
            ) : (
              ""
            )}
          </span>
        }
      />
      <ListItemSecondaryAction style={{ marginTop: "-2rem" }}>
        <IconButton
          edge="end"
          aria-label="clear"
          className={classes.speedDialIcon}
        >
          <Clear style={{ fontSize: "1rem" }} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default NotificationItem;
