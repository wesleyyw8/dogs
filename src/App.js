import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import DogsPage from "./dogs/DogsPage";
import FavoritesPage from "./favorites/FavoritesPage";

function App() {
  const activeStyle = { color: "#F15B2A" };
  return (
    <div className="app-container">
      <div className="header">
        <NavLink to="/" activeStyle={activeStyle} exact>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/favorites" activeStyle={activeStyle}>
          Favorites
        </NavLink>
      </div>
      <Switch>
        <Route exact path="/" component={DogsPage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </div>
  );
}

export default App;
