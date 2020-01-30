import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ResultCard from "./ResultCard";
import "./Results.css";

class Results extends Component {
  render() {
    return (
      <div className="resultsGrid">
        <ResultCard
          imgCard="/images/analytics.png"
          descriptionText="Here you can see and download the complete result"
          buttonText="Complete Result"
        />
        <ResultCard
          imgCard="/images/group.png"
          descriptionText="Here you can see the result by teams"
          buttonText="Teams"
        />
        <ResultCard
          imgCard="/images/einstein.png"
          descriptionText="Here you can see the result by skills"
          buttonText="Skills"
        />
      </div>
    );
  }
}

export default Results;
