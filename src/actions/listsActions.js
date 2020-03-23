import { CONSTANTS } from "../actions";

export const addList = title => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title
    //payload = title= (state.text) type karana text eka
  };
};

// export to App.js
export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type
    }
  };
};
