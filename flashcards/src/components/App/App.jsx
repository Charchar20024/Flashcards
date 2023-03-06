import './App.css'
import { useState } from 'react'

import Card from '../Card/Card'
import Logo from '../Logo/Logo'

const App = () => {
  const [cardContent, setCardContent] = useState("key bit won hunt rid")


  return (
      <div className="App">
        <div className='difficulties'>
          <span>Easy</span>
          <span>Medium</span>
          <span>Hard</span>
        </div>
        <Logo/>
        <Card
          cardContent = {cardContent}
          setCardContent ={setCardContent}
        />
      </div>
    )
}

export default App
