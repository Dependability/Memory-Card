
const Scoreboard = (props) => {

    return (
        <div>
            <p>Current Score: {props.current}</p>
            <p>Best Score: {props.best}</p>
        </div>
    )
}

export default Scoreboard