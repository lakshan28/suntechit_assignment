import { CONSTANTS } from "../actions";

export const addCard = (name, text, textCard, price, listID) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { name, text, textCard, price, listID }
    //payload = text= (state.text) type karana text eka
  };
};
