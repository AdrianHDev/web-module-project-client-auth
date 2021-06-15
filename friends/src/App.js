import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList"
import LoginForm from "./components/LoginForm"
import Friend from "./components/Friend";
import AddFriend from "./components/AddFriend";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <PrivateRoute exact path="/friends" component={FriendsList}/>
        <PrivateRoute path="/friends/:id" component={Friend}/>
        <PrivateRoute path="/addFriend" component={AddFriend} />
      </Switch>
    </Router>
  );
}

export default App;
