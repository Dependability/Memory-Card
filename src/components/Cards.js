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

/* const [cards, setCard] = useState([
        {name: "Finn The Human", src: "", number: 0},
        {name: "Jake The Dog", src: "", number: 1},
        {name: "Ice King", src: "", number: 2},
        {name: "Princess Bubblegum", src: "", number: 3},
        {name: "Marceline the Vampire Queen", src: "", number: 4},
        {name: "Lady Rainicorn", src: "", number: 5},
        {name: "BMO", src: "", number: 6},
        {name: "Flame Princess", src: "", number: 7},
        {name: "Lady Space Princess", src: "", number: 8},
        {name: "Earl of Lemongrab", src: "", number: 9},

    ])
*/


const Cards = (props) => {

    const [cards, setCard] = useState([
        {name: "Finn The Human", src: "./images/finn.png", number: 0},
        {name: "Jake The Dog", src: "./images/jake.png", number: 1},
        {name: "Ice King", src: "./images/Ice_King.png", number: 2},
        {name: "Princess Bubblegum", src: "./images/pb.png", number: 3},
        {name: "Marceline the Vampire Queen", src: "./images/marceline.png", number: 4},
        {name: "Lady Rainicorn", src: "./images/rainicorn.png", number: 5},
        {name: "BMO", src: "./images/BMO.png", number: 6},
        {name: "Flame Princess", src: "./images/Fire_princess.png", number: 7},
        {name: "Lady Space Princess", src: "./images/lsp.png", number: 8},
        {name: "Earl of Lemongrab", src: "./images/lemongrab.png", number: 9},

    ])

    const shuffle = () => {
        setCard(shuffleArray(cards));
        console.log(cards)
        console.log("Shuffle in the flesh.");


    }

    useEffect(()=> {
        shuffle();


    }, []);

    return <div className='cards'>
        {cards.map((elem, ind)=> <Card addScore={props.addCurrent} setBest={props.setBest} key={elem.number} shuffle={shuffle} number={elem.number} reset={props.reset} setReset = {props.setReset} name={elem.name} src={elem.src}/>)}
    </div>
}

export default Cards;