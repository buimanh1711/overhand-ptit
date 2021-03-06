import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import UserPage from "./pages/user";
import MyDocumentPage from "./pages/my-document";
import DeliverPage from "./pages/deliver";
import LibraryPage from "./pages/library";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path='/users/'>
              <UserPage />
            </Route>
            <Route path='/mydocument/'>
              <MyDocumentPage />
            </Route>
            <Route path='/library/'>
              <LibraryPage />
            </Route>
            <Route path='/deliver/'>
              <DeliverPage />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
