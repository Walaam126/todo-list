import Taskitem from "./Taskitem";
import { useSelector } from "react-redux";
function FinishedTasks() {
  const tasks = useSelector((state) => state.tasks);
  const finshtasksList = tasks
    .filter((task) => task.status === true)
    .map((task) => <Taskitem task={task} key={task.id} />);
  const done = finshtasksList.filter((task) => task.status === true);

  return <>{finshtasksList}</>;
}

export default FinishedTasks;
