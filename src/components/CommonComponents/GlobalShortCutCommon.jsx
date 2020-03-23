import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import NoteIcon from "@material-ui/icons/EventNoteRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AlarmIcon from "@material-ui/icons/AlarmRounded";
import AccountBox from "@material-ui/icons/AccountBox";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    zIndex: "1500"
  },
  golbalShortCutIcon: {
    fontSize: "3rem",
    color: "#4CB679",
    borderRadius: "50%",
    padding: "0.7rem",
    backgroundColor: "#ffffff",
    margin: "0.8rem 0rem -1rem 0rem",
    zIndex: "1"
  }
}));

export default function GlobalShortCutCommon(props) {
  const {
    golbalShortCut,
    globalLeadOpen,
    globalClientOpen,
    globalTaskOpen,
    globalFileNoteOpen
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <div
        className={
          golbalShortCut ? "gloableShortCut" : "gloableShortCutDisplayNone"
        }
      >
        <div onClick={globalLeadOpen} className="gloableShortCutTitle">
          <AccountBox className={classes.golbalShortCutIcon} />

          <div className="gloableShortCutTitleSecton">
            <p className="gloableShortCutTopic">Add Lead</p>
          </div>
        </div>

        <div onClick={globalClientOpen} className="gloableShortCutTitle">
          <AccountCircleIcon className={classes.golbalShortCutIcon} />

          <div className="gloableShortCutTitleSecton">
            <p className="gloableShortCutTopic">Add Client</p>
          </div>
        </div>

        <div onClick={globalTaskOpen} className="gloableShortCutTitle">
          <AlarmIcon className={classes.golbalShortCutIcon} />

          <div className="gloableShortCutTitleSecton">
            <p className="gloableShortCutTopic">Add Task</p>
          </div>
        </div>

        <div onClick={globalFileNoteOpen} className="gloableShortCutTitle">
          <NoteIcon className={classes.golbalShortCutIcon} />

          <div className="gloableShortCutTitleSecton">
            <p className="gloableShortCutTopic">Add File Note</p>
          </div>
        </div>
      </div>
    </div>
  );
}
