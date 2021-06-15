import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList"
import LoginForm from "./components/LoginForm"
import './App.css';
import Friend from "./components/Friend";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <PrivateRoute path="/friends" component={FriendsList}/>
        <PrivateRoute path="/friends/id" component={Friend}/>
      </Switch>
    </Router>
  );
}

export default App;
