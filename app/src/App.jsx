import { useState } from 'react'
import config from '../../lib/config.yaml'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card, Gallery } from './Components/Gallery'
import Dashboard from './Dashboard'

console.log(config.cards[0])
function GameStage({
  card = config.cards[0]
}) {
  return (
    <div style={{
      width: 1200,
      height: 900,
      border: "1px solid blue",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h2 style={{
        textAlign:"center"
      }}>
        Select The Correct Answer...
      </h2>


      <div>
        <Card {...card} obfuscated={true}/>
      </div>
    </div>
  )
    
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      {/* <Dashboard/> */}
      {/* <h1>
        GCPMLFCG
      </h1>
      <h2>
        Google Cloud Platform Machine Learning Flashcard Game
      </h2>
       */}
       <GameStage/>
       <Gallery/>
    </div>
  )
}

export default App
