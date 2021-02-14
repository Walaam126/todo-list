import axios from "axios";

export const ADD_TASK = "ADD_TASK";
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

export const addTask = (newTask) => {
  // console.log(newTask);
  return async (dispatch) => {
    try {
      await axios.post(`http://localhost:8000/todo`, newTask);
      dispatch({
        type: ADD_TASK,
        payload: { newTask },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteTask = (taskId) => {
  return async (dispatch)=> {
    try{
      await axios.delete(`http://localhost:8000/todo/${taskId}`);
      dispatch({
        type:DELETE_TASK,
        payload:{taskId:taskId},
      });
    }catch(error){
      console.error(error);
    }
  }
};
