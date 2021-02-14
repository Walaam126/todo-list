import Taskitem from "./Taskitem";
function FinishedTasks({ tasks }) {
  const finshtasksList = tasks
    .filter((task) => task.status === true)
    .map((task) => <Taskitem task={task} key={task.id} />);
  return <>{finshtasksList}</>;
}

export default FinishedTasks;
