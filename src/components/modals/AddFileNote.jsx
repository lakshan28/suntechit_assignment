/**
 * @author Uvindu Sanjana
 */

import React from "react";
import Popover from "@material-ui/core/Popover";
import InputBase from "@material-ui/core/InputBase";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { DropzoneArea } from "material-ui-dropzone";
import Grow from "@material-ui/core/Grow";

import Dialog from "@material-ui/core/Dialog";
import {DatePicker, MuiPickersUtilsProvider, TimePicker} from "@material-ui/pickers";
import InputAdornment from "@material-ui/core/InputAdornment";
import NoteIcon from "@material-ui/icons/EventNoteRounded";
import ClockIcon from "@material-ui/icons/QueryBuilderRounded";
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Collapse from "@material-ui/core/Collapse";
import AlarmIcon from "@material-ui/icons/AlarmRounded";
import greenback from "../../img/greenback (1).svg";
import CommonSelection from "../CommonComponents/CommonSelection";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    globalShortCutPaper: {
      borderRadius: "1.5rem",
      padding: "2rem",
      overflow: "hidden",
      width: 860
    }
  });
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Grow direction="up" ref={ref} {...props} />;
  });
export default function AddFileNote({
  classes: classes1,
  anchorNote: anchorEl,
  noteOpen: menuOpen,
  noteClose: handleClose
}) {
  const users = [
    {name: 'Nathan Taylor', role: 'client'},
    {name: 'John Lennon', role: 'adviser'},
    {name: 'Michael Jackson', role: 'client'},
  ];
  const GreenCheckbox = withStyles({
    root: {
        color: "#acea4b",
        "&$checked": {
            color: "#acea4b"
        },
    },
    checked: {}
})(props => <Checkbox color="default" {...props} />);

const classes2 = useStyles();

const [state, setState] = React.useState({
    date: new Date().toDateString(),
    time: new Date(),
    checked: false,
    specifiedDate: new Date().toDateString()
});

const [dateOpen, setDateOpen] = React.useState(false);

const [timeOpen, setTimeOpen] = React.useState(false);

const [specifiedDateOpen, setSpecifiedDateOpen] = React.useState(false);

const [filenoteDetails, setFilenoteDetails] = React.useState({
    client:"",
    note:'',
    typeOfFileNote:"",
    subject:"",



})




const taksChangeTitle = event => {
  setFilenoteDetails({...filenoteDetails, client:event.target.value})
}
const taksChangeDescription = event => {
  setFilenoteDetails({...filenoteDetails,taskDescription:event.target.value})
}

/* Time Field Selection */
const taskTimeArray = ["Select","Month","Week","Day","Hour"];
const [taskTimeType, setTaskTimeType] = React.useState('');
const taksChangeTime = (event) => {
setTaskTimeType(event.target.value)
}
 /* Time Field Selection end */

 /* Radio priority */
const [taskPriorityState, setTaskPriorityState] = React.useState("")
 const taskPriorityChange = (event) => {
    setTaskPriorityState(event.target.value)
 }
/* Radio priority End */

const [clientAni, setTaskTitleDescriptionAni] = React.useState(true);
const [taskPriorityAni, setTaskPriorityAni] = React.useState(true);
const [taskRuleAni,setTaskRuleAni] = React.useState(true)
const [taskReapeatEvery, setTaskReapeatEvery] = React.useState(true)
const [taskafterCertainNumber, setTaskafterCertainNumber] = React.useState(true)
const [taskaddTaskAndPressAni, setTaskaddTaskAndPressAni] = React.useState(true)

React.useEffect(() => {
if( (filenoteDetails.client.length > 0) ){
    setTaskTitleDescriptionAni(false);
} else {
    setTaskTitleDescriptionAni(true)
};

}, [filenoteDetails.client]);

React.useEffect(() => {
if((filenoteDetails.typeOfFileNote.length > 0) & (filenoteDetails.subject.length > 0)  ){
    setTaskPriorityAni(false);
} else {
    setTaskPriorityAni(true);
}
}, [filenoteDetails.typeOfFileNote,filenoteDetails.subject]);

React.useEffect(() => {
    if((filenoteDetails.note.length > 3) ){
        setTaskRuleAni(false);
    } else {
        setTaskRuleAni(true);
    };
}, [filenoteDetails.note]);



/*    */
const dateField = () => {
    return (
        <InputBase style={{width: '16rem'}} placeholder={"Date"} className={classes1.threeInput}
                   value={new Date(state.date).toDateString()}
                   inputProps={{className: classes1.threeInputProps, style: {width: '16rem'}}}
                   onFocus={() => setDateOpen(true)}
                   endAdornment={<InputAdornment position={"end"}><NoteIcon color={"primary"}
                                                                            style={{cursor: 'pointer'}}
                                                                            onClick={() => setDateOpen(true)}/></InputAdornment>}
        />
    );
};

const timeField = () => {
    return (
        <InputBase style={{width: '16rem'}} placeholder={"Time"} className={classes1.threeInput}
                   value={new Date(state.time).toTimeString()}
                   inputProps={{className: classes1.threeInputProps, style: {width: '16rem'}}}
                   onFocus={() => setTimeOpen(true)}
                   endAdornment={<InputAdornment position={"end"}><ClockIcon color={"primary"}
                                                                             style={{cursor: 'pointer'}}
                                                                             onClick={() => setTimeOpen(true)}/></InputAdornment>}
        />
    );
};

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
          style={{ margin: "0.6rem 1rem 0rem 0rem" }}
          variant="h6"
          component="h3"
        >
          Add File Note
        </Typography>
        <NoteIcon style={{ fontSize: "3rem" }} />
      </div>
        
          <img
    className={clientAni ? "addClientField" : taskPriorityAni ? "addClientField01": taskRuleAni ? "addClientField01333" : "addClientField22"}

      
    
    src={greenback}
  />
        <Card className={classes1.noteCard} 
            style={{backgroundColor: "transparent" ,marginTop:'3rem',marginLeft:'-1rem'}} 
            elevation={0}>
            <CardContent>
                <Grid container spacing={2} >
                    <Grid item xs={12} style={{ margin: "1rem 1rem 0rem 0rem" }}>
                        <Typography className={classes1.collapseTitle}  
                            
                        >File Details</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className={classes1.textLabel} variant="body2" component="span"
                                    style={{padding: '0 0 0.5rem 0.5rem', backgroundColor: 'transparent'}}>
                            Client
                        </Typography>
                        <br/>
                        <InputBase style={{width: '100%'}}
                                   placeholder={"Please Enter First Name"} rowsMax={4}
                                   value={filenoteDetails.client}
                                   onChange={taksChangeTitle}
                                   className={classes1.threeInput}
                                   inputProps={{
                                       className: classes1.threeInputProps
                                   }}/>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography className={classes1.textLabel} variant="body2" component="span"
                                    style={{padding: '0 0 0.5rem 0.5rem', backgroundColor: 'transparent'}}>
                            Date
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

                    
                    <Grid item xs={6}>
                        <Typography className={classes1.textLabel} variant="body2" component="span"
                                    style={{padding: '0 0 0.5rem 0.5rem', backgroundColor: 'transparent'}}>
                            Type of File Note
                        </Typography>
                        <br/>
                        <InputBase style={{width: '100%'}}
                                   placeholder={"Please Enter Type of File Note"} 
                                   rowsMax={4}
                                   value={filenoteDetails.typeOfFileNote}
                                   onChange={ e =>setFilenoteDetails({...filenoteDetails,typeOfFileNote:e.target.value})}
                                   className={classes1.threeInput}
                                   inputProps={{
                                       className: classes1.threeInputProps
                                   }} multiline/>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography className={classes1.textLabel} variant="body2" component="span"
                                    style={{padding: '0 0 0.5rem 0.5rem', backgroundColor: 'transparent'}}>
                            Subject
                        </Typography>
                        <br/>
                        <InputBase style={{width: '100%'}}
                                   placeholder={"Please Subject"} rowsMax={4}
                                   value={filenoteDetails.subject}
                                   onChange={e =>setFilenoteDetails({...filenoteDetails,subject:e.target.value})}
                                   className={classes1.threeInput}
                                   inputProps={{
                                       className: classes1.threeInputProps
                                   }} multiline/>
                    </Grid>

                    <Grid item xs={12}>
                            <Typography className={classes1.textLabel} variant="body2" component="span"
                                        style={{padding: '0 0 0.5rem 0.5rem', backgroundColor: 'transparent'}}>
                                Note
                            </Typography>
                            <br/>
                            <InputBase style={{width: '100%', height: '5rem',backgroundColor: 'transparent'}} rowsMax={4}
                             placeholder={"Type of Somethings"}
                             value={filenoteDetails.note}
                             onChange={e =>setFilenoteDetails({...filenoteDetails,note:e.target.value})}
                                       className={classes1.threeInput}
                                       inputProps={{
                                           className: classes1.threeInputProps
                                       }} multiline/>
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: "left"  ,width: '100%'}}>
                        <Typography
                            className={classes1.textLabel}
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
            <CardActions  >
                <Grid >
                   
                    <Grid item  style={{
              marginLeft: "33rem",
              marginBottom: "-4.3rem",
              marginTop: "1.5rem"
            }}>
                        <Button variant={"contained"} style={{marginLeft: '1.5rem',width: "12rem",marginBottom: '3.3rem'}} disableElevation={true}
                                className={classes1.containedButton}>
                            Add File Note
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    </Dialog>
);
}
