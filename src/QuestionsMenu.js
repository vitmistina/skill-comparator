import React from "react";
import Question from "./Question";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "./QuestionsMenu.css";
import uuidv1 from "uuid";
import DummyData from "./DummyData";

class QuestionsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.qrCodeDataRef = React.createRef();
  }

  state = {
    questions: {}
  };

  componentDidMount() {
    const dummyData = new DummyData();
    const allQuestions = dummyData.getAllQuestions();

    const stateData = { ...this.state.questions };

    this.setState({ questions: allQuestions });
  }

  addQuestion = () => {
    this.props.history.push(`/questions/123`);
  };

  removeQuestion = () => {
    this.props.history.push(`/questions/123`);
  };

  startComparison = () => {
    const newId = uuidv1();
    this.props.history.push("/questions/" + newId);
  };

  render() {
    return (
      <div className="questionsMainGrid">
        <div className="questionsGrid">
          {Object.keys(this.state.questions).map(key => (
            <Question question={this.state.questions[key]} />
          ))}
        </div>
        <div className="newQuestionGrid">
          <Form>
            <Form.Group controlId="formNewQUestion">
              <Form.Label>Question</Form.Label>
              <Form.Control
                type="text"
                placeholder="Who makes the best hot dog?"
              />
              <Form.Text className="text-muted">
                Try to be clear and straight to the point.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formNewQUestion">
              <Form.Label>Categories</Form.Label>
              <Form.Control type="text" placeholder="food, bread, sausage" />
              <Form.Text className="text-muted">
                The categories are important to classify the answers after the
                comparison
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </div>
        <div className="startComparisson">
          <Button onClick={this.startComparison} variant="outline-success">
            Start comparison!
          </Button>
        </div>
      </div>
    );
  }
}

export default QuestionsMenu;
