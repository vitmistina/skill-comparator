import React from "react";
import Question from "./Question";
import "./QuestionsMenu.css";

class QuestionsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.qrCodeDataRef = React.createRef();
  }

  state = {
    questions: [
      {
        id: 1,
        question: "Who is better at javascriptte?",
        categories: ["skills", "programming", "technical"]
      },
      {
        id: 2,
        question: "Who would you question about javaaaa?",
        categories: ["skills", "technical"]
      }
    ]
  };

  addQuestion = () => {
    this.props.history.push(`/questions/123`);
  };

  removeQuestion = () => {
    this.props.history.push(`/questions/123`);
  };

  render() {
    return (
      <div className="questionsMainGrid">
        <div className="questionsGrid">
          {Object.keys(this.state.questions).map(key => (
            <Question question={this.state.questions[key]} />
          ))}
        </div>
        <div className="newQuestionGrid"></div>
      </div>
    );
  }
}

export default QuestionsMenu;
