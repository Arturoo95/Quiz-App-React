import { useState } from "react";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const questions = [
    {
      questionText: "What is the capital of Japan?",
      answerOptions: [
        { answerText: "A) Beijing", isCorrect: false },
        { answerText: "B) Tokyo", isCorrect: true },
        { answerText: "C) Seoul", isCorrect: false },
        { answerText: "D) Bangkok", isCorrect: false },
      ],
    },
    {
      questionText: 'Who wrote "To Kill a Mockingbird"?',
      answerOptions: [
        { answerText: "A) J.K. Rowling", isCorrect: false },
        { answerText: "B) Harper Lee", isCorrect: true },
        { answerText: "C) Stephen King", isCorrect: false },
        { answerText: "D) Ernest Hemingway", isCorrect: false },
      ],
    },
    {
      questionText: "Which planet is known as the Red Planet?",
      answerOptions: [
        { answerText: "A) Venus", isCorrect: false },
        { answerText: "B) Mars", isCorrect: true },
        { answerText: "C) Jupiter", isCorrect: false },
        { answerText: "D) Saturn", isCorrect: false },
      ],
    },
    {
      questionText: "Who painted the Mona Lisa?",
      answerOptions: [
        { answerText: "A) Vincent van Gogh", isCorrect: false },
        { answerText: "B) Leonardo da Vinci", isCorrect: true },
        { answerText: "C) Pablo Picasso", isCorrect: false },
        { answerText: "D) Michelangelo", isCorrect: false },
      ],
    },
    {
      questionText: "What is the chemical symbol for water?",
      answerOptions: [
        { answerText: "A) O", isCorrect: false },
        { answerText: "B) W", isCorrect: false },
        { answerText: "C) H2O", isCorrect: true },
        { answerText: "D) H", isCorrect: false },
      ],
    },
    {
      questionText: "Who was the first person to step on the Moon?",
      answerOptions: [
        { answerText: "A) Neil Armstrong", isCorrect: true },
        { answerText: "B) Buzz Aldrin", isCorrect: false },
        { answerText: "C) Yuri Gagarin", isCorrect: false },
        { answerText: "D) John Glenn", isCorrect: false },
      ],
    },
    {
      questionText: "Which country is famous for the kangaroo?",
      answerOptions: [
        { answerText: "A) Brazil", isCorrect: false },
        { answerText: "B) Australia", isCorrect: true },
        { answerText: "C) Canada", isCorrect: false },
        { answerText: "D) South Africa", isCorrect: false },
      ],
    },
    {
      questionText: "Who developed the theory of relativity?",
      answerOptions: [
        { answerText: "A) Isaac Newton", isCorrect: false },
        { answerText: "B) Albert Einstein", isCorrect: true },
        { answerText: "C) Galileo Galilei", isCorrect: false },
        { answerText: "D) Nikola Tesla", isCorrect: false },
      ],
    },
    {
      questionText: "Which continent is the largest by land area?",
      answerOptions: [
        { answerText: "A) Europe", isCorrect: false },
        { answerText: "B) Asia", isCorrect: true },
        { answerText: "C) Africa", isCorrect: false },
        { answerText: "D) South America", isCorrect: false },
      ],
    },
    {
      questionText: "Who is credited with inventing the World Wide Web?",
      answerOptions: [
        { answerText: "A) Bill Gates", isCorrect: false },
        { answerText: "B) Tim Berners-Lee", isCorrect: true },
        { answerText: "C) Steve Jobs", isCorrect: false },
        { answerText: "D) Mark Zuckerberg", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setShowScore(currentQuestion === questions.length - 1);
  };

  const questionCountClassName = "question-count";
  const questionTextClassName = "question-text";
  const answerButtonClassName = "answer-button";
  const scoreSectionClassName = "score-section";
  const rightAnswersClassName = "right-answers";
  const wrongAnswersClassName = "wrong-answers";
  const messagesClassName = "messages";
  const confettiEffectClassName = "confetti-effect";
  const messageResultClassName = "message-result";
  const appClassName = "app";

  return (
    <div className={appClassName}>
      {showScore ? (
        <div className={scoreSectionClassName}>
          <h2>Results</h2>
          <h3>Total questions: {questions.length}</h3>
          <div className={rightAnswersClassName}>
            <p>
              <img src="/check-icon.svg" alt="Correct dialling icon" />
              Correct answers:
            </p>
            <span>{score}</span>
          </div>
          <div className={wrongAnswersClassName}>
            <p>
              <img src="/x-icon.svg" alt="Incorrect dialling icon" />
              Incorrect answers:
            </p>
            <span>{questions.length - score}</span>
          </div>
          <div className={messagesClassName}>
            {score >= 6 ? (
              <div>
                <h2>Congratulations!</h2>
                <img
                  className={confettiEffectClassName}
                  src="conffeti.gif"
                  alt="Confetti effect"
                />
              </div>
            ) : (
              <div>
                <h1 className={messageResultClassName}>
                  Don't worry, you will get it next time!
                </h1>
                <h4>Right answers to pass: 6</h4>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className={questionCountClassName}>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className={questionTextClassName}>
              <h2>{questions[currentQuestion].questionText}</h2>
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  className={answerButtonClassName}
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
