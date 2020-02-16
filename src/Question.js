import React from "react";
import QRCode from "qrcode";
import "./Question.css";
import Categorie from "./Categorie";

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
      <div className="question1">
        <div>Question: {this.props.question.question}</div>
        <div>
          Categories:
          {Object.keys(this.props.question.categories).map(key => (
            <Categorie name={this.props.question.categories[key]} />
          ))}
        </div>
      </div>
    );
  }
}

export default Question;
