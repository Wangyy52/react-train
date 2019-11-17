import React from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
// import Header from './components/Header';
import Content from "./components/Content";
// eslint-disable-next-line no-unused-vars
import Battle from "./components/Battle";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ul style={{ display: "flex", fontWeight: "700" }}>
              {/* eslint-disable-next-line camelcase,no-undef */}
              <li
                style={{
                  paddingRight: "10px",
                  cursor: "pointer",
                  color: "rgb(187, 46, 31)"
                }}
              >
                <NavLink activeClassName="active" to="/">
                  Popular
                </NavLink>
              </li>
              {/* eslint-disable-next-line camelcase */}
              <li style={{ cursor: "pointer" }}>
                <NavLink activeClassName="active" to="/Battle">
                  Battle
                </NavLink>
              </li>
            </ul>
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji,react/button-has-type */}
            <button
              style={{
                border: "none",
                background: "transparent",
                fontSize: "30px"
              }}
            >
              🔦
            </button>
          </div>
          <div>
            <Route path="/" exact component={Content} />
            <Route path="/Battle" exact component={Battle} />
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
