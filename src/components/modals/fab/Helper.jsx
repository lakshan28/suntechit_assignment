/**
 * @author Uvindu Sanjana
 */

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Popover,
  Card,
  CardContent,
  Typography,
  CardActions,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Tooltip,
  Avatar,
  Slide
} from "@material-ui/core";

import sessionContext from "../../../context/session.context";

import Hamburger from "@material-ui/icons/DehazeRounded";
import Send from "@material-ui/icons/SendRounded";

import bounce from "../../../animations/bounce.anim";
import TagFaces from "../../../img/TagFaces.png";
import AttachFile from "../../../img/attachment.png";

const Helper = ({
  classes: classes1,
  anchorEl,
  menuOpen,
  handleClose,
  handleFeedback,
  handleReport
}) => {
  const { session } = React.useContext(sessionContext);

  const animation = bounce(menuOpen, 500, "bottom right");

  const {
    profile: { firstName, surName, profilePictureURL }
  } = JSON.parse(localStorage.getItem("session"));

  const [sent, setSent] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const LightTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
      marginTop: "-0.5rem"
    }
  }))(Tooltip);

  React.useEffect(() => {
    if (!menuOpen) {
      setSent(false);
      setMessage("");
    }
  }, [menuOpen]);

  const noChat = (
    <React.Fragment>
      <CardContent
        style={{
          width: 345,
          textAlign: "center",
          marginBottom: 0,
          paddingBottom: 0,
          marginLeft: "2.5rem"
        }}
      >
        <Typography
          style={{
            color: "#707070",
            fontWeight: 900,
            fontSize: "1.5rem",
            width: 345,
            textAlign: "center"
          }}
        >
          Questions ?
        </Typography>
      </CardContent>
      <CardContent
        style={{
          width: 345,
          textAlign: "center",
          marginTop: 0,
          paddingTop: 0,
          marginLeft: "2.5rem"
        }}
      >
        <Typography style={{ color: "#707070", width: 345 }}>
          We can help
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const chat = (
    <React.Fragment>
      <CardContent
        style={{
          textAlign: "center",
          margin: "2rem 1rem",
          paddingTop: 0,
          height: "8rem",
          width: "22rem"
        }}
      >
        <Slide direction={"right"} in={menuOpen} timeout={500}>
          <Tooltip
            title={message}
            arrow
            placement={"left"}
            style={{ backgroundColor: "#FFF" }}
            open={menuOpen}
          >
            <Avatar
              style={{ float: "right" }}
              alt={`${firstName} ${surName}`}
              src={profilePictureURL
                .toString()
                .replace("http://192.168.8.116:84", `${session.proxy}`)}
            />
          </Tooltip>
        </Slide>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Popover
      id="menu-appBar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      keepMounted
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      open={menuOpen}
      onClose={handleClose}
      className={classes1.helperPopup}
      PaperProps={{
        style: {
          borderRadius: "1rem",
          overflow: "visible",
          backgroundColor: "transparent",
          boxShadow: "0 0 0 0"
        }
      }}
      transitionDuration={500}
    >
      <Card
        className={classes1.helperCard}
        style={{
          backgroundColor: "#f4f4f4",
          float: "right",
          marginTop: sent ? 0 : "6.3rem"
        }}
        elevation={1}
      >
        <CardContent
          style={{
            backgroundColor: "#30736c",
            color: "#fff",
            textAlign: "right"
          }}
        >
          <Hamburger />
        </CardContent>
        {sent ? chat : noChat}
        <CardContent>
          <OutlinedInput
            style={{ width: "22rem", padding: "0.8rem" }}
            placeholder={"Type your message here"}
            className={classes1.outlinedInput}
            inputProps={{
              className: classes1.filledInputProps
            }}
            labelWidth={0}
            value={message}
            onChange={event => setMessage(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <LightTooltip arrow title="Add File">
                  <IconButton
                    aria-label="attach"
                    edge="end"
                    disableRipple
                    disableFocusRipple
                    className={classes1.iconButton}
                  >
                    <img src={AttachFile} alt="attachment" />
                  </IconButton>
                </LightTooltip>
                <LightTooltip arrow title="Insert Emoji ">
                  <IconButton
                    aria-label="face"
                    edge="end"
                    disableRipple
                    disableFocusRipple
                    className={classes1.iconButton}
                  >
                    <img src={TagFaces} alt="TagFaces" />
                  </IconButton>
                </LightTooltip>
                <IconButton
                  aria-label="send"
                  edge="end"
                  disableRipple
                  disableFocusRipple
                  className={classes1.iconButton}
                  style={{ color: "#000" }}
                  onClick={() =>
                    message !== "" ? setSent(true) : setSent(false)
                  }
                >
                  <Send />
                </IconButton>
              </InputAdornment>
            }
          />
        </CardContent>
        <CardActions
          className="submit-report"
          onClick={() => {
            handleClose();
            handleFeedback(anchorEl);
          }}
        >
          <p className="report-an-isuue">Submit Feedback</p>
        </CardActions>
        <CardActions
          style={{ marginBottom: "2rem" }}
          className="submit-report"
          onClick={() => {
            handleClose();
            handleReport(anchorEl);
          }}
        >
          <p className="report-an-isuue">Report an Issue</p>
        </CardActions>
      </Card>
    </Popover>
  );
};

export default Helper;
