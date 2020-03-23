//export to TrelloList (props= list)=>(Add another card)
//export to App.js (+Add another list)
import React, { Component } from "react";

//import Textarea from "react-textarea-autosize";
import { InputBase } from "@material-ui/core/";

import {
  Paper,
  Grid,
  Card,
  Typography,
  Button,
  CardContent
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import { connect } from "react-redux";
import { addList, addCard } from "../../actions";

class TrelloActionButton extends Component {
  state = {
    formOpen: false,
    text: ""
  };

  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  //********************************************************************** */
  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });
      //action called
      //addList coming from action/listAction
      dispatch(addList(text));
    }
    /*
export const addList = title => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title
    //payload = title= (state.text) type karana text eka
  };
};
*/

    return;
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });
      //action called
      //addList coming from action/cardAction
      dispatch(addCard(listID, text));
    }
  };

  renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? "Add List" : "Add another card";

    return (
      <Card
        onClick={this.openForm}
        style={{
          width: "280px",
          borderRadius: "0.8rem",
          backgroundColor: "#f5f4f4",
          height: "5rem"
        }}
      >
        <CardContent style={{ textAlign: "center", display: "flex" }}>
          <AddCircleOutlineIcon
            style={{
              fontSize: "2.5rem",
              color: "#959595",
              margin: "0.5rem 0.5rem 0rem 3rem"
            }}
          />
          <h4 style={{ opacity: "0.8" }}>{buttonText}</h4>
        </CardContent>
      </Card>
    );
  };

  renderForm = () => {
    const { list } = this.props;

    const placeholder = list
      ? "Enter list title...."
      : "Enter a title for this card ";

    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <div style={{ width: "300px" }}>
        <Card
          style={{
            minHeight: 80,
            minWidth: 272,
            padding: "6px 8px 2px"
          }}
        >
          <InputBase
            placeholder={placeholder}
            onBlur={this.closeForm}
            autoFocus
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: "none",
              width: "100%",
              overflow: "hidden",
              border: "none",
              outline: "none"
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
            variant="contained"
            style={{
              color: "white",
              backgroundColor: "#5aac44",
              width: "300px"
            }}
          >
            {buttonTitle}
          </Button>
          {
            // <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
          }
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center",
    width: 300
  }
};

export default connect()(TrelloActionButton);
