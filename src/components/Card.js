import {useEffect, useState} from 'react';
const Card = (props) => {

    const [clicked, setClick] = useState(false)
    
    useEffect(()=> {
        if (props.reset) {
            setClick(false)
            props.setReset(false);
        }

    }, [props.reset])

    

    function click() {
        if (!clicked) {
            
            props.sounds[0].play();
            props.addScore();
            
            
        } else {
            
            const incorrect = new Audio('./sounds/negative_beeps-6008.mp3');
            props.sounds[1].play();
            props.setBest()

        }

        setClick(true);
        //shuffle the cards...
        props.shuffle();
        
        


    }    

    return (<div onClick={click} className='card'>
        <div className='image-wrapper'>
        <img src={props.src} alt="" />
        </div>
        <h2 className="character-name">{props.name}</h2>



    </div>)
}

export default Card;