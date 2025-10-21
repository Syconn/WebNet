import gameAreaStyles from "./styles/gameArea.module.css"
import arrayAreaStyles from "./styles/arrayArea.module.css"
import handAreaStyles from "./styles/handArea.module.css"
import {ArrayElement, HeaderElement} from "../../util/Utility.tsx";
import {useEffect, useState} from "react";
import {arrayState} from "../../networking/WebRequests.tsx";
import CardElement from "./Card.tsx";

function GameLoop() {
    const [array, setArray] = useState<number[]>([])
    const [turns] = useState<number>(0)
    const [points] = useState<number>(0)

    useEffect(() => { arrayState().then(arrayState => setArray(arrayState)) }, []);

    return (
        <div className={gameAreaStyles.pageContainer}>
          <HeaderElement turns={turns} points={points} />
          <div className={gameAreaStyles.gameArea}>
            <div className={arrayAreaStyles.arrayArea}>
              {array.map(val => (<ArrayElement value={val} key={val}/>))}
            </div>
            <div className={handAreaStyles.handArea}>
              <CardElement card={{name: "Bubble Sort", image: "bubble.png", desc: "Compares each pair of adjacent elements and swaps them if they are out of order."}} />
              <CardElement card={{name: "Insertion Sort", image: "insertion.png", desc: "Compares each pair of adjacent elements and swaps them if they are out of order."}} />
            </div>
          </div>
        </div>
    )
}

export default GameLoop;