import React from "react";

class BattleFooter extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{ textAlign: "center", fontSize: "30px", margin: "100px 0" }}
        >
          <h2 style={{ fontWeight: "normal", margin: "20px" }}>Players</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px"
          }}
        >
          <div style={{ width: "50%" }}>
            <p>Player One</p>
            <input
              style={{
                fontSize: "20px",
                margin: "5px 0",
                boxShadow: "0px 0px 10px #fafbfa inset",
                lineHeight: "35px",
                width: "65%"
              }}
              type="text"
              placeholder="github username"
            />
            <input
              style={{
                background: "#f2f2f2",
                color: "#c7c7c7",
                marginLeft: "10px",
                fontSize: "20px",
                lineHeight: "35px",
                padding: "0 35px",
                border: "0",
                borderRadius: "5px"
              }}
              type="button"
              value="SUBMIT"
            />
          </div>
          <div style={{ width: "50%" }}>
            <p>Player Two</p>
            <input
              style={{
                fontSize: "20px",
                margin: "5px 0",
                boxShadow: "0px 0px 10px #fafbfa inset",
                lineHeight: "35px",
                width: "65%"
              }}
              type="text"
              placeholder="github username"
            />
            <input
              style={{
                background: "#f2f2f2",
                color: "#c7c7c7",
                marginLeft: "10px",
                fontSize: "20px",
                lineHeight: "35px",
                padding: "0 35px",
                border: "0",
                borderRadius: "5px"
              }}
              type="button"
              value="SUBMIT"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default BattleFooter;
