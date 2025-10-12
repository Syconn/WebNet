import styles from "./GameLoop.module.css";

function GameLoop() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.topSection}>
                <p className={styles.title}>Code-Sort</p>
            </div>

            <div className={styles.middleSection}>
                <p className={styles.array}>[ 1 2 3 4 5 6 7 8 9 10 ]</p>
            </div>

            <div className={styles.bottomSection}>
                <div className={styles.cardContainer}>
                    <button className={styles.card}>
                        <div className={styles.text}>
                            Insertion Sort
                            <img className={styles.photo} src="/vite.svg" alt="logo" />
                            {/*<span className={styles.hoverText}>This is text now!</span>*/}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GameLoop;