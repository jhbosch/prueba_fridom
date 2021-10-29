import './App.css';
import Users from './screen/Users/Users';
import Details from './screen/Details/Details';
import Home from './screen/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserContextProvider from './contexts/UserContext';

function App() {
  return (
    

    <Router>
      <div>
      <UserContextProvider>
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </UserContextProvider>
      </div>
    </Router>
  );
}

export default App;
