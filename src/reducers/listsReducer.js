import { CONSTANTS } from "../actions";

let listID = 5;
let cardID = 11;
const initialState = [
  {
    title: "Lead",
    id: `list-${0}`,
    cards: []
  },
  {
    title: "Form Created",
    id: `list-${1}`,
    cards: []
  },
  {
    title: "Form Sent",
    id: `list-${2}`,
    cards: []
  },
  {
    title: "Form Viwed",
    id: `list-${3}`,
    cards: []
  },
  {
    title: "Form Completed",
    id: `list-${4}`,
    cards: []
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
        //Acton/listActions
        //  type: CONSTANTS.ADD_LIST,
        // payload: title
      };
      listID += 1;
      return [...state, newList];

    //************************************** */

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        name: action.payload.name,
        text: action.payload.text,
        textCard: action.payload.textCard,
        price: action.payload.price,
        id: `card-${cardID}`
      };
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;
    }

    //************************************ */
    case CONSTANTS.DRAG_HAPPENED:
      const {
        // this coming from listAction
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type
      } = action.payload;
      const newState = [...state];

      //dragin list around
      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        console.log(newState);
        return newState;
      }

      //in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
        console.log("55555555555" + droppableIdEnd);
      }

      //in the other list
      if (droppableIdStart !== droppableIdEnd) {
        //find the list where drag happen
        const listStart = state.find(list => droppableIdStart === list.id);

        //pull out the card from this list

        const card = listStart.cards.splice(droppableIndexStart, 1);

        // find the list where drag ended
        const listEnd = state.find(list => droppableIdEnd === list.id);

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default listsReducer;
