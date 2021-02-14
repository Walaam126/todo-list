import Taskitem from "./Taskitem";
function UnfinshedTasks({ tasks }) {
  const unfinshtasksList = tasks
    .filter((task) => task.status === false)
    .map((task) => <Taskitem task={task} key={task.id} />);

  return <>{unfinshtasksList}</>;
}

export default UnfinshedTasks;
