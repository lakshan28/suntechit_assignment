/**
 * @author Uvindu Sanjana
 */

import React from "react";
import Popover from "@material-ui/core/Popover";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/DeleteRounded";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { DropzoneArea } from "material-ui-dropzone";
import InputBase from "@material-ui/core/InputBase";

export default function AddFileNote({
  classes: classes1,
  anchorNote: anchorEl,
  noteOpen: menuOpen,
  noteClose: handleClose
}) {
  const [state, setState] = React.useState({
    client: "",
    date: new Date(),
    type: "",
    subject: "",
    note: "",
    attachment: ""
  });

  const [dateOpen, setDateOpen] = React.useState(false);

  const textFiled = () => {
    return (
      <InputBase
        placeholder={"Date"}
        className={classes1.filledInput}
        value={state.date}
        inputProps={{ className: classes1.filledInputProps }}
        onFocus={() => setDateOpen(true)}
      />
    );
  };

  return (
    <Popover
      id="menu-appBar"
      anchorEl={anchorEl}
      anchorOrigin={{
        left: window.innerWidth * 0.86,
        top: window.innerHeight * 0.08
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
          backgroundColor: "#707070"
        }
      }}
      transitionDuration={1000}
    >
      <Card
        className={classes1.noteCard}
        style={{ backgroundColor: "#f4f4f4" }}
        elevation={0}
      >
        <CardContent
          style={{ backgroundColor: "#707070", padding: "1rem 1rem 2.5rem 0" }}
        >
          <Typography
            variant="h6"
            component="h3"
            style={{ float: "right", color: "#FFF" }}
          >
            Add File Note
          </Typography>
        </CardContent>
        <CardContent style={{ backgroundColor: "#f4f4f4" }}>
          <Grid container spacing={2}>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography
                variant="body2"
                component="span"
                style={{
                  padding: "0 0 0.5rem 0.5rem",
                  backgroundColor: "transparent"
                }}
              >
                Client
              </Typography>
              <InputBase
                placeholder={"Client"}
                className={classes1.filledInput}
                inputProps={{
                  className: classes1.filledInputProps
                }}
              />
            </Grid>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography
                variant="body2"
                component="span"
                style={{
                  padding: "0 0 0.5rem 0.5rem",
                  backgroundColor: "transparent"
                }}
              >
                Date
              </Typography>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  autoOk
                  ampm={false}
                  open={dateOpen}
                  onOpen={() => setDateOpen(true)}
                  onClose={() => setDateOpen(false)}
                  disableToolbar
                  disableFuture
                  value={state.date}
                  onChange={date => setState({ ...state, date })}
                  label="From"
                  variant="dialog"
                  TextFieldComponent={textFiled}
                  DialogProps={{
                    transitionDuration: 500
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography
                variant="body2"
                component="span"
                style={{
                  padding: "0 0 0.5rem 0.5rem",
                  backgroundColor: "transparent"
                }}
              >
                Type of File Note
              </Typography>
              <InputBase
                placeholder={"Type of File Note"}
                className={classes1.filledInput}
                inputProps={{
                  className: classes1.filledInputProps
                }}
              />
            </Grid>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <Typography
                variant="body2"
                component="span"
                style={{
                  padding: "0 0 0.5rem 0.5rem",
                  backgroundColor: "transparent"
                }}
              >
                Subject
              </Typography>
              <InputBase
                placeholder={"Subject"}
                rowsMax={4}
                className={classes1.filledInput}
                inputProps={{
                  className: classes1.filledInputProps
                }}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "left" }}>
              <Typography
                variant="body2"
                component="span"
                style={{
                  padding: "0 0 0.5rem 0.5rem",
                  backgroundColor: "transparent"
                }}
              >
                Note
              </Typography>
              <InputBase
                placeholder={"Type Something..."}
                className={classes1.filledInput}
                style={{ width: 530, height: 130, borderRadius: "1rem" }}
                inputProps={{
                  className: classes1.filledInputProps
                }}
                multiline
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "left" }}>
              <Typography
                variant="body2"
                component="span"
                style={{
                  padding: "0 0 0.5rem 0.5rem",
                  backgroundColor: "transparent"
                }}
              >
                Attachments
              </Typography>
              <DropzoneArea
                dropzoneClass={classes1.dropZone}
                dropzoneParagraphClass={classes1.dropZoneParagraph}
                dropzoneText="Drag and drop a file here or Choose file"
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes1.noteBottomActions}>
          <Grid container>
            <Grid item xs={3}>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={3}>
              <Button
                variant={"contained"}
                style={{ marginLeft: "1.5rem" }}
                disableElevation={true}
                className={classes1.containedButton}
              >
                Add File Note
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Popover>
  );
}
