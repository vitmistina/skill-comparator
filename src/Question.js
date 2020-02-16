import React from "react";
import QRCode from "qrcode";
import "./Question.css";

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
        <div>Categories: #csharp #programming #tech </div>
      </div>
    );
  }
}

export default Question;
