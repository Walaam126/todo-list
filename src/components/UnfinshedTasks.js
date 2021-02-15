import Taskitem from "./Taskitem";
import { useSelector } from "react-redux";
function UnfinshedTasks() {
  const tasks = useSelector((state) =>
    state.tasks.filter((task) => !task.status)
  );
  const unfinshtasksList = tasks.map((task) => (
    <Taskitem task={task} key={task.id} />
  ));

  return <>{unfinshtasksList}</>;
}

export default UnfinshedTasks;
