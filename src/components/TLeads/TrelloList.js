//export to  App.js
import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import MoreVertIcon from "@material-ui/icons/MoreVert";

import TrelloCard from "./TrelloCard";
import AddCardButton from "./AddCardButton";

// TrelloActionButton (props= list)

const ListContainer = styled.div`
  background-color: #f5f4f4;
  border-radius: 12px;
  width: 300px;
  height: 100%;
  padding: 8px;
  margin-right: 25px;
  box-shadow: 3px 3px 6px #00000029;
`;

const TrelloList = ({ title, cards, listID, index, handleLead }) => {
  return (
    <Draggable
      draggableId={String(listID)}
      index={index}
      isDragDisabled={
        listID === `list-${0}` ||
        listID === `list-${1}` ||
        listID === `list-${2}` ||
        listID === `list-${3}` ||
        listID === `list-${4}`
      }
    >
      {provided => (
        <ListContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          //  style={styles.container}
        >
          <Droppable droppableId={String(listID)}>
            {provided => (
              <div
                style={{ width: "325px" }}
                {...provided.droppableProps}
                ref={provided.innerRef}
                //  {...provided.dragHandleProps}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#707070"
                  }}
                >
                  <h4
                    style={{
                      margin: "1.5rem 1rem 1.5rem 1rem"
                    }}
                  >
                    {title}
                  </h4>
                  <MoreVertIcon
                    style={{
                      margin: "1.3rem 3rem 0rem 0rem",
                      cursor: "pointer"
                    }}
                  />
                </div>
                {listID === `list-${0}` ? (
                  <AddCardButton handleLead={handleLead} />
                ) : null}
                {cards.map((card, index) => (
                  <TrelloCard
                    key={card.id}
                    index={index}
                    text={card.text}
                    name={card.name}
                    textCard={card.textCard}
                    price={card.price}
                    id={card.id}
                  />
                ))}
                {provided.placeholder}

                {
                  // TrelloActionButton (props= list)
                  //    <TrelloActionButton listID={listID} />
                }
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
};

export default TrelloList;
