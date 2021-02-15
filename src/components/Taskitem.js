import React from "react";
import { useState } from "react";
import DeleteButton from "./buttons/DeleteButton";
import { Route, Switch } from "react-router";
import { useDispatch } from "react-redux";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { updateTask } from "../store/actions";
import { High, Middle } from "../styles";
import { VscSaveAs } from "react-icons/vsc";

function Taskitem({ task }) {
  const [done, setDone] = useState(task.status);
  const [priority, setPriority] = useState(task.priority);
  const [Savebtn, setSavebtn] = useState(false);
  const dispatch = useDispatch();

  const statusIcon = done ? (
    <FaCheckCircle color="green" />
  ) : (
    <FaTimesCircle color="red" />
  );

  const toggleStatus = () => {
    setDone(!done);
    const statupdate = {
      ...task,
      ["status"]: !task.status,
    };
    dispatch(updateTask(statupdate));
  };

  const handleChange = (event) => {
    setPriority(event.target.value);
    setSavebtn(true);
  };

  const updatetask = () => {
    const updated = {
      ...task,
      ["priority"]: priority,
    };
    dispatch(updateTask(updated));
    setSavebtn(false);
  };

  return (
    <>
      <High>
        <td>{task.name}</td>
        <td onClick={toggleStatus}>{statusIcon}</td>
        <td>
          <select
            className="form-select"
            aria-label="Default select example"
            name="membership"
            onChange={handleChange}
            value={priority}
          >
            <option value="high">high</option>
            <option value="middle">middle</option>
            <option value="low">low</option>
          </select>
        </td>
        <td>{task.deadlineata}</td>
        <td>
          {" "}
          <DeleteButton taskId={task.id} />{" "}
        </td>
        <td>
          <VscSaveAs
            color="#688D81"
            size="1.4em"
            onClick={updatetask}
            hidden={Savebtn ? false : true}
          />
        </td>
      </High>
    </>
  );
}

export default Taskitem;
