import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
  Grid,
  Dialog,
  ListItemText,
  ListItem,
  Avatar,
  RadioGroup,
  Radio,
  FormControlLabel,
  Grow,
  Collapse,
  InputBase,
  InputAdornment,
  Checkbox
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLessRounded";
import Add from "@material-ui/icons/AddRounded";
import AddCircle from "@material-ui/icons/AddCircleOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
import CommonSelection from "../CommonComponents/CommonSelection";
import greenback from "../../img/greenback (1).svg";
import groupIcon from "../../img/Group1890.svg";
import componentIcon from "../../img/Component 10112.svg";
import Flag from "../../img/aus_flag.png";
import { green, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import FormDialog from "../ConfirmationBox/ConfirmationBox";
import Snackbar from "../SnakBar/Snackbar";
import { grid } from "@material-ui/system";
import {DatePicker, MuiPickersUtilsProvider, TimePicker} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import NoteIcon from "@material-ui/icons/EventNoteRounded";
import CheckBox from "@material-ui/icons/CheckBoxRounded";
import CheckBoxOutline from "@material-ui/icons/CheckBoxOutlineBlankRounded";

const useStyles = makeStyles({
  globalShortCutPaper: {
    borderRadius: "1.5rem",
    padding: "2rem",
    overflow: "hidden",
    width: 860
  },
  deleteButton: {
    color: "#fff",
    textTransform: "none",
    backgroundColor: "#E99191",
    borderRadius: "1.5rem",
    padding: "0.3rem 1.5rem 0.3rem 1.5rem",
    "&:hover": {
      backgroundColor: "#AB1010",
      color: "#fff"
    }
  },
  
  
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="up" ref={ref} {...props} />;
});

const GreenRadio = withStyles({
  root: {
    color: '#707070',
    '&$checked': {
      color: '#9fdbc0',
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

const GreenCheckbox = withStyles({
  root: {
    color: "#707070",
    "&$checked": {
      color: "#9fdbc0"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

export default function AddClient({
  classes: classes1,
  anchorNote2: anchorEl,
  noteOpen2: menuOpen,
  noteClose2: handleClose
}) {
  const classes2 = useStyles();

  const [buttonStateClass, setbuttonStateClass] = React.useState(
    classes2.deleteButton
  );

  const [detail, setDetail] = React.useState({
    cTitle: "",
    fName: "",
    mName: "",
    lName: "",
    prefName: "",
    gender: "",
    eMail: "",
    emailAddressType: "",
    pNo: "61",
    pNoAddressType: "",
    Address: "",
    suburb: "",
    State: "",
    PostalCode: "",
    maritalState:""
  });


  const [detailPartner, setDetailPartner] = React.useState({
    pTitle: "",
    fName: "",
    mName: "",
    lName: "",
    prefName: "",
    gender: "",
    eMail: "",
    emailAddressType: "",
    pNo: "61",
    pNoAddressType: "",
    Address: "",
    suburb: "",
    State: "",
    PostalCode: "",
    maritalState:""
  });
  /* client Title  */
  const clientTitleArray = ["Select", "Mr.", "Mrs.", "Miss.", "Hon.", "Dr."];
  const maritalStateArry = ["Single","De facto","Divorced","Married","Widowed"];

  const clientChangeTitle = event => {
    setDetail({ ...detail, cTitle: event.target.value });
  };
  /* client Title End  */

  const clientChangeGender = event => {
    setDetail({ ...detail, gender: event.target.value });
  };

  const changePhoneNum = event => {
    var res = event.substring(1,event.length);
    if(detail.pNo != "61"){
      setDetail({ ...detail, pNo: res });
    }
  }
  const changePhoneNumPartner = event => {
    var res = event.substring(1,event.length);
    if(detailPartner.pNo != "61"){
      setDetailPartner({ ...detailPartner, pNo: res });
    }
  }

  const [open2, setOpen2] = React.useState(false);
  const handleCloseConfirmation = () => {
    setOpen2(false);
  };
  const [snackText, setSnackText] = React.useState();
  const [snackVariant, setSnackVariant] = React.useState();
  const resetSnack = () => {
    setSnackText();
    setSnackVariant();
  };

  const addCLientClickEvent = event => {
    if(detail.cTitle == ""){
      
    }
  }
  const elements = ['one'];
  
  const validateAddEmail = event => {
    
    if(detail.eMail == "" || detail.emailAddressType == "" || detail.emailAddressType == "Select"){
      
    }
    else{

     
    }

  }
  const [state, setState] = React.useState({
        date: new Date().toDateString(),
        checked: false,
        specifiedDate: new Date().toDateString()
   });
   const [statePartner, setStatePartner] = React.useState({
    date: new Date().toDateString(),
    checked: false,
    specifiedDate: new Date().toDateString()
});

   const dateField = () => {
        return (
            <InputBase style={{width: '16rem'}} placeholder={"Date"} className={classes1.threeInput}
                       value={new Date(state.date).toDateString()}
                       inputProps={{className: classes1.threeInputProps, style: {width: '16rem'}}}
                       onFocus={() => setDateOpen(true)}
                       endAdornment={<InputAdornment position={"end"}><NoteIcon color={"primary"}
                                                                                style={{cursor: 'pointer'}}
                                                                                onClick={() => setDateOpen(true)}/>
                </InputAdornment>}
            />
        );
    };
    const dateFieldPartner = () => {
      return (
          <InputBase style={{width: '16rem'}} placeholder={"Date"} className={classes1.threeInput}
                     value={new Date(statePartner.date).toDateString()}
                     inputProps={{className: classes1.threeInputProps, style: {width: '16rem'}}}
                     onFocus={() => setDateOpen(true)}
                     endAdornment={<InputAdornment position={"end"}><NoteIcon color={"primary"}
                                                                              style={{cursor: 'pointer'}}
                                                                              onClick={() => setDateOpen(true)}/>
              </InputAdornment>}
          />
      );
  };
    
    const [dateOpen, setDateOpen] = React.useState(false);
 


  /* Email Address Selection */
  const emailAddressTypeArray = ["Select", "Personal", "Work"];

  const [personal, setPersonal] = React.useState(true);
  const [contact, setContact] = React.useState(false);
  const [partnerPersonol, setPartnerPersonol] = React.useState(false);
  const [partnerContactDetails,setPartnerContactDetails] =  React.useState(false);

  const [showMaritalView, setShowMaritalView] = React.useState(false);
  const [patnerPresentChekboxView , setPatnerPresentChekboxView] =  React.useState(false);
  const [patnerPresent , setPatnerPresent] =  React.useState(false);
  const clientChangeMaritalStatus = event =>{
    setDetail({ ...detail, maritalState: event.target.value });
    if(event.target.value  == "Married"){
      setPatnerPresentChekboxView(true)
      if(patnerPresent){
        setShowMaritalView(true);
      }
    }
    else{
      setPatnerPresentChekboxView(false);
      setShowMaritalView(false)
      
    }
    console.log(event.target.value);
   
  }

  const patnerPrestonChangeEvent = event => {
    setPatnerPresent(!patnerPresent);
    if(patnerPresent){
      setShowMaritalView(false);
    }
    else{
      setShowMaritalView(true);
    }
  }

  
  return (
    
    <Dialog
      open={menuOpen}
      onClose={handleClose}
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
          style={{ margin: "0.5rem 1rem 0rem 0rem" }}
          variant="h6"
          component="h3"
        >
          Add Client Detailed
        </Typography>
        <AccountCircleIcon style={{ fontSize: "3rem" }} />
      </div>

      <img
        className="beforfilling"
        src={greenback}
      />
      
      <Card
        className={classes1.noteCard}
        style={{ backgroundColor: "transparent" }}
        elevation={0}
        style={{ zIndex: "1" ,marginBottom: '-3rem' ,marginLeft:'-1rem'}}
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
            <ListItemText>Personal Details</ListItemText>
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
                <CommonSelection style={{marginTop: "1rem"}}
                  value={detail.cTitle}
                  onChange={clientChangeTitle}
                  arrata2={clientTitleArray}
                  
                />
              </Grid>
              <Grid item xs={10} style={{ textAlign: "left" }} />
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
                  value={detail.fName}
                  onChange={e =>
                    setDetail({ ...detail, fName: e.target.value })
                  }
                  rowsMax={2}
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
                  Middle Name
                </Typography>
                <InputBase
                  placeholder={"Please Enter Middle Name"}
                  value={detail.mName}
                  onChange={e =>
                    setDetail({ ...detail, mName: e.target.value })
                  }
                  rowsMax={4}
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
                  Last Name *
                </Typography>
                <InputBase
                  placeholder={"Please Enter Last Name"}
                  value={detail.lName}
                  onChange={e =>
                    setDetail({ ...detail, lName: e.target.value })
                  }
                  rowsMax={4}
                  className={classes1.threeInput}
                  inputProps={{
                    className: classes1.threeInputProps
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ textAlign: "left" }}
              >
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent",
                   
                  }}
                >
                  Please enter a preferred name for client to use through-out
                  the system
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "left",marginTop:'0rem' }}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Preferred Name *
                </Typography>
                <InputBase
                  placeholder={"Please Enter Last Name"}
                  value={detail.prefName}
                  onChange={e =>
                    setDetail({ ...detail, prefName: e.target.value })
                  }
                  rowsMax={4}
                  className={classes1.threeInput}
                  inputProps={{
                    className: classes1.threeInputProps
                  }}
                />
              </Grid>

              <br/>
              <Grid item xs={6}>
                        <Typography className={classes1.textLabel} variant="body2" component="span"
                                    style={{padding: '0 0 0.5rem 0.5rem', backgroundColor: 'transparent'}}>
                            Date of Birth *
                        </Typography>
                        <br/>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                style={{ width:'100%'}}
                                autoOk
                                open={dateOpen}
                                onOpen={() => setDateOpen(true)}
                                onClose={() => setDateOpen(false)}
                                disableToolbar
                                value={state.date}
                                onChange={date => setState({...state, date})}
                                variant="dialog"
                                TextFieldComponent={dateField}
                                DialogProps={{
                                    transitionDuration: 500
                                }}
                                format="dd/MM/yyyy"
                            />
                        </MuiPickersUtilsProvider>
                </Grid>
              <Grid item xs={12}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Gender *
                </Typography>
                <RadioGroup
                  style={{ marginTop: "1rem" }}
                  aria-label="gender"
                  name="gender"
                  row
                  value={detail.gender}
                  onChange={clientChangeGender}
                >
                  <FormControlLabel
                    style={{ marginLeft: "2rem" }}
                    value="male"
                    control={<GreenRadio size="small" color="default"/>}
                    labelPlacement="start"
                    label={
                      <Typography style={{ fontSize: "0.8rem" }}>
                        Male
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    style={{ marginLeft: "2rem" }}
                    value="female"
                    control={<GreenRadio size="small" color="default"/>}
                    labelPlacement="start"
                    label={
                      <Typography style={{ fontSize: "0.8rem" }}>
                        Female
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    style={{ marginLeft: "2rem" }}
                    value="other"
                    control={<GreenRadio size="small" color="default" />}
                    labelPlacement="start"
                    label={
                      <Typography style={{ fontSize: "0.8rem" }}>
                        Other
                      </Typography>
                    }
                  />
                </RadioGroup>
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
                  Marital Status
                </Typography>
                <CommonSelection style={{marginTop: "1rem"}}
                  value={detail.maritalState}
                  onChange={clientChangeMaritalStatus}
                  arrata2={maritalStateArry}
                  
                />
              </Grid>
              {
                patnerPresentChekboxView? <Grid item xs={4} style={{ marginTop: "1rem",padding:'1.2rem 0 0 1.5rem' }}>
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
                    backgroundColor: "transparent",
                    
                  }}
                  >
                    Partner Present
                  </Typography>
                }
              />
            </Grid>
            :""
              }
              
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
          <ListItem disableGutters={true} className={classes1.collapseTitle} style={{marginBottom:'2rem'}}>
            <ListItemText >Contact Details</ListItemText >
            {contact ? <ExpandLess /> : <Add />}
          </ListItem>
        </CardContent>
        <Collapse in={contact} timeout={"auto"} unmountOnExit >
          <CardContent style={{ backgroundColor: "transparent" }}>
            <Grid container spacing={2} style={{marginTop: '-2.4rem'}}>
              
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
                  value={detail.eMail}
                  onChange={e =>
                    setDetail({ ...detail, eMail: e.target.value })
                  }
                  style={{ width: "17rem" }}
                  className={classes1.threeInput}
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
                  value={detail.emailAddressType}
                  onChange={e =>
                    setDetail({ ...detail, emailAddressType: e.target.value })
                  }
                  arrata2={emailAddressTypeArray}
                />
              </Grid>
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <IconButton
                  disableRipple
                  className={classes1.roundButton}
                  style={{ marginTop: "2.2rem" }}
                  onClick={validateAddEmail}
                >
                  {
                    <img src={groupIcon}
                      style={{ width: "2.5rem" }}
                    />
                  }
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
                <br />
                <PhoneInput
                style={{ width: "5rem", paddingLeft: "0.1rem" ,marginTop:'1rem'}}
                className={classes1.threeInput}
                  defaultCountry={'au'}
                  value={detail.pNo}
                  onChange={changePhoneNum}
                />
              </Grid>
              <Grid
                item
                xs={2}
                style={{ textAlign: "left", marginTop: "1.3rem" }}
              >
                <CommonSelection
                  value={detail.pNoAddressType}
                  onChange={e =>
                    setDetail({ ...detail, pNoAddressType: e.target.value })
                  }
                  arrata2={emailAddressTypeArray}
                />
              </Grid>
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <IconButton
                  disableRipple
                  className={classes1.roundButton}
                  style={{ marginTop: "2.2rem" }}
                >
                  {
                    <img src={groupIcon}
                      style={{ width: "2.5rem" }}
                    />
                  }
                </IconButton>
              </Grid>
              <Grid
                item
                xs={5}
                style={{ textAlign: "left" }}
              >
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Address *
                </Typography>
                <br />
                <InputBase
                  placeholder={"Address"}
                  value={detail.Address}
                  onChange={e =>
                    setDetail({ ...detail, Address: e.target.value })
                  }
                  style={{ width: "17rem", paddingLeft: "0.6rem" }}
                  rowsMax={4}
                  className={classes1.threeInput}
                  inputProps={{
                    className: classes1.threeInputProps
                  }}
                />
              </Grid>
              <Grid
                item
                xs={5}
                style={{ textAlign: "left"}}
              >
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Suburb *
                </Typography>
                <br />
                <InputBase
                  placeholder={"Suburb"}
                  value={detail.suburb}
                  onChange={e =>
                    setDetail({ ...detail, suburb: e.target.value })
                  }
                  style={{ width: "17rem", paddingLeft: "0.6rem" }}
                  rowsMax={4}
                  className={classes1.threeInput}
                  inputProps={{
                    className: classes1.threeInputProps
                  }}
                />
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
                  State *
                </Typography>
                <br />
                <InputBase
                  placeholder={"State"}
                  value={detail.State}
                  onChange={e =>
                    setDetail({ ...detail, State: e.target.value })
                  }
                  style={{ width: "17rem", paddingLeft: "0.6rem" }}
                  rowsMax={4}
                  className={classes1.threeInput}
                  inputProps={{
                    className: classes1.threeInputProps
                  }}
                />
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
                  Postal Code *
                </Typography>
                <br />
                <InputBase
                  placeholder={" Postal Code"}

                  value={detail.PostalCode}
                  onChange={e =>
                    setDetail({ ...detail, PostalCode: e.target.value })
                  }
                  style={{ width: "17rem", paddingLeft: "0.6rem" }}
                  rowsMax={4}
                  className={classes1.threeInput}
                  inputProps={{
                    className: classes1.threeInputProps
                  }}
                />
              </Grid>
              
            </Grid>
          </CardContent>
        </Collapse>
        {
          showMaritalView ? 
          <Grid>
            <CardContent
              style={{
                backgroundColor: "transparent",
                color: "#707070",
                paddingTop: 0,
                paddingBottom: 0
              }}
              onClick={() => setPartnerPersonol(!partnerPersonol)}
            >
              <ListItem disableGutters={true} className={classes1.collapseTitle} style={{marginBottom:'2rem'}}>
              <ListItemText >Partner Personal Details</ListItemText >
                {partnerPersonol ? <ExpandLess /> : <Add />}
              </ListItem>
            </CardContent>
            <Collapse in={partnerPersonol} timeout={"auto"} unmountOnExit >
              <CardContent style={{ backgroundColor: "transparent" }}>
                <Grid container spacing={2} style={{marginTop: '-2.4rem'}}>
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
                <CommonSelection style={{marginTop: "1rem"}}
                  value={detailPartner.pTitle}
                  onChange={e => setDetailPartner({ ...detailPartner, pTitle: e.target.value })}
                  arrata2={clientTitleArray}
                  
                />
              </Grid>
              <Grid item xs={10} style={{ textAlign: "left" }} />
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
                  value={detailPartner.fName}
                  onChange={e =>
                    setDetailPartner({ ...detailPartner, fName: e.target.value })
                  }
                  rowsMax={2}
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
                  Middle Name
                </Typography>
                <InputBase
                  placeholder={"Please Enter Middle Name"}
                  value={detailPartner.mName}
                  onChange={e =>
                    setDetailPartner({ ...detailPartner, mName: e.target.value })
                  }
                  rowsMax={4}
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
                  Last Name *
                </Typography>
                <InputBase
                  placeholder={"Please Enter Last Name"}
                  value={detailPartner.lName}
                  onChange={e =>
                    setDetailPartner({ ...detailPartner, lName: e.target.value })
                  }
                  rowsMax={4}
                  className={classes1.threeInput}
                  inputProps={{
                    className: classes1.threeInputProps
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ textAlign: "left" }}
              >
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent",
                   
                  }}
                >
                  Please enter a preferred name for client to use through-out
                  the system
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "left",marginTop:'0rem' }}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Preferred Name *
                </Typography>
                <InputBase
                  placeholder={"Please Enter Last Name"}
                  value={detailPartner.prefName}
                  onChange={e =>
                    setDetailPartner({ ...detailPartner, prefName: e.target.value })
                  }
                  rowsMax={4}
                  className={classes1.threeInput}
                  inputProps={{
                    className: classes1.threeInputProps
                  }}
                />
              </Grid>

              <br/>
              <Grid item xs={6}>
                        <Typography className={classes1.textLabel} variant="body2" component="span"
                                    style={{padding: '0 0 0.5rem 0.5rem', backgroundColor: 'transparent'}}>
                            Date of Birth *
                        </Typography>
                        <br/>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                style={{ width:'100%'}}
                                autoOk
                                open={dateOpen}
                                onOpen={() => setDateOpen(true)}
                                onClose={() => setDateOpen(false)}
                                disableToolbar
                                value={statePartner.date}
                                onChange={date => setStatePartner({...statePartner, date})}
                                variant="dialog"
                                TextFieldComponent={dateFieldPartner}
                                DialogProps={{
                                    transitionDuration: 500
                                }}
                                format="dd/MM/yyyy"
                            />
                        </MuiPickersUtilsProvider>
                </Grid>
              <Grid item xs={12}>
                <Typography
                  className={classes1.textLabel}
                  variant="body2"
                  component="span"
                  style={{
                    padding: "0 0 0.5rem 0.5rem",
                    backgroundColor: "transparent"
                  }}
                >
                  Gender *
                </Typography>
                <RadioGroup
                  style={{ marginTop: "1rem" }}
                  aria-label="gender"
                  name="gender"
                  row
                  value={detailPartner.gender}
                  onChange={e => setDetailPartner({ ...detailPartner, gender: e.target.value }) }
                >
                  <FormControlLabel
                    style={{ marginLeft: "2rem" }}
                    value="male"
                    control={<GreenRadio size="small" color="default"/>}
                    labelPlacement="start"
                    label={
                      <Typography style={{ fontSize: "0.8rem" }}>
                        Male
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    style={{ marginLeft: "2rem" }}
                    value="female"
                    control={<GreenRadio size="small" color="default"/>}
                    labelPlacement="start"
                    label={
                      <Typography style={{ fontSize: "0.8rem" }}>
                        Female
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    style={{ marginLeft: "2rem" }}
                    value="other"
                    control={<GreenRadio size="small" color="default" />}
                    labelPlacement="start"
                    label={
                      <Typography style={{ fontSize: "0.8rem" }}>
                        Other
                      </Typography>
                    }
                  />
                </RadioGroup>
              </Grid>
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
              onClick={() => setPartnerContactDetails(!partnerContactDetails)}
            >
              <ListItem disableGutters={true} className={classes1.collapseTitle} style={{marginBottom:'2rem'}}>
              <ListItemText >Partner Contact Details</ListItemText >
                {partnerContactDetails ? <ExpandLess /> : <Add />}
              </ListItem>
            </CardContent>
            <Collapse in={partnerContactDetails} timeout={"auto"} unmountOnExit >
              <CardContent style={{ backgroundColor: "transparent" }}>
                <Grid container spacing={2} style={{marginTop: '-2.4rem'}}>
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
                  value={detailPartner.eMail}
                  onChange={e =>
                    setDetailPartner({ ...detailPartner, eMail: e.target.value })
                  }
                  style={{ width: "17rem" }}
                  className={classes1.threeInput}
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
                  value={detailPartner.emailAddressType}
                  onChange={e =>
                    setDetailPartner({ ...detailPartner, emailAddressType: e.target.value })
                  }
                  arrata2={emailAddressTypeArray}
                />
              </Grid>
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <IconButton
                  disableRipple
                  className={classes1.roundButton}
                  style={{ marginTop: "2.2rem" }}
                  onClick={validateAddEmail}
                >
                  {
                    <img src={groupIcon}
                      style={{ width: "2.5rem" }}
                    />
                  }
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
                <br />
                <PhoneInput
                style={{ width: "5rem", paddingLeft: "0.1rem" ,marginTop:'1rem'}}
                className={classes1.threeInput}
                  defaultCountry={'au'}
                  value={detailPartner.pNo}
                  onChange={changePhoneNumPartner}
                />
              </Grid>
              <Grid
                item
                xs={2}
                style={{ textAlign: "left", marginTop: "1.3rem" }}
              >
                <CommonSelection
                  value={detailPartner.pNoAddressType}
                  onChange={e =>
                    setDetailPartner({ ...detailPartner, pNoAddressType: e.target.value })
                  }
                  arrata2={emailAddressTypeArray}
                />
              </Grid>
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <IconButton
                  disableRipple
                  className={classes1.roundButton}
                  style={{ marginTop: "2.2rem" }}
                >
                  {
                    <img src={groupIcon}
                      style={{ width: "2.5rem" }}
                    />
                  }
                </IconButton>
              </Grid>
              
              
              
              
                </Grid>
              </CardContent>
            </Collapse>


          </Grid>
        :""
        }
        
       
        <CardActions>
            <Grid>
              <Grid
                item
                style={{
                  marginLeft: "33rem",
                  marginBottom: "-1rem",
                  marginTop: "-2rem"
                }}
              >
                  {
                    <img src={componentIcon}
                      style={{ width: "3rem",marginTop:'1.5rem',marginLeft:'-3rem' }}
                    />
                  }
                <Button
                  variant={"contained"}
                  style={{ marginLeft: "1.5rem", width: "12rem" ,marginBottom: '3.3rem'}}
                  disableElevation={true}
                  className={classes1.containedButton}
                  onClick={addCLientClickEvent}
                >
                  Add Client
                </Button>
              </Grid>
            </Grid>
          </CardActions>
       
      </Card>
    </Dialog>
  );
}
