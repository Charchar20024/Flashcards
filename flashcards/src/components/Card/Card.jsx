import './Card.css'
import { useState } from 'react'

import NavButton from '../NavButton/NavButton'
export const cardInfo = {
  easy: {
    1:{
        front: `fifed holler food lawn`,
        back: `5 dollar footlong`,
    },
    2:{
        front: `press hid hender ump`,
        back: `president trump`,
    },
    3:{
        front: `ellen mayo`,
        back: `LMAO`,
    },
    4:{
        front: `sure gore furry`,
        back: `sugar free`,
    },
    5:{
        front: `ab pole moose sick`,
        back: `apple music`,
    },
    6:{
        front: `hike ant eve hen`,
        back: `i cant even`,
    },
    7:{
        front: `van heap hack`,
        back: `fanny pack`,
    },
    8:{
        front: `vector hero yell`,
        back: `victory royale`,
    },
    9:{
        front: `fish hits bin hers`,
        back: `fidget spinners`,
    },
    10:{
        front: `tint hurt eight`,
        back: `tinder date`,
    }
  } ,
  medium: {
    1:{
        front: ``,
        back: ``,
    },
    2:{
        front: ``,
        back: ``,
    },
    3:{
        front: ``,
        back: ``,
    },
    4:{
        front: ``,
        back: ``,
    },
    5:{
        front: ``,
        back: ``,
    },
    6:{
        front: ``,
        back: ``,
    },
    7:{
        front: ``,
        back: ``,
    },
    8:{
        front: ``,
        back: ``,
    },
    9:{
        front: ``,
        back: ``,
    },
    10:{
        front: ``,
        back: ``,
    },
  },
  hard: {
    1:{
        front: ``,
        back: ``,
    },
    2:{
        front: ``,
        back: ``,
    },
    3:{
        front: ``,
        back: ``,
    },
    4:{
        front: ``,
        back: ``,
    },
    5:{
        front: ``,
        back: ``,
    },
    6:{
        front: ``,
        back: ``,
    },
    7:{
        front: ``,
        back: ``,
    },
    8:{
        front: ``,
        back: ``,
    },
    9:{
        front: ``,
        back: ``,
    },
    10:{
        front: ``,
        back: ``,
    },
  },
}


const Card = (props) => {
  const [numCard, setNumCard] = useState(1)
  const [cardContent, setCardContent] = useState("fifed holler food lawn")
  console.log(numCard)

  const cardClick = () => { 
    if(cardContent==cardInfo.easy[numCard].front){
        setCardContent(cardInfo.easy[numCard].back);
 
    }else{
        setCardContent(cardInfo.easy[numCard].front);
    }
  
 }

  return (
    <div className='card-2'>
      <div className='card' onClick={cardClick}>
        <div className='card-info'>
             <p className='card-num'>{numCard}/10</p>
        </div>
        <div className='card-content'>
          <p className='content' >{cardContent}</p> 
        </div>
      </div>
      <NavButton 
        numCard={numCard}
        setNumCard={setNumCard}
        setCardContent={setCardContent}
      />
    </div>
    )
}

export default Card