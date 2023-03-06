import './NavButton.css'

import ArrowForward from '../assets/arrow_forward.svg'
import ArrowBack from '../assets/arrow_back.svg'
import { cardInfo } from '../Card/Card'

const NavButton = (props) => {
 
  const nextCard = () => { 
    props.setNumCard(props.numCard+1);
    props.setCardContent(cardInfo.easy[props.numCard+1].front);
  }
  const prevCard = () => {
     props.setCardContent(cardInfo.easy[props.numCard-1].front);
     props.setNumCard(props.numCard-1); 
   }

  return (
      <div className="nav-buttons">
        <button onClick={prevCard}><img src={ArrowBack}/></button>
        <button onClick={nextCard}><img src={ArrowForward}/></button>
      </div>
    )
}

export default NavButton