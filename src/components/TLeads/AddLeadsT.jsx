import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Card, Typography } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TrelloBoard from "./TrelloBoard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "absolute",

    [theme.breakpoints.up(1400)]: {
      marginLeft: "-8rem"
    }
  },
  addLeadPaper: {
    width: "60rem",

    backgroundColor: "#FFFFFF",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",

    marginTop: "3rem",
    [theme.breakpoints.up(1400)]: {
      width: "92rem"
    }
  },
  trelloboard: {
    overflow: "scroll",
    height: "50rem",
    margin: "1rem"
  },
  addLeadPaperTitle: {
    textAlign: "right",
    font: "Bold 25px/33px Nirmala UI",
    color: " #707070",
    margin: "2rem 2rem 2rem 2rem"
  },
  addLeadPaperTitleInsideLead: {
    textAlign: "right",
    font: "Bold 25px/33px Nirmala UI",
    color: " #707070",
    margin: "1rem 1rem 1rem 1rem"
  },

  addLeadCard: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    height: "10rem",
    backgroundColor: "#F5F4F4",
    marginTop: "2rem",
    borderRadius: "1rem"
  },
  addLeadCardAddButtonContent: {
    width: "90%",
    height: "15rem",
    backgroundColor: "#F5F4F4",
    marginTop: "1rem",
    borderRadius: "1rem",
    margin: " 4rem",

    textAlign: "center"
  },
  addLeadCardAddButton: {
    marginLeft: "2rem",
    width: "95%",
    borderRadius: "1rem"
  }
}));

function AddLeadsT(props) {
  const { handleLead } = props;
  const classes = useStyles();
  const trelloborad = (
    <div>
      <TrelloBoard handleLead={handleLead} />
    </div>
  );

  // visibel trlloboard
  const [showTrello, setShowTrello] = React.useState(true);

  React.useEffect(() => {
    if (
      props.lists[0].cards.length > 0 ||
      props.lists[1].cards.length > 0 ||
      props.lists[2].cards.length > 0 ||
      props.lists[3].cards.length > 0 ||
      props.lists[4].cards.length > 0 ||
      props.lists.length > 4
    ) {
      setShowTrello(false);
    } else {
      setShowTrello(true);
    }
  }, [props.lists]);

  const addLeadBord = (
    <Card className={classes.addLeadCardAddButtonContent}>
      <div className={classes.addLeadPaperTitleInsideLead}>
        <Typography style={{ float: "left", fontSize: "1rem" }}>
          Leads
        </Typography>
        <MoreVertIcon style={{ fontSize: "1.5rem", cursor: "pointer" }} />
      </div>
      <Card className={classes.addLeadCardAddButton}>
        <AddCircleOutlineIcon
          style={{
            fontSize: "4rem",
            color: "#707070",
            marginTop: " 0.5rem",

            cursor: "pointer"
          }}
          onClick={handleLead}
        />
        <Typography style={{ fontSize: "1rem", marginBottom: "1rem" }}>
          Add a Lead to get Started
        </Typography>
      </Card>
    </Card>
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.addLeadPaper}>
            <div className={classes.addLeadPaperTitle}>
              <Typography style={{ float: "left", fontSize: "1.5rem" }}>
                Leads
              </Typography>
              <SearchIcon style={{ fontSize: "1.5rem", cursor: "pointer" }} />
              <FilterListIcon
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
              />
            </div>
            <div className={classes.trelloboard}>
              {showTrello ? addLeadBord : trelloborad}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(AddLeadsT);
