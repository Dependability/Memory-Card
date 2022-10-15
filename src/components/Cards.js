import {useEffect, useState} from 'react';
import Card from './Card'


function shuffleArray(array) {
    let newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr
}



const Cards = (props) => {

    const [cards, setCard] = useState([1,2,3,4,5])

    const shuffle = () => {
        setCard(shuffleArray(cards));
        console.log(cards)
        console.log("Shuffle in the flesh.");


    }

    useEffect(()=> {
        shuffle();


    }, []);

    return <div>
        {cards.map((elem)=> <Card addScore={props.addCurrent} setBest={props.setBest} key={elem} shuffle={shuffle} number={elem} reset={props.reset} setReset = {props.setReset}/>)}
    </div>
}

export default Cards;