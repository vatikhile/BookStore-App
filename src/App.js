import Content from "../src/Component/Content/Content"
import Registration from "../src/Component/Registration/Registartion"
import Login from "../src/Component/Login/Login"
import Home from "../src/Component/Home/HomePage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
function App() {

  const authentication = {
    isLoggedIN: false,

    getLogInStatus() {
      if (localStorage.userToken !== undefined) {
        this.isLoggedIN = true;
      }
      else {
        this.isLoggedIN = false;
      }
      return this.isLoggedIN;
    }

  }

  function SecuredRoute(props) {
    return (
      <Route path={props.path} render={data => authentication.getLogInStatus() ? (<props.component {...data}></props.component>) : (<Redirect to={{ pathname: "/login" }}></Redirect>)}>
      </Route>)
  }

  return (
    <Router>
      <Switch>
        <Redirect exact path="/" to="/registration" />
        <SecuredRoute exact path="/Home" component={Home} />
        <Route path="/" component={Content} />
        <Route path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />



      </Switch>
    </Router>
  );
}

export default App;
