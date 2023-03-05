import { useEffect, useState } from 'react'
import "./App.css"
import Intro from "./components/Intro"
import Quiz from "./components/Quiz"
import blobsLemony from "./assets/blobs-lemony.png"
import blobsBaby from  "./assets/blobs-baby.png"
import { nanoid } from 'nanoid'

function App() {

  const [isStarted, setIsStarted] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [match, setMatch] = useState(0)

  function selectAnswer(e) {
    const targetId = e.target.parentNode.parentNode.id

    setQuestions(prevQuestions => {
      return prevQuestions.map(
        question => question.id === targetId 
        ? {...question, selected_answer: e.target.innerText} 
        : question)
    })
  }

  function checkAnswers() {
     let score = 0;
     
     for (let element of questions) {
      if (element.correct_answer === element.selected_answer) {
        score += 1
      } 
     }

     setScore(score)
     setIsSubmitted(true)
  }

  function initGame() {
    setIsStarted(true)
    setIsSubmitted(false)
  }

  function startGame() {
    setIsStarted(true)
    setIsSubmitted(false)
    setMatch(prevMatch => prevMatch + 1)
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(response => response.json())
      .then(data => setQuestions(data.results.map(element => {
        return {...element, id: nanoid(), selected_answer: "",};
      })))
  }, [match]);

  return (
    <div className="App">
              {isStarted ? 
              <Quiz 
              data={questions} 
              selectHandler={selectAnswer}
              submitHandler={checkAnswers}
              startHandler={startGame} 
              isSubmitted={isSubmitted}
              score={score} /> : 
              <Intro startHandler={initGame} />}
              <img className="blob lemony" src={blobsLemony}/>
              <img className="blob baby" src={blobsBaby} />
    </div>
  )
}

export default App
