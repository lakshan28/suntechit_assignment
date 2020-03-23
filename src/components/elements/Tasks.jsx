import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MoreVert from "@material-ui/icons/MoreVertOutlined";
import AddClientDetaield from "../modals/AddClientDetaield";
import AddLeadDetaield from "../modals/AddLeadDetaild";
import FormDialog from "../ConfirmationBox/ConfirmationBox";

const useStyles = makeStyles({
  drawerPaper: {
    borderRadius: "1.5rem",
    padding: "2rem"
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
  archiveButton: {
    color: "#fff",
    textTransform: "none",
    backgroundColor: "#707070",
    borderRadius: "1.5rem",
    padding: "0.3rem 1.5rem 0.3rem 1.5rem",
    "&:hover": {
      backgroundColor: "#201E1E",
      color: "#fff"
    }
  },
  financialButton: {
    color: "#fff",
    textTransform: "none",
    backgroundColor: "#02D6B2",
    borderRadius: "1.5rem",
    padding: "0.3rem 1.5rem 0.3rem 1.5rem",
    "&:hover": {
      backgroundColor: "#03a388",
      color: "#fff"
    }
  },
  cancelButton: {
    color: "#000",
    textTransform: "none",
    backgroundColor: "#E6E6E6",
    borderRadius: "1.5rem",
    padding: "0.3rem 1.5rem 0.3rem 1.5rem",
    "&:hover": {
      backgroundColor: "#AB1010",
      color: "#000"
    }
  }
});

export default function Tasks({ classes }) {
  const classes2 = useStyles();
  const [conformationImageback, setConformationImageback] = React.useState(
    "archiveBack"
  );
  const [confirmationTitle, setConfirmationTitle] = React.useState("");
  const [confirmationContentText, setConfirmationContentText] = React.useState(
    ""
  );
  const [buttonAction, setbuttonAction] = React.useState("");
  const [open2, setOpen2] = React.useState(false);
  const [buttonStateClass, setbuttonStateClass] = React.useState(
    classes2.cancelButton
  );

  console.log(buttonStateClass);
  const handleClose = () => {
    setOpen2(false);
  };
  const handleClickOpen1 = () => {
    setOpen2(true);
    setConfirmationTitle("Are you sure you want to delete this client ?");
    setConfirmationContentText("This action cannot be undone.");
    setbuttonAction("Delete Client");
    setConformationImageback("deleteBack");
    setbuttonStateClass(classes2.deleteButton);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
    setConfirmationTitle("Are you sure you want to archive this client ?");
    setConfirmationContentText(
      "This client will no longer be an active client of your Financial Organization."
    );
    setbuttonAction("Archive Client");
    setConformationImageback("archiveBack");
    setbuttonStateClass(classes2.archiveButton);
  };
  const handleClickOpen3 = () => {
    setOpen2(true);
    setConfirmationTitle("Do you want to open this Financial Position ?");
    setConfirmationContentText(
      "All financial data displayed will now be shown with respect to this position."
    );
    setbuttonAction("Open");
    setConformationImageback("financialBack");
    setbuttonStateClass(classes2.financialButton);
  };
  // Add client state.
  const [anchorNote2, setAnchorNote2] = React.useState(null);
  const noteOpen2 = Boolean(anchorNote2);

  const [anchorNote, setAnchorNote] = React.useState(null);
  const noteOpen = Boolean(anchorNote);

  const [anchorNote3, setAnchorNote3] = React.useState(null);
  const noteOpen3 = Boolean(anchorNote3);
  /**
   * Add Note origin handler.
   * @param event
   */
  const handleNote = event => {
    setAnchorNote(event.currentTarget);
  };
  /**
   * Add client origin handler.
   * @param event
   */

  const noteClose2 = () => {
    setAnchorNote2(null);
  };
  const handleClient = event => {
    setAnchorNote2(event.currentTarget);
  };

  const noteClose3 = () => {
    setAnchorNote3(null);
  };
  const handleLead = event => {
    setAnchorNote3(event.currentTarget);
  };
  return (
    <div>
      <IconButton onClick={handleClickOpen1}>
        <MoreVert
          style={{ color: "white", width: "2rem", height: "2rem" }}
          elevation={23}
        />
      </IconButton>
      <IconButton onClick={handleClickOpen2}>
        <MoreVert
          style={{ color: "white", width: "2rem", height: "2rem" }}
          elevation={23}
        />
      </IconButton>
      <IconButton onClick={handleClickOpen3}>
        <MoreVert
          style={{ color: "white", width: "2rem", height: "2rem" }}
          elevation={23}
        />
      </IconButton>
      <IconButton onClick={handleClient}>
        <p>Add Client Detailed</p>
      </IconButton>
      <IconButton onClick={handleLead}>
        <p>Add Lead Detailed</p>
      </IconButton>
      <FormDialog
        open2={open2}
        handleClose={handleClose}
        confirmationTitle={confirmationTitle}
        confirmationContentText={confirmationContentText}
        conformationImageback={conformationImageback}
        buttonAction={buttonAction}
        buttonStateClass={buttonStateClass}
      />
      <AddClientDetaield
        noteOpen2={noteOpen2}
        anchorNote2={anchorNote2}
        classes={classes}
        noteClose2={noteClose2}
      />
      <AddLeadDetaield
        leadOpen={noteOpen3}
        anchorLead={anchorNote3}
        classes={classes}
        leadClose={noteClose3}
      />
    </div>
  );
}
