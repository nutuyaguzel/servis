export const SET_CATEGORiES = "SET_CATEGORiES";

export const setCategoryAction = () => {
  return {
    type: SET_CATEGORiES,
    payload
  };
};

const initialstate = {
  categories: [],
};

export default function categoryReducer(state = initialstate, action) {
  switch (action.type) {
    case SET_CATEGORiES:
      return {
        categories: action.payload,
      };

    default:
      return state;
  }
}
