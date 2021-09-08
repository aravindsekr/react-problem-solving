import "./styles.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import routes from "./routes";
import Display from "./display";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              {routes.map(({ path, displayName }) => {
                return (
                  <li>
                    <Link to={`/${path}`}>{displayName}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Switch>
            {routes.map(
              ({ path, displayName, invokeFn, input, inputDisplayValue }) => {
                return (
                  <Route path={`/${path}`}>
                    <Display
                      displayName={displayName}
                      invokeFn={invokeFn}
                      inputToFn={input}
                      inputDisplayValue={inputDisplayValue}
                    />
                  </Route>
                );
              }
            )}
          </Switch>
        </div>
      </Router>
    </div>
  );
}
