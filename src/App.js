import "./App.css";
import LoginButton from "./components/LoginButton";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Products from "./components/Products";

function App() {
  const { user } = useAuth0();

  return (
    <>
      <Router>
        {user ? null : <LoginButton />}
        {user ? (
          <Switch>
            <Route path="/" component={Products} />
          </Switch>
        ) : null}
      </Router>
    </>
  );
}

export default App;
