// import styles from "./GameLoop.module.css";
import headerStyles from "./gameLoopPageStyles/header.module.css";
import gameAreaStyles from "./gameLoopPageStyles/gameArea.module.css"
import arrayAreaStyles from "./gameLoopPageStyles/arrayArea.module.css"
import handAreaStyles from "./gameLoopPageStyles/handArea.module.css"
function GameLoop() {
    const count = 0
    const pointCount = 45
    const arrayString = [1,2,3,4,5,6]
    return (
        <div className={gameAreaStyles.pageContainer}>
          <div className={headerStyles.header}>
            <button className={headerStyles.resetButton}>
              Reset
            </button>
            <p className = {headerStyles.title}>
              CodeSort
            </p>
            <div className={headerStyles.rightSection}>
              <p className = {headerStyles.turns}>
                Turns Passed {count}
              </p>
              <p className = {headerStyles.points}>
                Total Points {pointCount}
              </p>
            </div>
          </div>
          <div className={gameAreaStyles.gameArea}>
            <div className={arrayAreaStyles.arrayArea}>
              <p className={arrayAreaStyles.arrayText}>
                {arrayString}
              </p>
            </div>
            <div className={handAreaStyles.handArea}>
              <div className={handAreaStyles.card}>
                <p className = {handAreaStyles.cardText}>
                  af,jbaoufhbafilhavfailvyhbailfgkahf ilafhkbfilYFVhbakufjahflufgh
                </p>
              </div>
            </div>
          </div>
        </div>

    )
}

export default GameLoop;