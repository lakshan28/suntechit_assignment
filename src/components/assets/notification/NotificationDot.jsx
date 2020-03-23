/**
 * @author Uvindu Sanjana
 */

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { NOTIFICATION_COLORS } from "../../../colors/COLORS";
import { NOTIFICATION_VARIANTS } from "../../../constants";

const NotificationDot = ({
  variant,
  icon,
  readUnreadMessage,
  readUnreadMessage2
}) => {
  let color, middle;

  switch (variant) {
    case NOTIFICATION_VARIANTS.TASKS:
      color = NOTIFICATION_COLORS.TASKS;
      break;
    case NOTIFICATION_VARIANTS.LEADS:
      color = NOTIFICATION_COLORS.LEADS;
      break;
    case NOTIFICATION_VARIANTS.EMAILS:
      color = NOTIFICATION_COLORS.EMAILS;
      break;
    case NOTIFICATION_VARIANTS.CLIENTS:
      color = NOTIFICATION_COLORS.CLIENTS;
      break;
    case NOTIFICATION_VARIANTS.SYSTEM:
      color = NOTIFICATION_COLORS.SYSTEM;
      break;
    default:
      color = "#777";
  }

  icon ? (middle = icon) : (middle = " ");

  return (
    <Avatar
      style={{
        backgroundColor: color,
        border: "0.1rem solid #FFF",
        boxShadow: "0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2)",
        height: "1.5rem",
        width: "1.5rem",
        marginTop: "-2.4rem",
        marginLeft: "0.3rem"
      }}
      onClick={(readUnreadMessage, readUnreadMessage2)}
    >
      {middle}
    </Avatar>
  );
};

export default NotificationDot;
