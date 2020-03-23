/**
 * @author Uvindu Sanjana
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  InputBase,
  Dialog,
  Card,
  Grow,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
  TextField,
  Chip,
  Radio,
  RadioGroup,
  FormControlLabel,
  InputAdornment,
  Checkbox,
  Collapse
} from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { CLIENT } from "../../constants";
import { TASK_COLOR } from "../../colors/COLORS";
import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker
} from "@material-ui/pickers";
import NoteIcon from "@material-ui/icons/EventNoteRounded";
import ClockIcon from "@material-ui/icons/QueryBuilderRounded";
import CheckBox from "@material-ui/icons/CheckBoxRounded";
import AlarmIcon from "@material-ui/icons/AlarmRounded";
import CheckBoxOutline from "@material-ui/icons/CheckBoxOutlineBlankRounded";
import greenback from "../../img/greenback (1).svg";
import CommonSelection from "../CommonComponents/CommonSelection";

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

const GreenCheckbox = withStyles({
  root: {
    color: "#acea4b",
    "&$checked": {
      color: "#acea4b"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const GreenRadio = withStyles({
  root: {
    color: '#707070',
    '&$checked': {
      color: '#9fdbc0',
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

const AddTask = ({
  classes: classes1,
  anchorTask: anchorEl,
  taskOpen: menuOpen,
  taskClose: handleClose
}) => {
  const classes2 = useStyles();
  const users = [
    { name: "Nathan Taylor", role: "client" },
    { name: "John Lennon", role: "adviser" },
    { name: "Michael Jackson", role: "client" }
  ];

  const [state, setState] = React.useState({
    date: new Date().toDateString(),
    time: new Date(),
    checked: false,
    specifiedDate: new Date().toDateString()
  });

  const [dateOpen, setDateOpen] = React.useState(false);

  const [timeOpen, setTimeOpen] = React.useState(false);

  const [specifiedDateOpen, setSpecifiedDateOpen] = React.useState(false);

  const [taskDetails, setTaskDetails] = React.useState({
    taskTitle: "",
    taskDescription: "",
    checList: "",
    reapetTaskNumber: null,
    afterCertainNumber: null,
    addTaskAndPress: ""
  });

  const taksChangeTitle = event => {
    setTaskDetails({ ...taskDetails, taskTitle: event.target.value });
  };
  const taksChangeDescription = event => {
    setTaskDetails({ ...taskDetails, taskDescription: event.target.value });
  };

  /* Time Field Selection */
  const taskTimeArray = ["Select", "Month", "Week", "Day", "Hour"];
  const [taskTimeType, setTaskTimeType] = React.useState("");
  const taksChangeTime = event => {
    setTaskTimeType(event.target.value);
  };
  /* Time Field Selection end */

  /* Radio priority */
  const [taskPriorityState, setTaskPriorityState] = React.useState("");
  const taskPriorityChange = event => {
    setTaskPriorityState(event.target.value);
  };
  /* Radio priority End */

  const [taskTitleDescriptionAni, setTaskTitleDescriptionAni] = React.useState(
    true
  );
  const [taskPriorityAni, setTaskPriorityAni] = React.useState(true);
  const [taskRuleAni, setTaskRuleAni] = React.useState(true);
  const [taskReapeatEvery, setTaskReapeatEvery] = React.useState(true);
  const [taskafterCertainNumber, setTaskafterCertainNumber] = React.useState(
    true
  );
  const [taskaddTaskAndPressAni, setTaskaddTaskAndPressAni] = React.useState(
    true
  );

  React.useEffect(() => {
    if (
      (taskDetails.taskTitle.length > 0) &
      (taskDetails.taskDescription.length > 0)
    ) {
      setTaskTitleDescriptionAni(false);
    } else setTaskTitleDescriptionAni(true);
  }, [taskDetails.taskTitle, taskDetails.taskDescription]);

  React.useEffect(() => {
    if (taskPriorityState !== "") {
      setTaskPriorityAni(false);
    } else setTaskPriorityAni(true);
  }, [taskPriorityState]);

  React.useEffect(() => {
    if (state.checked) {
      setTaskRuleAni(false);
    } else setTaskRuleAni(true);
  }, [state.checked]);

  React.useEffect(() => {
    if ((taskDetails.reapetTaskNumber !== null) & (taskTimeType !== "Select")) {
      setTaskReapeatEvery(false);
    } else setTaskReapeatEvery(true);
  }, [taskDetails.reapetTaskNumber, taskTimeType]);

  React.useEffect(() => {
    if (taskDetails.afterCertainNumber !== null) {
      setTaskafterCertainNumber(false);
    } else setTaskafterCertainNumber(true);
  }, [taskDetails.afterCertainNumber]);

  React.useEffect(() => {
    if (taskDetails.addTaskAndPress.length > 2) {
      setTaskaddTaskAndPressAni(false);
    } else setTaskaddTaskAndPressAni(true);
  }, [taskDetails.addTaskAndPress]);

  /*    */
  const dateField = () => {
    return (
      <InputBase
        style={{ width: "16rem" }}
        placeholder={"Date"}
        className={classes1.threeInput}
        value={new Date(state.date).toDateString()}
        inputProps={{
          className: classes1.threeInputProps,
          style: { width: "16rem" }
        }}
        onFocus={() => setDateOpen(true)}
        endAdornment={
          <InputAdornment position={"end"}>
            <NoteIcon
              color={"primary"}
              style={{ cursor: "pointer" }}
              onClick={() => setDateOpen(true)}
            />
          </InputAdornment>
        }
      />
    );
  };

  const timeField = () => {
    return (
      <InputBase
        style={{ width: "16rem" }}
        placeholder={"Time"}
        className={classes1.threeInput}
        value={new Date(state.time).toTimeString()}
        inputProps={{
          className: classes1.threeInputProps,
          style: { width: "16rem" }
        }}
        onFocus={() => setTimeOpen(true)}
        endAdornment={
          <InputAdornment position={"end"}>
            <ClockIcon
              color={"primary"}
              style={{ cursor: "pointer" }}
              onClick={() => setTimeOpen(true)}
            />
          </InputAdornment>
        }
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
          style={{ margin: "0.5rem 1rem 0rem 0rem" }}
          variant="h6"
          component="h3"
        >
          Add Task
        </Typography>
        <AlarmIcon style={{ fontSize: "3rem" }} />
      </div>
      <img
        className={
          taskTitleDescriptionAni
            ? "addTaskforefilling"
            : taskPriorityAni
            ? "addTaskAfterfillingTitleDescription"
            : taskRuleAni
            ? "addTaskAfterfillingPriority"
            : taskReapeatEvery
            ? "addTaskAfterfillingRule"
            : taskafterCertainNumber
            ? "addTaskAfterfillingRepeat"
            : taskaddTaskAndPressAni
            ? "addTaskAfterfillingCertainNumber"
            : "addTaskAfterfillingTaskAndPress"
        }
        src={greenback}
      />
      <Card
        className={classes1.noteCard}
        style={{ backgroundColor: "transparent",marginLeft:'-1rem' }}
        elevation={0}
      >
        <CardContent style={{marginTop: "4rem"}}>
          <Grid container spacing={2}>
            <Grid style={{ color: "#707070" }} item xs={12}>
              <Typography className={classes1.collapseTitle}>
                Task Details
              </Typography>
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
                Title
              </Typography>
              <br />
              <InputBase
                style={{ width: "100%" }}
                placeholder={"Please Enter First Name"}
                rowsMax={4}
                value={taskDetails.taskTitle}
                onChange={taksChangeTitle}
                className={classes1.threeInput}
                inputProps={{
                  className: classes1.threeInputProps
                }}
              />
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
                Assignees
              </Typography>
              <Autocomplete
                style={{
                  borderColor: "#BDBDBD ",
                  borderStyle: "solid",
                  borderRadius: "1rem",
                  borderWidth: "1.5px",
                  backgroundColor: "transparent",
                  marginTop: '1rem'
                }}
                multiple
                id="size-small-outlined-multi"
                size="small"
                options={users}
                getOptionLabel={user => user.name}
                defaultValue={[users[1]]}
                renderInput={params => (
                  <TextField
                    {...params}
                    style={{
                      backgroundColor: "transparent",
                      padding: "0.8rem 0.5rem",
                      borderRadius: "0.8rem"
                    }}
                    fullWidth
                    InputProps={{
                      ...params.InputProps,
                      disableUnderline: true,
                      multiline: false
                    }}
                  />
                )}
                renderOption={option => {
                  let color;

                  option.role === CLIENT
                    ? (color = TASK_COLOR.CLIENT)
                    : (color = TASK_COLOR.ADVISER);

                  return (
                    <span>
                      {option.name}
                      <Chip
                        label={option.role.toString().toUpperCase()}
                        style={{
                          backgroundColor: color,
                          boxShadow: "0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.2)",
                          padding: "0.8rem 0.2rem",
                          marginLeft: "1rem",
                          fontSize: "0.7rem",
                          borderRadius: "0.5rem"
                        }}
                      />
                    </span>
                  );
                }}
                renderTags={value => {
                  return value.map(option => (
                    <Chip
                      key={option.name}
                      label={option.name}
                      style={{
                        backgroundColor:
                          option.role === CLIENT
                            ? TASK_COLOR.CLIENT
                            : TASK_COLOR.ADVISER,
                        boxShadow: "0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.2)",
                        padding: "0.8rem 0.2rem",
                        marginLeft: "1rem",
                        fontSize: "0.7rem",
                        borderRadius: "0.8rem"
                      }}
                    />
                  ));
                }}
              />
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
                Description
              </Typography>
              <br />
              <InputBase
                style={{ width: "100%", height: "5rem" }}
                rowsMax={4}
                value={taskDetails.taskDescription}
                onChange={taksChangeDescription}
                className={classes1.threeInput}
                inputProps={{
                  className: classes1.threeInputProps
                }}
                multiline
              />
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
                Priority
              </Typography>
              <RadioGroup
              style={{ marginTop: "0.5rem" }}
                aria-label="priority"
                name="priority"
                row
                value={taskPriorityState}
                onChange={taskPriorityChange}
              >
                <FormControlLabel
                  value="low"
                  control={<GreenRadio size="small" color="default"/>}
                  labelPlacement="start"
                  label={
                    <Typography style={{ fontSize: "0.8rem" }}>Low</Typography>
                  }
                />
                <FormControlLabel
                  style={{ marginLeft: "5.5rem" }}
                  value="medium"
                  control={<GreenRadio size="small" color="default"/>}
                  labelPlacement="start"
                  label={
                    <Typography style={{ fontSize: "0.8rem" }}>
                      Medium
                    </Typography>
                  }
                />
                <FormControlLabel
                  style={{ marginLeft: "6rem" }}
                  value="high"
                  control={<GreenRadio size="small" color="default"/>}
                  labelPlacement="start"
                  label={
                    <Typography style={{ fontSize: "0.8rem" }}>High</Typography>
                  }
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={6}>
              <Typography
                className={classes1.textLabel}
                variant="body2"
                component="span"
                style={{
                  padding: "0 0 0.5rem 0.5rem",
                  backgroundColor: "transparent"
                }}
              >
                Due Date
              </Typography>
              <br />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  autoOk
                  open={dateOpen}
                  onOpen={() => setDateOpen(true)}
                  onClose={() => setDateOpen(false)}
                  disableToolbar
                  value={state.date}
                  onChange={date => setState({ ...state, date })}
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
              <Typography
                className={classes1.textLabel}
                variant="body2"
                component="span"
                style={{
                  padding: "0 0 0.5rem 0.5rem",
                  backgroundColor: "transparent"
                }}
              >
                Due Time
              </Typography>
              <br />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                  autoOk
                  open={timeOpen}
                  onOpen={() => setTimeOpen(true)}
                  onClose={() => setTimeOpen(false)}
                  disableToolbar
                  ampm={false}
                  value={state.time}
                  onChange={time => setState({ ...state, time })}
                  variant="dialog"
                  TextFieldComponent={timeField}
                  DialogProps={{
                    transitionDuration: 500
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                style={{ marginLeft: "0.5rem" }}
                control={
                  <GreenCheckbox
                    checked={state.checked}
                    onChange={() =>
                      setState({ ...state, checked: !state.checked })
                    }
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
                  <Typography style={{ fontSize: "1.7vh" }}>
                    Recurrence Rule
                  </Typography>
                }
              />
            </Grid>
            <Collapse in={state.checked} timeout={"auto"} unmountOnExit>
              <Grid
                container
                spacing={2}
                style={{ width: "35rem", marginLeft: "0.5rem" }}
              >
                <Grid
                  item
                  xs={3}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
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
                    Repeat task every
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <InputBase
                    style={{ width: "4rem" }}
                    type="number"
                    value={taskDetails.reapetTaskNumber}
                    onChange={e =>
                      setTaskDetails({
                        ...taskDetails,
                        reapetTaskNumber: e.target.value
                      })
                    }
                    min="1"
                    className={classes1.threeInput}
                    inputProps={{
                      className: classes1.threeInputProps
                    }}
                  />
                </Grid>
                <Grid item xs={7} style={{ marginTop: "0.15rem" }}>
                  <CommonSelection
                    value={taskTimeType}
                    onChange={taksChangeTime}
                    arrata2={taskTimeArray}
                  />
                </Grid>
                <Grid
                  item
                  xs={3}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
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
                    End recurring task
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <FormControlLabel
                    style={{ marginLeft: 0 }}
                    labelPlacement="start"
                    value="other"
                    control={<GreenRadio size="small" color="default"/>}
                    label={
                      <Typography style={{ fontSize: "0.8rem" }}>
                        Never
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={3} />
                <Grid
                  item={4}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
                >
                  <Typography style={{ fontSize: "0.8rem" }}>
                    On a specified date
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                      autoOk
                      open={specifiedDateOpen}
                      onOpen={() => setSpecifiedDateOpen(true)}
                      onClose={() => setSpecifiedDateOpen(false)}
                      disableToolbar
                      value={state.date}
                      onChange={date =>
                        setState({ ...state, specifiedDate: date })
                      }
                      variant="dialog"
                      TextFieldComponent={dateField}
                      DialogProps={{
                        transitionDuration: 500
                      }}
                      format="dd/MM/yyyy"
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={3} />
                <Grid
                  item={5}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                  }}
                >
                  <Typography style={{ fontSize: "0.8rem" }}>
                    After certain number of occurrences
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <InputBase
                    style={{ width: "4rem" }}
                    type="number"
                    value={taskDetails.afterCertainNumber}
                    onChange={e =>
                      setTaskDetails({
                        ...taskDetails,
                        afterCertainNumber: e.target.value
                      })
                    }
                    min="1"
                    className={classes1.threeInput}
                    inputProps={{
                      className: classes1.threeInputProps
                    }}
                  />
                </Grid>
              </Grid>
            </Collapse>
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
                Check List
              </Typography>
              <br />
              <InputBase
                style={{ width: "100%", borderRadius: "0.8rem" }}
                placeholder="Add a task and press enter"
                value={taskDetails.addTaskAndPress}
                onChange={e =>
                  setTaskDetails({
                    ...taskDetails,
                    addTaskAndPress: e.target.value
                  })
                }
                className={classes1.threeInput}
                inputProps={{
                  className: classes1.threeInputProps
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
                marginBottom: "-4rem",
                marginTop: "0rem"
              }}
            >
              <Button
                variant={"contained"}
                style={{ marginLeft: "1.5rem", width: "12rem" ,marginBottom: '3.3rem'}}
                disableElevation={true}
                className={classes1.containedButton}
              >
                Add Task
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Dialog>
  );
};

export default AddTask;
