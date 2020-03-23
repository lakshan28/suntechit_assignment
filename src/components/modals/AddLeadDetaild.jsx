/**
 * @author Uvindu Sanjana
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputBase,
  Dialog,
  Grow,
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  IconButton,
  Button,
  Collapse,
  ListItemText,
  ListItem,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox
} from "@material-ui/core/";
import Add from "@material-ui/icons/AddRounded";
import ExpandLess from "@material-ui/icons/ExpandLessRounded";

import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

import greenback from "../../img/greenback (1).svg";
import CommonSelection from "../CommonComponents/CommonSelection";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import groupIcon from "../../img/Group1890.svg";
import { withStyles } from "@material-ui/core/styles";
import CheckBox from "@material-ui/icons/CheckBoxRounded";
import CheckBoxOutline from "@material-ui/icons/CheckBoxOutlineBlankRounded";
const useStyles = makeStyles({
  globalShortCutPaper: {
    borderRadius: "1.5rem",
    padding: "2rem",
    overflow: "hidden",
    width: 860
  }
});
const GreenCheckbox = withStyles({
  root: {
    color: "#707070",
    "&$checked": {
      color: "#9fdbc0"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="up" ref={ref} {...props} />;
});

const AddLeadDetaild = ({
  classes: classes1,
  anchorLead: anchorEl,
  leadOpen: menuOpen,
  leadClose: handleClose
}) => {
  const classes2 = useStyles();

  const [personal, setPersonal] = React.useState(true);
  const [contact, setContact] = React.useState(false);
  const [extra, setExtra] = React.useState(false);

  const close = () => {
    setPersonal(false);
    setContact(false);
    setExtra(false);
  };

  const [leadDetail, setLeadDetail] = React.useState({
    fName: "",
    mName: "",
    lName: "",
    maritalStatus: "",
    eMail: "",
    pNo: "61",
    source: "",
    estimatedValue: "",
    status: "",
    notes: "",
    tasks: ""
  });

  const [leadTitleAni, setLeadTitleAni] = React.useState(true);
  const [leadPersonal, setLeadPersonal] = React.useState(true);
  const [leadContact, setLeadContact] = React.useState(true);
  const [leadExtraDetails, setLeadExtraDetails] = React.useState(true);
  const [leadExtraDetailsTask, setLeadExtraDetailsTask] = React.useState(true);
  const changePhoneNum = event => {
    var res = event.substring(1, event.length);
    if (leadDetail.pNo != "61") {
      setLeadDetail({ ...leadDetail, pNo: res });
    }
  };
  /* Select Title */
  const titleArray = ["Select", "Mr.", "Mrs.", "Miss.", "Hon.", "Dr."];
  const [leadTitle, setLeadTitle] = React.useState("");

  const leadChangeTitle = event => {
    setLeadTitle(event.target.value);
  };
  /* Select Title End */

  /* Marital Status */
  const maritalStatusArray = [
    "Select",
    "Single",
    "Married",
    "Divorced",
    "Widowed"
  ];
  const [leadMaritalStatus, setLeadMaritalStatus] = React.useState("");

  const [showMaritalView, setShowMaritalView] = React.useState(false);
  const [
    patnerPresentChekboxView,
    setPatnerPresentChekboxView
  ] = React.useState(false);
  const [patnerPresent, setPatnerPresent] = React.useState(false);

  const leadChangeMaritalStatus = event => {
    setLeadMaritalStatus(event.target.value);

    if (event.target.value == "Married") {
      setPatnerPresentChekboxView(true);
      if (patnerPresent) {
        setShowMaritalView(true);
      }
    } else {
      setPatnerPresentChekboxView(false);
      setShowMaritalView(false);
    }
  };

  const patnerPrestonChangeEvent = event => {
    setPatnerPresent(!patnerPresent);
    if (patnerPresent) {
      setShowMaritalView(false);
    } else {
      setShowMaritalView(true);
    }
  };

  /* Marital Status End */

  /* Email Address Selection */
  const emailAddressTypeArray = ["Select", "Personal", "Work"];
  const [leadEmailAddressType, setLeadEmailAddressType] = React.useState("");

  const leadChangeemailAddressType = event => {
    setLeadEmailAddressType(event.target.value);
  };
  /* Email Address Selection End */

  /* Phone no Selection */
  const poneNoTypeArray = ["Select", "Personal", "Work"];
  const [leadPoneNoType, setLeadPoneNoType] = React.useState("");

  const leadChangePoneNoType = event => {
    setLeadPoneNoType(event.target.value);
  };
  /*Phone no  Selection End */

  React.useEffect(() => {
    if (leadTitle === "" || leadTitle === "Select") {
      setLeadTitleAni(true);
    } else setLeadTitleAni(false);
  }, [leadTitle]);

  React.useEffect(() => {
    if (
      (leadDetail.fName.length > 0) &
      (leadDetail.lName.length > 0) &
      (leadMaritalStatus !== "")
    ) {
      setLeadPersonal(false);
    } else {
      setLeadPersonal(true);
    }
  }, [leadDetail.fName, leadDetail.lName][leadMaritalStatus]);

  React.useEffect(() => {
    if (
      (leadDetail.eMail.length > 0) &
      (leadDetail.pNo.length > 0) &
      (leadEmailAddressType !== "") &
      (leadPoneNoType !== "")
    ) {
      setLeadContact(false);
    } else {
      setLeadContact(true);
    }
  }, [leadDetail.eMail, leadDetail.pNo][leadPoneNoType]);

  React.useEffect(() => {
    if (
      (leadDetail.estimatedValue.length > 0) &
      (leadDetail.status.length > 0)
    ) {
      setLeadExtraDetails(false);
    } else {
      setLeadExtraDetails(true);
    }
  }, [leadDetail.estimatedValue, leadDetail.status]);

  React.useEffect(() => {
    if ((leadDetail.notes.length > 0) & (leadDetail.tasks.length > 0)) {
      setLeadExtraDetailsTask(false);
    } else {
      setLeadExtraDetailsTask(true);
    }
  }, [leadDetail.tasks, leadDetail.notes]);

  return (
    <Dialog
      open={menuOpen}
      onClose={() => {
        handleClose();
        close();
      }}
      classes={{ paper: classes2.globalShortCutPaper }}
      TransitionComponent={Transition}
      scroll="body"
      fullWidth={true}
      maxWidth={"md"}
      style={{ zIndex: 1250 }}
    >
      <div
        style={{
          right: "0rem",
          color: "#fff",
          display: "flex",
          position: "absolute",
          margin: "0rem 3rem 4rem 0rem",
          zIndex: 1000
        }}
      >
        <Typography
          style={{ margin: "0.6rem 1rem 0rem 0rem" }}
          variant="h6"
          component="h3"
        >
          Add Lead Detaild
        </Typography>
        <AccountCircleRoundedIcon style={{ fontSize: "3rem" }} />
      </div>
      <img className={"addLeadbeforefilling"} src={greenback} />
      <Card
        className={classes1.noteCard}
        style={{ backgroundColor: "transparent", marginLeft: "-1rem" }}
        elevation={0}
      >
        <CardContent
          style={{
            backgroundColor: "transparent",
            color: "#707070",
            marginTop: "4rem",
            paddingBottom: 0
          }}
          onClick={() => setPersonal(!personal)}
        >
          <ListItem disableGutters={true} className={classes1.collapseTitle}>
            <ListItemText>Personal</ListItemText>
            {personal ? <ExpandLess /> : <Add />}
          </ListItem>
        </CardContent>
        <Collapse in={personal} timeout={"auto"} unmountOnExit>
          <CardContent style={{ backgroundColor: "transparent" }}>
            <Grid container spacing={2}>
              <Grid item xs={2} style={{ textAlign: "left" }}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Title *
                </Typography>

                <CommonSelection
                  value={leadTitle}
                  onChange={leadChangeTitle}
                  arrata2={titleArray}
                />
              </Grid>
              <Grid item xs={10} />
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  First Name *
                </Typography>
                <InputBase
                  placeholder={"Please Enter First Name"}
                  rowsMax={4}
                  className={classes1.threeInput}
                  value={leadDetail.fName}
                  onChange={e =>
                    setLeadDetail({ ...leadDetail, fName: e.target.value })
                  }
                  inputProps={{
                    className: classes1.threeInputProps
                  }}
                />
              </Grid>
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Middle Name
                </Typography>
                <InputBase
                  placeholder={"Please Enter Middle Name"}
                  rowsMax={4}
                  className={classes1.threeInput}
                  value={leadDetail.mName}
                  onChange={e =>
                    setLeadDetail({ ...leadDetail, mName: e.target.value })
                  }
                  inputProps={{
                    className: classes1.threeInputProps
                  }}
                />
              </Grid>
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Last Name *
                </Typography>
                <InputBase
                  placeholder={"Please Enter Last Name"}
                  rowsMax={4}
                  value={leadDetail.lName}
                  onChange={e =>
                    setLeadDetail({ ...leadDetail, lName: e.target.value })
                  }
                  className={classes1.threeInput}
                  inputProps={{
                    className: classes1.threeInputProps
                  }}
                />
              </Grid>
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Marital Status *
                </Typography>
                <br />
                <CommonSelection
                  value={leadMaritalStatus}
                  onChange={leadChangeMaritalStatus}
                  arrata2={maritalStatusArray}
                />
              </Grid>
              {patnerPresentChekboxView ? (
                <Grid
                  item
                  xs={4}
                  style={{ marginTop: "1rem", padding: "1.2rem 0 0 1.5rem" }}
                >
                  <FormControlLabel
                    style={{ marginLeft: "0.5rem" }}
                    control={
                      <GreenCheckbox
                        checked={patnerPresent}
                        onChange={patnerPrestonChangeEvent}
                        value="checked"
                        icon={
                          <CheckBoxOutline
                            style={{ width: "1.5vw", height: "3vh" }}
                          />
                        }
                        checkedIcon={
                          <CheckBox style={{ width: "1.5vw", height: "3vh" }} />
                        }
                      />
                    }
                    labelPlacement="start"
                    label={
                      <Typography
                        className={classes1.textLabel}
                        variant="body2"
                        component="span"
                        style={{
                          padding: "rem",
                          backgroundColor: "transparent"
                        }}
                      >
                        Partner Present
                      </Typography>
                    }
                  />
                </Grid>
              ) : (
                ""
              )}
            </Grid>
          </CardContent>
        </Collapse>
        <CardContent
          style={{
            backgroundColor: "transparent",
            color: "#707070",
            paddingTop: 0,
            paddingBottom: 0
          }}
          onClick={() => setContact(!contact)}
        >
          <ListItem disableGutters={true} className={classes1.collapseTitle}>
            <ListItemText>Contact</ListItemText>
            {contact ? <ExpandLess /> : <Add />}
          </ListItem>
        </CardContent>
        <Collapse in={contact} timeout={"auto"} unmountOnExit>
          <CardContent style={{ backgroundColor: "transparent" }}>
            <Grid container spacing={2}>
              <Grid item xs={5} style={{ textAlign: "left" }}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Email Address *
                </Typography>
                <br />
                <InputBase
                  rowsMax={4}
                  style={{ width: "17rem" }}
                  className={classes1.threeInput}
                  value={leadDetail.eMail}
                  onChange={e =>
                    setLeadDetail({ ...leadDetail, eMail: e.target.value })
                  }
                  inputProps={{
                    className: classes1.threeInputProps
                  }}
                />
              </Grid>
              <Grid
                item
                xs={2}
                style={{ textAlign: "left", marginTop: "1.3rem" }}
              >
                <CommonSelection
                  value={leadEmailAddressType}
                  onChange={leadChangeemailAddressType}
                  arrata2={emailAddressTypeArray}
                />
              </Grid>
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <IconButton
                  disableRipple
                  className={classes1.roundButton}
                  style={{ marginTop: "2.2rem" }}
                  onClick={e => {}}
                >
                  {<img src={groupIcon} style={{ width: "2.5rem" }} />}
                </IconButton>
              </Grid>
              <Grid item xs={5} style={{ textAlign: "left" }}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Phone Number *
                </Typography>
                <PhoneInput
                  style={{
                    width: "5rem",
                    paddingLeft: "0.1rem",
                    marginTop: "1rem"
                  }}
                  className={classes1.threeInput}
                  defaultCountry={"au"}
                  value={leadDetail.pNo}
                  onChange={changePhoneNum}
                />
              </Grid>
              <Grid
                item
                xs={2}
                style={{ textAlign: "left", marginTop: "1.3rem" }}
              >
                <CommonSelection
                  value={leadPoneNoType}
                  onChange={leadChangePoneNoType}
                  arrata2={poneNoTypeArray}
                />
              </Grid>
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <IconButton
                  disableRipple
                  className={classes1.roundButton}
                  style={{ marginTop: "2.2rem" }}
                >
                  {<img src={groupIcon} style={{ width: "2.5rem" }} />}
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
        <CardContent
          style={{
            backgroundColor: "transparent",
            color: "#707070",
            paddingTop: 0,
            paddingBottom: 0,
            marginBottom: "-1rem"
          }}
          onClick={() => setExtra(!extra)}
        >
          <ListItem disableGutters={true} className={classes1.collapseTitle}>
            <ListItemText>Extra Details</ListItemText>
            {extra ? <ExpandLess /> : <Add />}
          </ListItem>
        </CardContent>
        <Collapse in={extra} timeout={"auto"} unmountOnExit>
          <CardContent style={{ backgroundColor: "transparent" }}>
            <Grid container spacing={2}>
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Source *
                </Typography>
                <br />
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  autoWidth
                  input={
                    <InputBase
                      style={{ width: "15rem", padding: "0.4rem 0 0 1rem" }}
                      value={1}
                      className={classes1.threeInput}
                      inputProps={{
                        className: classes1.threeInputProps
                      }}
                    />
                  }
                >
                  <MenuItem value={1}>Partner Referral</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Estimated Value *
                </Typography>
                <InputBase
                  rowsMax={4}
                  className={classes1.threeInput}
                  value={leadDetail.estimatedValue}
                  onChange={e =>
                    setLeadDetail({
                      ...leadDetail,
                      estimatedValue: e.target.value
                    })
                  }
                  inputProps={{
                    className: classes1.threeInputProps
                  }}
                />
              </Grid>
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Status *
                </Typography>
                <InputBase
                  rowsMax={4}
                  className={classes1.threeInput}
                  value={leadDetail.status}
                  onChange={e =>
                    setLeadDetail({ ...leadDetail, status: e.target.value })
                  }
                  inputProps={{
                    className: classes1.threeInputProps
                  }}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "left" }}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Notes *
                </Typography>
                <br />
                <InputBase
                  placeholder={"Type your note here..."}
                  rows={8}
                  value={leadDetail.notes}
                  onChange={e =>
                    setLeadDetail({ ...leadDetail, notes: e.target.value })
                  }
                  className={classes1.AddCircleTextArea}
                  style={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "left" }}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Tasks *
                </Typography>
                <br />
                <InputBase
                  placeholder={"Add a task and press Enter"}
                  className={classes1.filledInput}
                  value={leadDetail.tasks}
                  onChange={e =>
                    setLeadDetail({ ...leadDetail, tasks: e.target.value })
                  }
                  inputProps={{
                    className: classes1.filledInputProps
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>

          <CardActions>
            <Grid>
              <Grid
                item
                style={{
                  marginLeft: "33rem",
                  marginBottom: "-4.3rem",
                  marginTop: "0rem"
                }}
              >
                <Button
                  variant={"contained"}
                  style={{
                    marginLeft: "1.5rem",
                    width: "12rem",
                    marginBottom: "3.3rem"
                  }}
                  disableElevation={true}
                  className={classes1.containedButton}
                >
                  Add Lead
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Collapse>
      </Card>
    </Dialog>
  );
};

export default AddLeadDetaild;
