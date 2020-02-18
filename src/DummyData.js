export default class DummyData {
  getAllQuestions = () => {
    let questions = [
      {
        id: 1,
        question: "Who is better at javascriptte?",
        categories: ["skills", "programming", "technical"]
      },
      {
        id: 2,
        question: "Who would you ask a question about data?",
        categories: ["skills", "data", "technical"]
      },
      {
        id: 3,
        question:
          "In a arena, who writes the fastest C# algorithm for sorting wins. Who you bet for?",
        categories: ["skills", "programming", "technical"]
      },
      {
        id: 4,
        question: "Who facilitates better?",
        categories: ["domains", "meetings", "facilitation", "scrum"]
      },
      {
        id: 5,
        question: "Who would you ask for help for managment in a new project?",
        categories: ["domains", "managment"]
      }
    ];

    return questions;
  };

  getRandomQuestion = () => {
    let questions = this.getAllQuestions();

    return questions[this.randomNumber(questions.length)];
  };

  randomNumber = limit => {
    return Math.floor(Math.random() * limit);
  };

  getCategories = () => {
    const categories = this.getAllQuestions().reduce(
      (categories, question) => [...categories, ...question.categories],
      []
    );

    return Array.from(new Set(categories));
  };
}
