import Answer from "./Answer"

export default function Question(props) {
    
    const sortedAnswers = [props.correct, ...props.incorrect].sort()
    const answerElements = sortedAnswers.map(answer => <Answer text={answer} />)

    return (
        <div className="question">
            <h2 className="question__title">{props.question}</h2>
            <div className="answers">
                {answerElements}
            </div>
        </div>
    )
}