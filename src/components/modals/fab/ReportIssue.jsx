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
  ListItemText,
  ListItem,
  Select,
  Tooltip
} from "@material-ui/core";

import Send from "@material-ui/icons/SendRounded";
import Hamburger from "@material-ui/icons/DehazeRounded";

import bounce from "../../../animations/bounce.anim";
import TagFaces from "../../../img/TagFaces.png";
import AttachFile from "../../../img/attachment.png";
import Video from "../../../img/video.png";

const Report = ({
  classes: classes1,
  anchorEl,
  menuOpen,
  handleClose,
  handleFeedback,
  handleHelper
}) => {
  const animation = bounce(menuOpen, 500, "bottom right");

  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {}, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
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
        className={classes1.helperCard}
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
            <ListItemText>Report an Issue</ListItemText>
            <Hamburger />
          </ListItem>
        </CardContent>
        <CardContent
          style={{
            width: 345,
            textAlign: "left",
            marginTop: 0,
            paddingTop: "0.6rem"
          }}
        >
          <Typography
            style={{
              color: "#707070",
              width: 345,
              fontSize: "1rem",
              fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
              marginTop: "1rem"
            }}
          >
            Please select or enter issue subject
          </Typography>

          <Select
            native
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={state.age}
            disableUnderline
            className={classes1.filledSelect}
            inputProps={{
              className: classes1.filledSelectProps
            }}
            onChange={handleChange("age")}
            style={{ paddingLeft: "1rem", marginBottom: "1rem" }}
          >
            <option
              style={{
                backgroundColor: "#30736c",
                color: "#ffffff",
                padding: "0.5rem",
                paddingBottom: "1rem"
              }}
              value={0}
            >
              Issue in Onboarding Form
            </option>
            <option
              style={{
                backgroundColor: "#30736c",
                color: "#ffffff",
                padding: "0.5rem",
                paddingBottom: "1rem"
              }}
              value={10}
            >
              Issue Example Subject 1
            </option>
            <option
              style={{
                backgroundColor: "#30736c",
                color: "#ffffff",
                padding: "0.5rem",
                paddingBottom: "1rem"
              }}
              value={20}
            >
              Issue Example Subject 2
            </option>
            <option
              style={{
                backgroundColor: "#30736c",
                color: "#ffffff",
                padding: "0.5rem",
                paddingBottom: "1rem"
              }}
              value={30}
            >
              Issue Example Subject 3
            </option>
          </Select>
        </CardContent>
        <CardContent>
          <OutlinedInput
            style={{
              width: "22rem",
              padding: "0.8rem"
            }}
            placeholder={"Type your message here"}
            className={classes1.outlinedInput}
            inputProps={{
              className: classes1.filledInputProps
            }}
            labelWidth={0}
            endAdornment={
              <InputAdornment position="end">
                <LightTooltip arrow title="Add Screen Record">
                  <IconButton
                    aria-label="attach"
                    edge="end"
                    disableRipple
                    disableFocusRipple
                    className={classes1.iconButton}
                  >
                    <img src={Video} alt="video attachment" />
                  </IconButton>
                </LightTooltip>
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
          style={{ marginBottom: "2.5rem" }}
          className="submit-report"
          onClick={() => {
            handleClose();
            handleHelper(anchorEl);
          }}
        >
          <p className="report-an-isuue">Harmonee Helper</p>
        </CardActions>
      </Card>
    </Popover>
  );
};

export default Report;
