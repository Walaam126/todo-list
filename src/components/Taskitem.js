import React from "react";
import { useState } from "react";
import DeleteButton from "./buttons/DeleteButton";
import { Route, Switch } from "react-router";
import { useDispatch } from "react-redux";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { updateTask } from "../store/actions";
import { High, Middle } from "../styles";
import { VscSaveAs } from "react-icons/vsc";
import moment from 'moment';

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
  let x = new Date(moment());
  let y = new Date(task.deadlineata);
  let cun = false;
  
  if(y<x){
    cun =true;
  };
  let  eventdate = moment(task.deadlineata);
  let  todaysdate = moment();
   eventdate.diff(todaysdate, 'days');

  //moment().diff(task.deadlineata, 'days');
  let days_left =eventdate.diff(todaysdate, 'days');
  if (days_left<0)
  days_left ="😡";

  

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
            disabled={cun}
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
        <td>
        {days_left}
        </td>
      </High>
    </>
  );
}

export default Taskitem;
