import navTypes from "./type";

const initialState = {
  responsive: false,
};
const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case navTypes.IS_RESPONSIVE:
      return {
          ...state,
          responsive:!state.responsive
      };

    default:
      return state;
  }
};
 export default navReducer