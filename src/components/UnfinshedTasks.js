import Taskitem from "./Taskitem";
import { useSelector } from "react-redux";
function UnfinshedTasks() {
  const tasks = useSelector((state) => state.tasks);
  const unfinshtasksList = tasks
    .filter((task) => task.status === false)
    .map((task) => <Taskitem task={task} key={task.id} />);

  return <>{unfinshtasksList}</>;
}

export default UnfinshedTasks;
