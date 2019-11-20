import React from "react";
import ReactDOM from "react-dom";
import './style/index.css';
import 'font-awesome/css/font-awesome.min.css'
import { Switch,Link,Route,HashRouter,Redirect } from "react-router-dom";
import Content from "./components/Content";
import Battle from "./components/Battle";
import BattleCard from "./components/BattleCard";

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
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
                <Link activeClassName="active" to="/">
                  Popular
                </Link>
              </li>
              {/* eslint-disable-next-line camelcase */}
              <li style={{ cursor: "pointer" }}>
                <Link activeClassName="active" to="/Battle">
                  Battle
                </Link>
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
          <Switch>
            <Route path="/" exact component={Content} />
            <Route path="/Battle" exact component={Battle} />
            <Route path="/Battle/card" exact component={BattleCard} />
            <Redirect to="/" />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
