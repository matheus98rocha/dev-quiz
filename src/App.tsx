import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';

//Components
import QuestionCard from './components/QuestionCard';

// Types
import { Difficulty } from './API'


const TOTAL_QUESTIONS = 10;

const App = () => {


  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startTrivia = async () => { }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => { }

  const nextQuestion = () => { }
  return (
    <div className="App" >
      <h1>Dev Quizz</h1>

      <button onClick={startTrivia}>
        Iniciar o Jogo
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>Próxima Questão</button>
    </div >
  );
}

export default App;
