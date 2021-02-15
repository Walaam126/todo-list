import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import TasksList from "./components/TasksList";
import AddNewTaskForm from "./components/AddNewTaskForm";
import { GlobalStyle } from "./styles";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path={"/AddNewTask"}>
          <AddNewTaskForm />
        </Route>

        <Route path="/">
          <TasksList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
