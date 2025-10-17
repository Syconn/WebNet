import styles from "./GameLoop.module.css";
import {useState} from "react";
import ArrayElement from "./ArrayElement.tsx";

function GameLoop() {
    const [array] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.topSection}>
                <p className={styles.title}>Code-Sort</p>
            </div>

            <div className={styles.middleSection}>
                {/*<p className={styles.array}>{array}</p>*/}
                {array.map((val, ind) => <ArrayElement value={val}/>)}
            </div>

            <div className={styles.bottomSection}>
                <div className={styles.cardContainer}>
                    <button className={styles.card}>
                        <div className={styles.text}>
                            Insertion Sort
                            <img className={styles.photo} src="/vite.svg" alt="logo" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GameLoop;