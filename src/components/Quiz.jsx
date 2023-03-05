import Question from "./Question"
import Button from "./Button"

export default function Quiz(props) {
// console.table(props.questions)
const questionsSet = props.questions.map(question => {
    return <Question 
            question={question.question}
            correct={question.correct_answer}
            incorrect={question.incorrect_answers}/>
})
    return (
        <div className="quiz-container">
            {questionsSet}
            <Button text="Check answers" onClick={null} />
        </div>
    )
}