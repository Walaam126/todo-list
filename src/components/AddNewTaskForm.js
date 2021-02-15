import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addTask } from "../store/actions";
import { useState } from "react";
import { Createbtn } from "../styles";

function AddNewTaskForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [task, setTask] = useState({
    name: "",
    priority: "",
    deadlineata: "",
  });

  const handleChange = (event) =>
    setTask({ ...task, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(task));
    history.push("/");
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">
          Name:
          <input
            type="text"
            value={task.name}
            onChange={handleChange}
            name="name"
            className="form-control"
          />
        </label>
      </div>
      <div className="form-outline mb-3">
        <label className="col-form-label">Priority:</label>
        {"  "}
        <select
          className="form-select mx-auto"
          aria-label="Default select example"
          name="priority"
          onChange={handleChange}
          value={task.priority}
        >
          <option value="" selected>
            Select Priority
          </option>
          <option value="high">high</option>
          <option value="middle">middle</option>
          <option value="low">low</option>
        </select>
      </div>

      <label for="example-date-input" className="col-form-label">
        Deadline:
      </label>
      <div className="col-7 mx-auto">
        <input
          className="form-control"
          name="deadlineata"
          type="date"
          value={task.deadlineata}
          onChange={handleChange}
          id="example-date-input"
        />
      </div>
      <br></br>

      <Createbtn type="submit" className="btn">
        Create
      </Createbtn>
    </form>
  );
}
export default AddNewTaskForm;
