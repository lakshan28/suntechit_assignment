import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";
import { sort } from "../../actions";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class TrelloBoard extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };
  render() {
    // list pass to index.js as props
    const { lists, handleLead } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <ListContainer ref={provided.innerRef} {...provided.droppableProps}>
              {lists.map((list, index) => (
                <TrelloList
                  listID={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards}
                  index={index}
                  handleLead={handleLead}
                />
              ))}

              {provided.placeholder}
              <div style={{ width: "300px" }}>
                <TrelloActionButton list />
              </div>
            </ListContainer>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  //reducer index.js lists:listsReducer
  // state.lists is comming from reducer/index.js/ *lists*:listsReducer
  // this lists take from index.js provider / store
  lists: state.lists
});
// reducer connet to App
export default connect(mapStateToProps)(TrelloBoard);
