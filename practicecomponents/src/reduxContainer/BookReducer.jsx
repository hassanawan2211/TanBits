import { buy_book } from "./BookTypes";
const initialState = {
  NumberofBooks: 200,
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case buy_book:
        console.log("ïnitial state is: ",state);
      return {
        ...state,
        NumberofBooks: state.NumberofBooks - 1,
      };
    default:
      return state;
  }
};
export default BookReducer;
