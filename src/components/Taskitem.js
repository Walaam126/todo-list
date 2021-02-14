function Taskitem({ task }) {
  console.log(task);
  return (
    <tr>
      <td>{task.name}</td>
      <td>{task.status == true ? "done" : "not done"}</td>
      <td>{task.priority}</td>
      <td>{task.deadlineata}</td>
    </tr>
  );
}

export default Taskitem;
