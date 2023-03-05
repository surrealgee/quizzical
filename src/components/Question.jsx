import Answer from "./Answer"
import { nanoid } from 'nanoid'

export default function Question(props) {

    const sortedAnswers = [props.correct, ...props.incorrect].sort()
    const answerElements = sortedAnswers.map(
        answer => {
            return <Answer 
            key={nanoid()} 
            text={answer.replace(/(&#039;|&quot;)/g, "'")} 
            onClick={props.onClick} 
            isSelected={props.selected === answer ? true : false}
            isCorrect={props.correct === answer ? true : false}
            isSubmitted={props.isSubmitted}
            />
        })


    return (
        <div className="question" id={props.id}>
            <h2 className="question__title">{props.question}</h2>
            <div className="answers">
                {answerElements}
            </div>
        </div>
    )
}