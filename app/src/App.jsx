import { useState } from 'react'

import './App.css'
import { Gallery } from './Components/Gallery'
// import {
//   Button, Grid
// } from '@material-ui/core'
import Dashboard from './Dashboard'
import { GameRoundController } from './controller'
import { GameStage } from './Components/GameStage'

const controller = new GameRoundController()

function App() {
  const [state,setState] = useState(controller.getState())

  const handleSelectOption = (index) =>{
    controller.handleSelectOption(index)
    setState(controller.getState())
  }

  const handleRefreshOptions = () => {
    controller.refreshOptions()
    setState(controller.getState())
  }


  return (
    <div className="App">

      {/* <Dashboard/> */}
      
      <GameStage 
      {...state} 
      handleSelectOption={handleSelectOption}
      handleRefreshOptions={handleRefreshOptions}
      />
      <Gallery />
    </div>
  )
}

export default App
