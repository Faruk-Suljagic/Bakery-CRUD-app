import "./App.css";
import LoginButton from "./components/LoginButton";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/Products";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  return (
    <>
      <Router>
        {user ? null : <LoginButton />}
        {isAuthenticated ? (
          <Switch>
            <Route exact path="/" component={Products} />
          </Switch>
        ) : null}
      </Router>
    </>
  );
}

export default App;
