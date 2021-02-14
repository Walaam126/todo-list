import axios from "axios";

export const FETCH_TASK = "FETCH_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const CREATE_TASK = "CREATE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8000/todo");
      dispatch({
        type: FETCH_TASK,
        payload: { task: response.data },
      });
    } catch (error) {
      console.log("🚀 ~ file: action.js ~ line 17 ~ return ~ error", error);
    }
  };
};
