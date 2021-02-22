import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useEffect} from 'react';

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

const useDocumentTitle = (newTitle)=>{
  useEffect(()=>{
    let oldDocumentTitle = document.title;
    document.title = newTitle;
    return ()=>{
      document.title = oldDocumentTitle;
    }
  }, [])
}

const My = ()=>{

  useDocumentTitle('个人信息')

  return (
    <div>My</div>
  )
}
const Project = ()=>{

  useDocumentTitle('项目')

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
