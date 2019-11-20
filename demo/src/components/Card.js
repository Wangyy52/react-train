import React from "react";
import styles from "../style/card.css"

class Card extends React.Component {
  render() {
    const list = this.props.arr.map((item, key) => (
      <div
        key={key}
        className={styles.card}
      >
        <h3>#{key + 1}</h3>
        <img
          src={item.owner.avatar_url}
          alt={item.owner.login}
          className={styles.cardimg}
        />
        <h2 className={styles.cardh2}>
          <a href="#" style={{ color: "deeppink" }}>
            {item.owner.login}
          </a>
        </h2>
        <ul className={styles.cardul}>
          <li>
            <i
              className={["fa fa-user",styles.cardi]}
              aria-hidden="true"
            />
            <a href="#" style={{ color: "#333" }}>
              {item.owner.login}
            </a>
          </li>
          <li>
            <i
              className={["fa fa-star",styles.cardi]}
              aria-hidden="true"
            />
            <a href="#" style={{ color: "#333" }}>
              {item.stargazers_count} stars
            </a>
          </li>
          <li>
            <i
              className={["fa fa-code-fork",styles.cardi]}
              aria-hidden="true"
            />
            <a href="#" style={{ color: "#333" }}>
              {item.forks_count} forks
            </a>
          </li>
          <li>
            <i
              className={["fa fa-exclamation-triangle",styles.cardi]}
              aria-hidden="true"
            />
            <a href="#" style={{ color: "#333" }}>
              {item.open_issues_count} open issues
            </a>
          </li>
        </ul>
      </div>
    ));
    return (
      <div className={styles.cardmain}>
        {list}
      </div>
    );
  }
}
export default Card;
