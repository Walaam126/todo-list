import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addTask } from "../store/actions";
import { useState } from "react";

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
    <form className="container" onSubmit={handleSubmit}>
      <h1>Create Task</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={task.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      <div className="form-outline mb-4">
        <label className="form-label">priority:</label>
        {"  "}
        <select
          className="form-select"
          aria-label="Default select example"
          name="priority"
          onChange={handleChange}
          value={task.priority}
        >
          <option value="" selected>
            Select priority
          </option>
          <option value="high">high</option>
          <option value="middle">middle</option>
          <option value="low">low</option>
        </select>
      </div>

      <div class="form-group row">
        <label for="example-date-input" class="col-2 col-form-label">
          deadlineata
        </label>
        <div class="col-10">
          <input
            class="form-control"
            name="deadlineata"
            type="date"
            value={task.deadlineata}
            onChange={handleChange}
            id="example-date-input"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-info float-right">
        Create
      </button>
    </form>
  );
}
export default AddNewTaskForm;
