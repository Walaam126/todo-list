import Taskitem from "./Taskitem";
import { useSelector } from "react-redux";
function UnfinshedTasks() {
  const tasks = useSelector((state) => state.tasks);
  const unfinshtasksList = tasks
    .filter((task) => task.status === false)
    .map((task) => <Taskitem task={task} key={task.id} />);
  console.log(
    "🚀 ~ file: UnfinshedTasks.js ~ line 6 ~ UnfinshedTasks ~ unfinshtasksList",
    unfinshtasksList
  );

  return <>{unfinshtasksList}</>;
}

export default UnfinshedTasks;
