import Question from "./Question"
import Button from "./Button"

export default function Quiz(props) {
    
const questionsSet = props.data.map(question => {
    return <Question
            key={question.id}
            id={question.id}
            question={question.question.replace(/(&#039;|&quot;)/g, '')}
            correct={question.correct_answer}
            incorrect={question.incorrect_answers}
            selected={question.selected_answer}
            onClick={props.selectHandler}
            isSubmitted={props.isSubmitted} />
})
    return (
        <div className="quiz-container">
            {questionsSet}
            <div className="action-panel">
                {props.isSubmitted && <p>You scored {props.score}/5 correct answers</p>}
                {props.isSubmitted 
                ? <Button text="Play again" onClick={props.startHandler} />
                : <Button text="Check answers" onClick={props.submitHandler} />}
            </div>
        </div>
    )
}