import { useSelector } from "react-redux";
import FinishedTasks from "./FinishedTasks";
import Taskitem from "./Taskitem";
import UnfinshedTasks from "./UnfinshedTasks";
import { Link, NavLink } from "react-router-dom";
import AddNewTaskForm from "./AddNewTaskForm";
function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  const TaskList = tasks.map((task) => <Taskitem task={task} key={task.id} />);
  return (
    <div className="App">
      <h1 className="mt-5">My To Do List</h1>
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          <div className="col-8">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Task</th>
                  <th scope="col">Done?</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Deadline</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Update</th>
                </tr>
              </thead>
              <tbody>
                <UnfinshedTasks /> <FinishedTasks />
              </tbody>
            </table>
          </div>

          <div className="col-4">
            <AddNewTaskForm />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksList;
