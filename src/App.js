import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Pages";
import PokemonPage from "./Pages/Pokemon";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
        <Route
          exact
          path="/:id"
          render={(props) => <PokemonPage {...props} />}
        />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
