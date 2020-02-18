import React from "react";
import QRCode from "qrcode";
import "./Question.css";
import Categorie from "./Categorie";

import Button from "react-bootstrap/Button";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.qrCodeDataRef = React.createRef();
  }

  removeQuestion = () => {
    alert("Question to remove!");
  };

  render() {
    return (
      <div className="questionGrid">
        <div className="question">
          <h4>{this.props.question.question}</h4>
        </div>
        <div className="buttons">
          <Button variant="outline-primary">Edit</Button>
          <Button variant="outline-danger">Delete</Button>
        </div>
        <div className="categories">
          {Object.keys(this.props.question.categories).map(key => (
            <Categorie name={this.props.question.categories[key]} />
          ))}
        </div>
      </div>
    );
  }
}

export default Question;
