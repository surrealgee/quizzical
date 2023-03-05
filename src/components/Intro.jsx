
import Button from "./Button"

export default function Intro(props) {
    return (
        <div className="intro">
            <h1 className="intro__title">Quizzical</h1>
            <p className="intro__body">Are you a trivia genius?</p>
            <Button text="Start quiz" onClick={props.startHandler} />
        </div>
    )
}