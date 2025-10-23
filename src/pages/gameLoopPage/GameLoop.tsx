import gameAreaStyles from "./styles/gameArea.module.css"
import arrayAreaStyles from "./styles/arrayArea.module.css"
import handAreaStyles from "./styles/handArea.module.css"
import {ArrayElement, HeaderElement} from "../../util/Utility.tsx";
import {useEffect, useRef, useState} from "react";
import {arrayState, deckState} from "../../networking/WebRequests.tsx";
import CardElement, {type CardData} from "./Card.tsx";
import {AnimatePresence} from "framer-motion";

function GameLoop() {
    const [array, setArray] = useState<number[]>([]);
    const [cards, setCards] = useState<CardData[]>([]);
    const [turns] = useState<number>(0)
    const [points] = useState<number>(0)

    const prevArray = useRef<number[]>(array);
    const sortedArray = useRef<number[]>([]);

    useEffect(() => {
        arrayState().then(arrayState => {
            if (array.length != 0) prevArray.current = array;
            if (sortedArray.current.length == 0) sortedArray.current = [...arrayState].sort((a, b) => a - b);
            setArray(arrayState)
        })
        deckState().then(cards => setCards(cards))
    }, [array]);

    return (
        <div className={gameAreaStyles.pageContainer}>
            <HeaderElement turns={turns} points={points} reset={() => {}}/>
            <div className={gameAreaStyles.gameArea}>
                <div className={arrayAreaStyles.arrayArea}>
                    <AnimatePresence>
                        {array.map((val, ind) => (<ArrayElement value={val} key={val} spot={sortedArray.current[ind] !== val}/>))}
                    </AnimatePresence>
                </div>
                <div className={handAreaStyles.handArea}>
                    {cards.map(((card, index) => (<CardElement card={card} index={index} />)))}
                </div>
            </div>
        </div>
    )
}

export default GameLoop;