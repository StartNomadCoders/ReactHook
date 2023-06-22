import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from 'component/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <h1>REACT Default Project</h1>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
