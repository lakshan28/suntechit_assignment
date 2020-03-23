//export to TrelloList
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Typography,
  CardContent,
  Button,
  CardActions
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem"
  },
  subCard: {
    color: "red",
    backgroundColor: "#EAFAF1"
  },
  title: {
    // color: "#707070",
    fontSize: "1rem"
  },
  cardTask: {
    backgroundColor: "#FFFFFF",
    width: "280px",
    margin: "1rem 0rem 0rem 0.2rem",
    borderRadius: "0.5rem"
  },
  cardName: {
    color: "#707070",
    fontWeight: "550"
  },
  cardEmail: {
    fontSize: "0.8rem",
    color: "#707070"
  },
  cardButton: {
    backgroundColor: "#30726C",
    fontSize: "0.6rem",
    color: "#fff"
  },
  cardPrice: {
    color: "#707070",
    fontWeight: "550"
  }
});

const TrelloCard = ({ text, name, id, index, textCard, price }) => {
  const classes = useStyles();
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          style={{ marginBottom: "8px" }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={classes.cardTask}>
            <CardContent>
              <Typography className={classes.cardName}>{name}</Typography>
              <Typography className={classes.cardEmail}>{text}</Typography>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "-0.8rem"
              }}
            >
              <Button className={classes.cardButton}>{textCard}</Button>
              <Typography className={classes.cardPrice}>$ {price}</Typography>
            </CardActions>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
