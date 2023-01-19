
import Scoreboard from './components/Scoreboard';
import  {useState} from 'react';
import Cards from './components/Cards'

function App() {

  const [current, setCurret] = useState(0);
  const [best, setBestState] = useState(0);
  const [reset, setReset] = useState(false);


  const addCurrent = () => {
    console.log(current)
    setCurret((c) => c + 1);
  }
  
  const bestSet = () => {
    
    setBestState((b)=> b >= current ? b : current);
    setCurret(0);
    setReset(true);

  }

  


  return (
    <div className="App">
      <Scoreboard current={current} best={best}/>
      <Cards addCurrent={addCurrent} setBest={bestSet} reset={reset} setReset={setReset} sounds={[new Audio('./sounds/correct-6033.mp3'), new Audio('./sounds/negative_beeps-6008.mp3')]}/>
    </div>
  );
}

export default App;
