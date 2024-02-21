import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Searchpage from './Components/Searchpage';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/search">
            <Searchpage />
          </Route> 
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
