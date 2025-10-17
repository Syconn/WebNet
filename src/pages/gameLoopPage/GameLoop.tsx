import gameAreaStyles from "./gameLoopPageStyles/gameArea.module.css"
import arrayAreaStyles from "./gameLoopPageStyles/arrayArea.module.css"
import handAreaStyles from "./gameLoopPageStyles/handArea.module.css"
import {ArrayElement, CardElement, HeaderElement} from "../../util/Utility.tsx";

function GameLoop() {
    const turns = 0
    const points = 45
    const arrayString = [1,2,3,4,5,6,7,8,9]
    return (
        <div className={gameAreaStyles.pageContainer}>
          <HeaderElement turns={turns} points={points} />
          <div className={gameAreaStyles.gameArea}>
            <div className={arrayAreaStyles.arrayArea}>
              {arrayString.map(val => (<ArrayElement value={val}/>))}
            </div>
            <div className={handAreaStyles.handArea}>
              <CardElement />
            </div>
          </div>
        </div>

    )
}

export default GameLoop;