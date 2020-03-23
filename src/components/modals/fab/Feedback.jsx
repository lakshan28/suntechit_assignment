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
  Button,
  Tooltip,
  OutlinedInput,
  InputAdornment,
  IconButton,
  ListItemText,
  ListItem
} from "@material-ui/core";

import Hamburger from "@material-ui/icons/DehazeRounded";
import TagFaces from "@material-ui/icons/TagFacesRounded";
import Send from "@material-ui/icons/SendRounded";

import bounce from "../../../animations/bounce.anim";
import FeedbackButtonGroup from "../../assets/feedback/FeedbackButtonGroup";
import AttachFile from "../../../img/attachment.png";

const Feedback = ({
  classes: classes1,
  anchorEl,
  menuOpen,
  handleClose,
  handleHelper,
  handleReport
}) => {
  const animation = bounce(menuOpen, 500, "bottom right");
  const LightTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
      marginTop: "-0.5rem"
    }
  }))(Tooltip);

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
        className={classes1.feedbackCard}
        style={{ backgroundColor: "#f4f4f4", float: "right" }}
        elevation={1}
      >
        <CardContent
          style={{
            backgroundColor: "#30736c",
            color: "#fff",
            textAlign: "right"
          }}
        >
          <ListItem disableGutters={true}>
            <ListItemText>Submit Feedback</ListItemText>
            <Hamburger />
          </ListItem>
        </CardContent>
        <CardContent
          style={{
            width: 480,
            textAlign: "left",
            marginTop: 0,
            paddingTop: 0,
            marginBottom: 0
          }}
        >
          <Typography
            style={{
              color: "#707070",
              width: 480,
              marginTop: "1.5rem",
              marginBottom: "-1.4rem",
              fontSize: "1rem"
            }}
          >
            Please rate your experience with Harmonee.
          </Typography>
        </CardContent>
        <CardContent style={{ margin: 0 }}>
          <FeedbackButtonGroup style={{ marginTop: 0 }} classes={classes1} />
          <OutlinedInput
            fullWidth
            style={{
              width: "26rem",
              padding: "0.8rem",
              marginTop: "2.8rem",
              marginLeft: "0.5rem"
            }}
            placeholder={"Type your message here"}
            className={classes1.outlinedInput}
            inputProps={{
              className: classes1.filledInputProps,
              style: { width: "26rem" }
            }}
            labelWidth={0}
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
                    <TagFaces />
                  </IconButton>
                </LightTooltip>
              </InputAdornment>
            }
          />
          <Button
            variant="contained"
            color="primary"
            disableElevation
            className={classes1.feedbackSendButton}
            endIcon={<Send style={{ marginLeft: "1rem" }} />}
          >
            Send
          </Button>
        </CardContent>
        <CardActions
          style={{ marginTop: "2.8rem" }}
          className="submit-report"
          onClick={() => {
            handleClose();
            handleHelper(anchorEl);
          }}
        >
          <p className="report-an-isuue">Harmonee Helper</p>
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

export default Feedback;
