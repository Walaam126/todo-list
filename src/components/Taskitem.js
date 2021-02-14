import React from 'react';
import { useState } from "react";
import DeleteButton  from "./buttons/DeleteButton";
import UpdetButton  from "./buttons/UpdetButton";
import { Route, Switch  } from "react-router";
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
    <tr >
      <td>{task.name}</td>
      <td onClick={toggleStatus}>{statusIcon}</td>
      <td>{task.priority}</td>
      <td>{task.deadlineata}</td>
      <td >  <DeleteButton taskId={task.id} /> </td>
      <td><UpdetButton/></td>
        
      
      
    </tr>
  );
}

export default Taskitem;
