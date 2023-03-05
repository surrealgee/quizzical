export default function button(props) {
    return (
        <button className="btn" onClick={props.onClick}>{props.text}</button>
    )
}