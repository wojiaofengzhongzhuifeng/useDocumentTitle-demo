import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/my">my</Link>
            </li>
            <li>
              <Link to="/project">project</Link>
            </li>
            <li>
              <Link to="/todo">todo</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/my">
              <My />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

const My = ()=>{
  return (
    <div>My</div>
  )
}
const Project = ()=>{
  return (
    <div>project</div>
  )
}
const Todo = ()=>{
  return (
    <div>Todo</div>
  )
}

export default App;
