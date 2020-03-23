import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grow
} from "@material-ui/core";

import deleteConfirmationBox from "../../img/deleteConfirmationBox.svg";
import archiveConfirmation from "../../img/archiveConfirmation.svg";
import financialConfirm from "../../img/financialConfirm.svg";

const confrmationBackImage = {
  deleteBack: deleteConfirmationBox,
  archiveBack: archiveConfirmation,
  financialBack: financialConfirm
};

const useStyles = makeStyles({
  drawerPaper: {
    borderRadius: "1.5rem",
    padding: "2rem",

    overflow: "hidden"
  },

  cancelButton: {
    color: "#000",
    textTransform: "none",
    backgroundColor: "#E6E6E6",
    borderRadius: "1.5rem",
    padding: "0.3rem 1.5rem 0.3rem 1.5rem",
    "&:hover": {
      backgroundColor: "#00000029",
      color: "#000"
    }
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow direction="up" ref={ref} {...props} />;
});

export default function FormDialog(props) {
  const {
    open2,
    handleClose,
    conformationImageback,
    confirmationTitle,
    confirmationContentText,
    buttonAction,
    buttonStateClass
  } = props;
  const classes = useStyles();
  const conformationImage = confrmationBackImage[conformationImageback];

  return (
    <div>
      <Dialog
        open={open2}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
        classes={{ paper: classes.drawerPaper }}
        style={{ zIndex: 1800, position: "absolute" }}
      >
        <img
          style={{
            width: "40.51rem",
            marginTop: "-2.3rem",
            marginLeft: "-3rem",
            marginRight: "-2rem"
          }}
          src={conformationImage}
          alt=" delete conformation box"
        />
        <DialogTitle id="form-dialog-title">{confirmationTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{confirmationContentText}</DialogContentText>
        </DialogContent>
        <DialogActions style={{ margin: "1rem 0rem 0rem 0rem" }}>
          <Button className={buttonStateClass} onClick={handleClose}>
            {buttonAction}
          </Button>
          <Button className={classes.cancelButton} onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
