import './NavButton.css'

import ArrowForward from '../assets/arrow_forward.svg'
import ArrowBack from '../assets/arrow_back.svg'


const NavButton = (props) => {
 
  const nextCard = () => { 
    if(props.numCard<10){
      props.setNumCard(props.numCard+1);
      props.setCardContent(props.level[props.numCard+1].front);
    }
  }
  const prevCard = () => {
     props.setCardContent(props.level[props.numCard-1].front);
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