import { useSelector } from "react-redux";
import FinishedTasks from "./FinishedTasks";
import Taskitem from "./Taskitem";
import UnfinshedTasks from "./UnfinshedTasks";
function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  const tasksList = tasks.map((task) => <Taskitem task={task} key={task.id} />);
  return (
    <div className="App">
      <button type="button" class="btn btn-primary">
        Add New Task
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Task name</th>
            <th scope="col">Status</th>
            <th scope="col">Priority</th>
            <th scope="col">Deadline</th>
          </tr>
        </thead>
        <tbody>
          <FinishedTasks tasks={tasks} />
          <UnfinshedTasks tasks={tasks} />
        </tbody>
      </table>
    </div>
  );
}

export default TasksList;