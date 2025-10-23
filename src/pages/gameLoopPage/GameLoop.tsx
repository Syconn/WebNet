import gameAreaStyles from "./styles/gameArea.module.css"
import arrayAreaStyles from "./styles/arrayArea.module.css"
import handAreaStyles from "./styles/handArea.module.css"
import {ArrayElement, HeaderElement} from "../../util/Utility.tsx";
import {useEffect, useRef, useState} from "react";
import {arrayState} from "../../networking/WebRequests.tsx";
import CardElement, {type CardData} from "./Card.tsx";
import {AnimatePresence} from "framer-motion";

function GameLoop() {
    // const [array, setArray] = useState<number[]>([10, 20, 5, 2, 1, 16])
    const [array, setArray] = useState<number[]>([]);
    const [cards, setCards] = useState<CardData[]>([]);
    const [turns] = useState<number>(0)
    const [points] = useState<number>(0)

    const prevArray = useRef<number[]>(array); //

    useEffect(() => {
        arrayState().then(arrayState => setArray(arrayState))
    }, []);

    const swap = (i: number, j: number) => {
        setArray(arr => {
            const newArr = [...arr];
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
            prevArray.current = arr;
            return newArr;
        });
    }

    const correctSpot = (val: number, ind: number) => {
        const sortedArray = [...array].sort((a, b) => a - b);
        return sortedArray[ind] !== val;
    }

    return (
        <div className={gameAreaStyles.pageContainer}>
            <HeaderElement turns={turns} points={points} reset={() => swap(1, 2)}/>
            <div className={gameAreaStyles.gameArea}>
                <div className={arrayAreaStyles.arrayArea}>
                    <AnimatePresence>
                        {array.map((val, ind) => (<ArrayElement value={val} key={val} spot={correctSpot(val, ind)}/>))}
                    </AnimatePresence>
                </div>
                <div className={handAreaStyles.handArea}>
                    {cards.map(card => (<CardElement card={card} />))}
                </div>
            </div>
        </div>
    )
}

export default GameLoop;