import arrayAreaStyles from "../pages/gameLoopPage/styles/arrayArea.module.css"
import headerStyles from "../pages/gameLoopPage/styles/header.module.css";

export function ArrayElement({ value } : {value: number}) {
    return (
        <div className={arrayAreaStyles.arrayDigit}> {/*style={{backgroundColor: "re"}}>*/}
            {value}
        </div>
    )
}

export function HeaderElement({ turns, points } : { turns: number, points: number }) {
    return (
        <div className={headerStyles.header}>
            <button className={headerStyles.resetButton}> Restart </button>
            <p className = {headerStyles.title}> CodeSort </p>
            <div className= {headerStyles.rightSection}>
                <p className = {headerStyles.turns}> Turns Passed {turns} </p>
                <p className = {headerStyles.points}> Total Points {points} </p>
            </div>
        </div>
    )
}