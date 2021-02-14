import { useSelector } from "react-redux";
import FinishedTasks from "./FinishedTasks";
import Taskitem from "./Taskitem";
import UnfinshedTasks from "./UnfinshedTasks";
import { Link, NavLink } from "react-router-dom";
function TasksList() {
  const tasks = useSelector((state) => state.tasks);

  

 
  
  return (
    <div className="App">
      <NavLink to="/AddNewTask">
        <button type="button" class="btn btn-primary">
          Add New Task
        </button>
      </NavLink>
      <h1>Task</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Task name</th>
            <th scope="col">Status</th>
            <th scope="col">Priority</th>
            <th scope="col">Deadline</th>
            <th scope="col">Delete</th>
            <th scope="col">Updet</th>

          </tr>
        </thead>
        <tbody><UnfinshedTasks/> <FinishedTasks/> </tbody>
      </table>
      
      
    </div>
  );
}

export default TasksList;
