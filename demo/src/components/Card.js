import React from "react";
// import "font-awesome-sprockets";
// import "font-awesome";
class Card extends React.Component {
  render() {
    const list = this.props.arr.map((item, key) => (
      <div
        key={key}
        style={{
          width: "250px",
          padding: "20px",
          backgroundColor: "#ebebeb",
          textAlign: "center",
          margin: "10px 0"
        }}
      >
        <h3>#{key + 1}</h3>
        <img
          src={item.owner.avatar_url}
          alt={item.owner.login}
          style={{ width: "150px", height: "150px", margin: "0 auto" }}
        />
        <h2
          style={{ fontSize: "1.5em", lineHeight: "40px", fontWeight: "bold" }}
        >
          <a href="#" style={{ color: "deeppink" }}>
            {item.owner.login}
          </a>
        </h2>
        <ul style={{ textAlign: "left", lineHeight: "35px" }}>
          <li>
            <i
              className="fa fa-user"
              aria-hidden="true"
              style={{
                fontSize: "23px",
                color: "#ffc06d",
                width: "42px",
                height: "25px",
                textAlign: "center"
              }}
            />
            <a href="#" style={{ color: "#333" }}>
              {item.owner.login}
            </a>
          </li>
          <li>
            <i
              className="fa fa-star"
              aria-hidden="true"
              style={{
                fontSize: "23px",
                color: "#ffd900",
                width: "42px",
                height: "25px",
                textAlign: "center"
              }}
            />
            <a href="#" style={{ color: "#333" }}>
              {item.stargazers_count} stars
            </a>
          </li>
          <li>
            <i
              className="fa fa-code-fork"
              aria-hidden="true"
              style={{
                fontSize: "23px",
                color: "#91c9f5",
                width: "42px",
                height: "25px",
                textAlign: "center"
              }}
            />
            <a href="#" style={{ color: "#333" }}>
              {item.forks_count} forks
            </a>
          </li>
          <li>
            <i
              className="fa fa-exclamation-triangle"
              aria-hidden="true"
              style={{
                fontSize: "23px",
                color: "#f38991",
                width: "42px",
                height: "25px",
                textAlign: "center"
              }}
            />
            <a href="#" style={{ color: "#333" }}>
              {item.open_issues_count} open issues
            </a>
          </li>
        </ul>
      </div>
    ));
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        {list}
      </div>
    );
  }
}
export default Card;
