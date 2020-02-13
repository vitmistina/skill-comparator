import React, { Component } from "react";
import "./Categorie.css";

class Categorie extends Component {
  render() {
    let cat = Math.floor(Math.random() * 9) + 1;

    return (
      <span className="categorie">
        <span className="hashtag">#</span>
        <span className={"cat" + cat}>{this.props.name}</span>
      </span>
    );
  }
}

export default Categorie;
