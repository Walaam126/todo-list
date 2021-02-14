import React from 'react';
import { useState } from "react";
import DeleteButton from "./buttons/DeleteButton";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
function Taskitem({ task }) {
  const [done, setDone] = useState(task.status);

  const statusIcon = done ? (
    <FaCheckCircle color="green" />
  ) : (
    <FaTimesCircle color="red" />
  );

  const toggleStatus = () => setDone(!done);

  return (
    <tr>
      <td>{task.name}</td>
      <td onClick={toggleStatus}>{statusIcon}</td>
      <td>{task.priority}</td>
      <td>{task.deadlineata}</td>
      <td>  <DeleteButton taskId={task.id} /> </td>
    </tr>
  );
}

export default Taskitem;
