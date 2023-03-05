export default function Answer(props) {

    let styles = {};
    
    const correctAnswer = {backgroundColor: "#94D7A2", border: "none"}
    const wrongAnswer = {backgroundColor: "#F8BCBC", border: "none"}
    const selectedAnswer = {backgroundColor: "#D6DBF5",}
    const nonSelected = {border: "1px solid #4D5B9E", opacity: "0.5"}

    

    if (props.isCorrect && props.isSubmitted ) {
        styles = correctAnswer
    } else if (props.isSelected && props.isSubmitted ) {
        styles = wrongAnswer
    } else if (props.isSelected) {
        styles = selectedAnswer
    } else if (props.isSubmitted) {
        styles = nonSelected
    }

    return (
        <div className="answer" style={styles} onClick={props.onClick}>
            {props.text}
        </div>
    )
}