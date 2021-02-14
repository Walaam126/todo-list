import { DELETE_TASK } from "./actions";

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

    case "ADD_TASK":
      const newTask = action.payload.newTask;
      return {
        ...state,
        tasks: [...state.tasks, newTask],
    };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload.taskId
        ),
    };

    default:
      return state;
  }
};

export default reducer;
