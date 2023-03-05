import { useEffect, useState } from 'react'
import "./App.css"
import Intro from "./components/Intro"
import Quiz from "./components/Quiz"
import blobsLemony from "./assets/blobs-lemony.png"
import blobsBaby from  "./assets/blobs-baby.png"

function App() {

  const [isStarted, setIsStarted] = useState(true)
  const [questions, setQuestions] = useState([]);

  function startGame() {
    setIsStarted(true)
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(response => response.json())
      .then(data => setQuestions(data.results))
  }, []);

  return (
    <div className="App">
              {isStarted ? <Quiz questions={questions} /> : 
              <Intro startHandler={startGame} />}
              <img className="blob lemony" src={blobsLemony}/>
              <img className="blob baby" src={blobsBaby} />
    </div>
  )
}

export default App
