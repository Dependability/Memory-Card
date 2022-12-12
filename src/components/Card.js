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
            console.log("You have pressed " + props.number);
            //add one to current
            props.addScore();
            
        } else {
            //set best Score and reset current
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