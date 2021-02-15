import Taskitem from "./Taskitem";
import { useSelector } from "react-redux";
function FinishedTasks() {
  const tasks = useSelector((state) =>
    state.tasks.filter((task) => task.status)
  );
  console.log(tasks);
  const finshtasksList = tasks.map((task) => (
    <Taskitem task={task} key={task.id} />
  ));
  // .filter((task) => task.status)

  const done = finshtasksList.filter((task) => task.status === true);

  return <>{finshtasksList}</>;
}

export default FinishedTasks;
