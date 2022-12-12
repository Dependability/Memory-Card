
const Scoreboard = (props) => {

    return (
        <div className="scoreboard">
            <p className="currentScore">Current Score: {props.current}</p>
            <p className="bestScore">Best Score: {props.best}</p>
        </div>
    )
}

export default Scoreboard