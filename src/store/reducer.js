const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TASK":
      return {
        ...state,
        tasks: action.payload.task,
      };

    default:
      return state;
  }
};

export default reducer;
